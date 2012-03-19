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

	data id: aString
!

id

	^ data id
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

!JsonPersistentModel methodsFor: 'actions'!

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

	data := aReifiedJSON
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
!

asJSONString

	^ JSON stringify: data
! !

!JsonPersistentModel methodsFor: 'initialization'!

initialize

	super initialize.

	data := <new Object()>
! !

!JsonPersistentModel methodsFor: 'reactions'!

onAfterCreate: x

	data := self class reify: x.

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

!JsonPersistentModel class methodsFor: 'accessing'!

atId: anId
	"Answers the instance of this model found at anId (or nil)"
 
	^ self read: anId
! !

!JsonPersistentModel class methodsFor: 'actions'!

read: anId

	jQuery ajax: #{ 
		'url' -> (self path, '/',anId).
		'type' -> 'GET'.
		'sucess' -> [:x| self onAfterRead: x].
		'fail' -> [:x| ModelReadError signal: 'Could not read ', self name,':  ', x responseText].
		'error' -> [:x| ModelReadError signal: 'Could not read ', self name,':  ', x responseText]}
!

create

	| newInstance |

	newInstance := self basicNew initialize.

	jQuery ajax: #{ 
		'url' -> self path.
		'type' -> 'POST'.
		'success' -> [:x| newInstance onAfterCreate: x].
		'fail' -> [:x| ModelCreateError signal: 'Could not create ', self name,':  ', x responseText].
		'error' -> [:x| ModelCreateError signal: 'Could not create ', self name,':  ', x responseText]}.

	^ newInstance
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
! !

!JsonPersistentModel class methodsFor: 'reactions'!

onAfterRead: someJson

	^ self reify: someJson
! !

