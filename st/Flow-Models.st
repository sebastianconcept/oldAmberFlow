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

Model subclass: #JsonModel
	instanceVariableNames: 'data'
	category: 'Flow-Models'!

!JsonModel methodsFor: 'accessing'!

data

	^ data
!

at: aKey

	^ data at: aKey
!

at: aKey put: anObject

	data at: aKey put: anObject.

	^ anObject
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

dateAndTimeAt: aSelector

	^ Date fromString: (self at: aSelector)
! !

!JsonModel methodsFor: 'actions'!

asJSONString

	self onAboutToJSON.

	^ JSON stringify: data
!

syncFrom: someJson

	self syncWith: (self class reify: someJson)
!

syncWith: aReifiedJSON
	"Sync the current values in this model 
	with the ones coming in aReifiedJSON."

	data := aReifiedJSON
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
! !

!JsonModel methodsFor: 'initialization'!

initialize

	super initialize.

	data := <new Object()>
! !

!JsonModel methodsFor: 'reactions'!

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
! !

!JsonModel class methodsFor: 'actions'!

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

manyFromJson: someJson

	^ (JSON parse: someJson) collect:[:each|
		 self fromReified: each ]
!

reify: someJson
	"Returns a simple javascript object with
	the attributes meant for the matching instance variable content of this model."

	^ JSON parse: someJson
! !

