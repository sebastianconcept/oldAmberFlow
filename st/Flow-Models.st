Smalltalk current createPackage: 'Flow-Models' properties: #{}!
Object subclass: #Model
	instanceVariableNames: 'announcer'
	category: 'Flow-Models'!
!Model commentStamp!
Models are meant to be used as local-only (at the DOM) objects that should be transident in nature (not-persistent)!

!Model methodsFor: 'accessing'!

announcer

	^ announcer ifNil:[self initializeAnnouncer]
! !

!Model methodsFor: 'actions'!

announce: anAnnouncement

	self announcer announce: anAnnouncement
!

on: anAnnouncementClass do: aReactionBlock

	^ self announcer on: anAnnouncementClass do: aReactionBlock
! !

!Model methodsFor: 'initialization'!

initializeAnnouncer

	^ announcer := Announcer new
! !

!Model class methodsFor: 'accessing'!

basePath
	"Answers the base path for the application's API.
	Subclasses should override if appropriate."

	"By default we use the AmberMP's default"
	^ 'api'
!

path
	^ self basePath,'/', self modelPath
!

modelPath
	"Answers the path for posting instances of this model.
	Subclasses should override if appropriate."

	^ self name
!

jsonIgnoreInstanceVariables

	^ super jsonIgnoreInstanceVariables, #('announcer')
! !

!Model class methodsFor: 'initialization'!

initialize

	"Set amber to commit using the Flow's API"
	Package defaultCommitPathSt: '/flow/commit'.
	Package defaultCommitPathJs: '/flow/commit'
! !

Model subclass: #PersistentModel
	instanceVariableNames: 'id createdOn'
	category: 'Flow-Models'!
!PersistentModel commentStamp!
PersistentModels are objects that are manipulable here but they're also stored server side.!

!PersistentModel methodsFor: 'accessing'!

id: aString

	id := aString
!

id

	^ id
!

url

	^ self path,'/',id asString
!

path 

	^ self class path
!

createdOn: aDate

	createdOn := aDate
!

createdOn

	^ createdOn
! !

!PersistentModel methodsFor: 'actions'!

update

	jQuery ajax: #{ 
		'url' -> (self path, '/',id asString).
		'type' -> 'PUT'.
		'data' -> self asJSONString.
		'success' -> [:x| self onAfterUpdate: x].
		'fail' -> [:x| self onUpdateFail: x].
		'error' -> [:x| self onUpdateFail: x]}
!

delete

	jQuery ajax: #{ 
		'url' -> (self path, '/',id asString).
		'type' -> 'DELETE'.
		'success' -> [:x| self onAfterDelete: x].
		'fail' -> [:x| self onDeleteFail: x].
		'error' -> [:x| self onDeleteFail: x]}
!

syncWith: aReifiedJSON
	"Sync the current values in this model 
	with the ones coming in aReifiedJSON."
	| instVarsToSync reifierMethod |

	aReifiedJSON ifNil:[^nil].

	instVarsToSync := self class allInstanceVariableNames reject:[:e| self class jsonIgnoreInstanceVariables includes: e].
	instVarsToSync do:[:instVarName| |value|
		value := aReifiedJSON at: instVarName.
		reifierMethod := instVarName,'From:'.

		"If there is a reifier method for that instVar, then it should be used"
		(self class respondsTo: reifierMethod) ifTrue:[
			value := self class perform: reifierMethod withArguments: (Array with: value)].

		"If the reified value looks like a model, we compose it."
		(value isKindOf: JSObjectProxy) ifTrue:[
			value := self class reify: instVarName from: value].

		"If the reified value is a collection, we collect its reified elements."
		((value isKindOf: Collection) and:[
		(value isKindOf: CharacterArray) not]) ifTrue:[
			value := value collect:[:each| self class reifyElementsOn: instVarName from: each]].

		self 
			instVarAt: instVarName 
			put: value].
!

