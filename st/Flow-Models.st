Smalltalk current createPackage: 'Flow-Models' properties: #{}!
Object subclass: #Model
	instanceVariableNames: 'announcer'
	package: 'Flow-Models'!
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

jsonIgnoreInstanceVariables

	^ super jsonIgnoreInstanceVariables, #('announcer')
!

modelPath
	"Answers the path for posting instances of this model.
	Subclasses should override if appropriate."

	^ self name
!

path
	^ self basePath,'/', self modelPath
! !

!Model class methodsFor: 'initialization'!

initialize

	"Set amber to commit using the Flow's API"
	Package defaultCommitPathSt: '/flow/commit'.
	Package defaultCommitPathJs: '/flow/commit'
! !

Model subclass: #JsonModel
	instanceVariableNames: 'data'
	package: 'Flow-Models'!

Model subclass: #PersistentModel
	instanceVariableNames: 'data'
	package: 'Flow-Models'!

!PersistentModel methodsFor: 'accessing'!

at: aKey

	^ data at: aKey
!

at: aKey put: anObject

	data at: aKey put: anObject.

	^ anObject
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

createdOn: aDate

	self at: #createdOn put: aDate
!

data

	^ data
!

dateAndTimeAt: aSelector

	^ Date fromString: (self at: aSelector)
!

id

	^ data at: #id
!

id: aString

	data at: #id put: aString
!

path 

	^ self class path
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

url

	^ self path,'/',self id asString
! !

!PersistentModel methodsFor: 'actions'!

asJSONString

	self onAboutToJSON.

	^ JSON stringify: data
!

create

	^ self createDo:[nil]
!

createDo: aBlock

	jQuery ajax: #{
		'url' -> self path.
		'type' -> 'POST'.
		'data' -> self asJSONString.
		'success' -> [:x| self onAfterCreate: x done: aBlock].
		'fail' -> [:x| ModelCreateError signal: 'Could not create ', self class name,':  ', x responseText].
		'error' -> [:x| ModelCreateError signal: 'Could not create ', self class name,':  ', x responseText]}.

	^ self
!

delete

	self deleteDo:[nil]
!

deleteDo: aBlock

	jQuery ajax: #{ 
		'url' -> (self path, '/',self id asString).
		'type' -> 'DELETE'.
		'data' -> self asJSONString.
		'success' -> [:x| self onAfterDelete: x done: aBlock].
		'fail' -> [:x| self onDeleteFail: x].
		'error' -> [:x| self onDeleteFail: x]}
!

doesNotUnderstand: aMessage
	"The idea behind this DNU is to use the selector as setters or getter 
	delegating to data (aJsonObject)"
	
	| key |


	key := aMessage selector asSymbol.

	key isUnary ifTrue: [
		(data isKindOf: HashedCollection)
			ifTrue:[^ data at: key asString ifAbsent:[nil]]
			ifFalse:[^ data at: key asString]].

	^ (key isKeyword and: [
	(key asString occurrencesOf: ':') = 1])
		ifTrue: [key := key allButLast.
				data at: key asString put: aMessage arguments first]
		ifFalse: [super doesNotUnderstand: aMessage]
!

refresh
	"Re-read this model's state."

	self refreshDo:[nil]
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

save
	^ self saveDo:[nil]
!

saveDo: aBlock
	^ self updateDo: aBlock
!

syncFrom: someJson

	self syncWith: (self class reify: someJson)
!

syncWith: aReifiedJSON
	"Sync the current values in this model 
	with the ones coming in aReifiedJSON."

	data := aReifiedJSON
!

update

	self updateDo: [nil]
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

!PersistentModel methodsFor: 'initialization'!

initialize

	super initialize.

	data := HashedCollection new
! !

!PersistentModel methodsFor: 'reactions'!

onAboutToJSON
	"This model is about to be stringified in JSON.
	All inst var values that are expected to be model objects, need to be instanciated as expected."
	| obj keys |

	obj := <Object>.
	obj := JSObjectProxy on: obj.
	keys := obj keys: data. 

	keys do:[:key| |value|
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

onAfterDelete: x done: aBlock
	
	self announce: (ModelDeleted for: self).

	aBlock value: self
!

onAfterRefresh: x done: aBlock

	self syncWith: (self class reify: x).
	self announce: (ModelRefreshed for: self).
	aBlock value: self
!

onAfterUpdate: x done: aBlock
	
	self announce: (ModelUpdated for: self).

	aBlock value: self
!

onDeleteFail: x

	ModelUpdateError signal: 'Could not delete ', self class name
!

onRefreshFail: x

	ModelRefreshError signal: 'Could not refresh ', self class name
!

onUpdateFail: x

	ModelUpdateError signal: 'Could not update ', self class name
! !

!PersistentModel class methodsFor: 'accessing'!

atId: anId
	"Answers the instance of this model found at anId (or nil)"
 
	^ self read: anId do: [nil]
! !

!PersistentModel class methodsFor: 'actions'!

create

	^ self createDo: [nil]
!

createDo: aBlock

	| newInstance |

	newInstance := self basicNew initialize.

	jQuery ajax: #{
		'url' -> self path.
		'type' -> 'POST'.
		'data' -> newInstance asJSONString.
		'success' -> [:x| newInstance onAfterCreate: x done: aBlock].
		'fail' -> [:x| ModelCreateError signal: 'Could not create ', self name,':  ', x responseText].
		'error' -> [:x| ModelCreateError signal: 'Could not create ', self name,':  ', x responseText]}.

	^ newInstance
!

createdOnFrom: aReifiedJSON

	^ Date fromString: aReifiedJSON
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

manyFromJson: someJson

	^ (JSON parse: someJson) collect:[:each|
		 self fromReified: each ]
!

read: anId

	self read: anId do: [nil]
!

read: anId do: aBlock

	jQuery ajax: #{ 
		'url' -> (self path, '/',anId).
		'type' -> 'GET'.
		'sucess' -> [:x| self onAfterRead: x done: aBlock].
		'fail' -> [:x| ModelReadError signal: 'Could not read ', self name,':  ', x responseText].
		'error' -> [:x| ModelReadError signal: 'Could not read ', self name,':  ', x responseText]}
!

reify: someJson
	"Returns a simple javascript object with
	the attributes meant for the matching instance variable content of this model."

	^ JSON parse: someJson
! !

!PersistentModel class methodsFor: 'reactions'!

onAfterRead: someJson done: aBlock

	self reify: someJson.
	aBlock value: self.
	^ self
! !