refresh
	"Re-read this model's state."

	jQuery ajax: #{ 
		'url' -> (self path, '/',id asString).
		'type' -> 'GET'.
		'success' -> [:x| self onAfterRefresh: x].
		'fail' -> [:x| self onRefeshFail: x].
		'error' -> [:x| self onRefreshFail: x]}
!

save
	^ self update
!

syncFrom: someJson

	self syncWith: (self class reify: someJson)
! !

!PersistentModel methodsFor: 'reactions'!

onAfterCreate: x

	self syncWith: (self class reify: x).
	self announce: (ModelCreated for: self)
!

onAfterUpdate: x
	
	self announce: (ModelUpdated for: self)
!

onUpdateFail: x

	ModelUpdateError signal: 'Could not update ', self class name
!

onDeleteFail: x

	ModelUpdateError signal: 'Could not delete ', self class name
!

onAfterDelete: x
	
	self announce: (ModelDeleted for: self)
!

onRefreshFail: x

	ModelRefreshError signal: 'Could not refresh ', self class name
!

onAfterRefresh: x

	self syncWith: (self class reify: x).
	self announce: (ModelRefreshed for: self)
! !

!PersistentModel class methodsFor: 'accessing'!

atId: anId
	"Answers the instance of this model found at anId (or nil)"
 
	^ self read: anId
! !

!PersistentModel class methodsFor: 'actions'!

read: anId

	jQuery ajax: #{ 
		'url' -> (self path, '/',anId).
		'type' -> 'GET'.
		'sucess' -> [:x| self onAfterRead: x].
		'fail' -> [:x| self onReadFail: x].
		'error' -> [:x| self onReadFail: x]}
!

create

	| newInstance |

	newInstance := self basicNew initialize.

	jQuery ajax: #{ 
		'url' -> self path.
		'type' -> 'POST'.
		'success' -> [:x| newInstance onAfterCreate: x].
		'fail' -> [:x| self onCreateFail: x].
		'error' -> [:x| self onCreateFail: x]}.

	^ newInstance
!

reify: aJSONString
	"Returns a simple javascript object with
	the attributes meant for the matching instance 
	of this model."

	^ JSON parse: aJSONString
!

fromJson: someJson
	"Answers a new instance of this model and returns it
	in the state dictated by someJson."

	^ self new syncFrom: someJson
!

reify: instVarName from: aReifiedJSON
	"Makes this class to answer a reified instance of its expected value at its instVar named
	instVarName. All that based on aReifiedJSON.
	Note: in order to work, this assumes you have implemented (in the class
	side) methods looking like [varName]From: 
	Example:  User class>>personFrom: 
	that should return an Amber's first class citizen aPerson object."

	| reifierMethod |

	reifierMethod := instVarName,'From:'.

	(self respondsTo: reifierMethod) ifFalse:[
		MissingInstanceVariableReifier signal: 'Please implement: ', self name,' class>>', reifierMethod, ' to properly reify that instance variable'.].

	^ self perform: reifierMethod asSymbol withArguments: (Array with: aReifiedJSON)
!

reifyElementsOn: instVarName from: aReifiedJSON
 	"Makes this class to answer a reified instance, one of the collection of elements stored at instVarName. 
	The source for that is aReifiedJSON.
	Note: in order to work, this assumes you have implemented (in the class
	side) methods looking like oneOf[varName]From: 
	Example:  ToDoList class>>oneOfToDosFrom: 
	that should return an Amber's first class citizen aToDo object."

	| reifierMethod |

	reifierMethod := 'oneOf',instVarName capitalized,'From:'.
	(self respondsTo: reifierMethod) ifFalse:[
		MissingInstanceVariableReifier signal: 'Please implement: ', self name,' class>>', reifierMethod, ' to properly reify that instance variable'.].

	^ self perform: reifierMethod asSymbol withArguments: (Array with: aReifiedJSON)
!

fromReified: aReifiedJSON
	"Answers a new instance of this model and returns it
	in sync with aReifiedJSON."

	^ self new syncWith: aReifiedJSON
!

createdOnFrom: aReifiedJSON

	^ Date fromString: aReifiedJSON
!

manyFromJson: someJson

	^ (JSON parse: someJson) collect:[:each|
		 self fromReified: each ]
! !

!PersistentModel class methodsFor: 'reactions'!

onCreateFail: x

	ModelCreateError signal: 'Could not create ', self name,':  ', x responseText
!

onReadFail: x

	ModelReadError signal: 'Could not read ', self name,':  ', x responseText
!

onAfterRead: x

	^ self reify: x
! !

Model subclass: #JsonPersistentModel
	instanceVariableNames: 'data'
	category: 'Flow-Models'!

!JsonPersistentModel methodsFor: 'accessing'!

id: aString

	data at: #id put: aString
!

id

	^ data at: #id
!

url

	^ self path,'/',self id asString
!

path 

	^ self class path
!

createdOn: aDate

	self at: #createdOn put: aDate
!

createdOn 

	| selector expects object|

	selector := #createdOn.
	expects := Date.

	object := self at: selector asString.
	object ifNil:[^nil].

	(object isKindOf: expects) ifTrue:[^object].

	^ self at: selector asString put: (self dateAndTimeAt: selector).
!

data

	^ data
!

subModelAt: aSelector
	"Answers the reified submodel (instantiating if necessary)."
	
	| subModelData modelClass |

	subModelData := data at: aSelector.
	subModelData ifNil:[^nil].
	
	modelClass := subModelData at: 'class'.
	modelClass := Smalltalk current at: modelClass.

	modelClass ifNil:[^ModelMetadataError signal: 'Cannot find ',aSelector asString,'''s class for this metadata'].
	
	^ modelClass fromReified: subModelData
!

at: aKey

	^ data at: aKey
!

at: aKey put: anObject

	data at: aKey put: anObject.

	^ anObject
!

dateAndTimeAt: aSelector

	^ Date fromString: (self at: aSelector)
! !

!JsonPersistentModel methodsFor: 'actions'!

update

	self updateDo: [nil]
!

delete

	self deleteDo:[nil]
!

syncWith: aReifiedJSON
	"Sync the current values in this model 
	with the ones coming in aReifiedJSON."

	data := aReifiedJSON
!

refresh
	"Re-read this model's state."

	self refreshDo:[nil]
!

save
	^ self saveDo:[nil]
!

syncFrom: someJson

	self syncWith: (self class reify: someJson)
!

asJSONString

	self onAboutToJSON.

	^ JSON stringify: data
!

doesNotUnderstand: aMessage
	"The idea behind this DNU is to use the selector as setters or getter 
	delegating to data (aJsonObject)"
	
	| key |


	key := aMessage selector asSymbol.

	key isUnary ifTrue: [
		^ data at: key asString].

	^ (key isKeyword and: [
	(key asString occurrencesOf: ':') = 1])
		ifTrue: [key := key allButLast.
				data at: key asString put: aMessage arguments first]
		ifFalse: [super doesNotUnderstand: aMessage]
!

deleteDo: aBlock

	jQuery ajax: #{ 
		'url' -> (self path, '/',self id asString).
		'type' -> 'DELETE'.
		'success' -> [:x| self onAfterDelete: x done: aBlock].
		'fail' -> [:x| self onDeleteFail: x].
		'error' -> [:x| self onDeleteFail: x]}
!

refreshDo: aBlock
	"Re-read this model's state."

	jQuery ajax: #{ 
		'url' -> (self path, '/',self id asString).
		'type' -> 'GET'.
		'success' -> [:x| self onAfterRefresh: x done: aBlock].
		'fail' -> [:x| self onRefeshFail: x].
		'error' -> [:x| self onRefreshFail: x]}
!

saveDo: aBlock
	^ self updateDo: aBlock
!

updateDo: aBlock

	jQuery ajax: #{ 
		'url' -> (self path, '/',self id asString).
		'type' -> 'PUT'.
		'data' -> self asJSONString.
		'success' -> [:x| self onAfterUpdate: x done: aBlock].
		'fail' -> [:x| self onUpdateFail: x].
		'error' -> [:x| self onUpdateFail: x]}
! !

!JsonPersistentModel methodsFor: 'initialization'!

initialize

	super initialize.

	data := <new Object()>
! !

!JsonPersistentModel methodsFor: 'reactions'!

onUpdateFail: x

	ModelUpdateError signal: 'Could not update ', self class name
!

onDeleteFail: x

	ModelUpdateError signal: 'Could not delete ', self class name
!

onRefreshFail: x

	ModelRefreshError signal: 'Could not refresh ', self class name
!

onAboutToJSON
	"This model is about to be stringified in JSON.
	All inst var values that are expected to be model objects, need to be instanciated as expected."

	data keys do:[:key| |value|
		value := data at: key.
		"Transcript cr; show: self class name,'>>onAboutToJSON  -> ', key asString, ' -> ', value printString."

		"If the value is a js object proxy, we assume it's the data for a (composed) flow model, 
		so we call the getter in this receiver expecting to get it properly instantiated (because that's our convention here)."
		(value isKindOf: JSObjectProxy) ifTrue:[
			(self respondsTo: key) ifFalse:[ModelGetterIsMissing signal: 'Cannot find getter for: ', key].
			value := self perform: key asSymbol.
			value onAboutToJSON.
			data at: key put: value]].
!

onAfterCreate: x done: aBlock

	data := self class reify: x.

	self announce: (ModelCreated for: self).
	aBlock value: self
!

onAfterRefresh: x done: aBlock

	self syncWith: (self class reify: x).
	self announce: (ModelRefreshed for: self).
	aBlock value: self
!

onAfterDelete: x done: aBlock
	
	self announce: (ModelDeleted for: self).

	aBlock value: self
!

onAfterUpdate: x done: aBlock
	
	self announce: (ModelUpdated for: self).

	aBlock value: self
! !

!JsonPersistentModel class methodsFor: 'accessing'!

atId: anId
	"Answers the instance of this model found at anId (or nil)"
 
	^ self read: anId do: [nil]
! !

!JsonPersistentModel class methodsFor: 'actions'!

read: anId

	self read: anId do: [nil]
!

create

	^ self createDo: [nil]
!

reify: someJson
	"Returns a simple javascript object with
	the attributes meant for the matching instance variable content of this model."

	^ JSON parse: someJson
!

fromJson: someJson
	"Answers a new instance of this model and returns it
	in the state dictated by someJson."

	^ self new syncFrom: someJson
!

fromReified: aReifiedJSON
	"Answers a new instance of this model and returns it
	in sync with aReifiedJSON."

	^ self new syncWith: aReifiedJSON
!

createdOnFrom: aReifiedJSON

	^ Date fromString: aReifiedJSON
!

manyFromJson: someJson

	^ (JSON parse: someJson) collect:[:each|
		 self fromReified: each ]
!

createDo: aBlock

	| newInstance |

	newInstance := self basicNew initialize.

	jQuery ajax: #{ 
		'url' -> self path.
		'type' -> 'POST'.
		'success' -> [:x| newInstance onAfterCreate: x done: aBlock].
		'fail' -> [:x| ModelCreateError signal: 'Could not create ', self name,':  ', x responseText].
		'error' -> [:x| ModelCreateError signal: 'Could not create ', self name,':  ', x responseText]}.

	^ newInstance
!

read: anId do: aBlock

	jQuery ajax: #{ 
		'url' -> (self path, '/',anId).
		'type' -> 'GET'.
		'sucess' -> [:x| self onAfterRead: x done: aBlock].
		'fail' -> [:x| ModelReadError signal: 'Could not read ', self name,':  ', x responseText].
		'error' -> [:x| ModelReadError signal: 'Could not read ', self name,':  ', x responseText]}
! !

!JsonPersistentModel class methodsFor: 'reactions'!

onAfterRead: someJson done: aBlock

	self reify: someJson.
	aBlock value: self.
	^ self
! !

