Smalltalk current createPackage: 'Flow-Presenters' properties: #{}!
Widget subclass: #Presenter
	instanceVariableNames: 'children model announcer parent wrapper'
	category: 'Flow-Presenters'!

!Presenter methodsFor: 'accessing'!

announcer

	^ announcer ifNil:[self initializeAnnouncer]
!

announce: anAnnouncement
	"Announce (bubbling through parents)"
	
	self announcer announce: anAnnouncement.

	anAnnouncement isBubbling ifTrue:[
		self parent ifNotNil:[
			self parent announce: anAnnouncement]]
!

parent

	^ parent
!

parent: aPresenter
	parent := aPresenter
!

children

	^ children ifNil:[self initializeChildren]
!

at: aKey ifAbsent: aBlock

	^ self children at: aKey ifAbsent: aBlock
!

at: aKey
	"Answers the (sub)widget stored in this receiver at aKey"
	^ self children at: aKey
!

at: aKey put: aPresenter 

	self childrenAt: aKey put: aPresenter.

	^ aPresenter
!

childrenAt: aKey
	"Answers the (sub)widget that the receiver has stored at aKey"
	^ self at: aKey
!

model
	
	^ model
!

ifAbsentAt: aKey put: aBlock
	"Conditionally (to its abscence) adds the presenter returned by aBlock
	as (sub)widget of this widget.
	Conveniently, answers that very presenter"
	
	(self hasPresenterAt: aKey) ifFalse:[
		self at: aKey put: aBlock value].

	^ self at: aKey
!

ifAbsentAt: aKey put: aBlock andDo: anotherBlock
	"Conditionally (to its abscence) adds the presenter answered by aBlock
	as (sub)widget of this widget and then evaluates anotherBlock.
	Note: the typical applicability of anotherBlock is the configuration 
	of the observation of sub widgets' announcements"
	
	(self hasPresenterAt: aKey) ifFalse:[
		self at: aKey put: aBlock value.
		anotherBlock value] .

	^ self at: aKey
!

componentsAt: aKey put: aPresenter 
	"Answers the presenter recently added to the receiver
	and with this receiver as its parent."
	
	self children at: aKey put: aPresenter.
	aPresenter isPresenter ifTrue: [aPresenter parent: self].
	^ aPresenter
!

childrenAt: aKey put: aPresenter 
	"Answers the presenter recently added to the receiver
	(with this receiver as its parent)."
	
	self children at: aKey put: aPresenter.
	aPresenter isPresenter ifTrue: [aPresenter parent: self].
	^ aPresenter
!

on: anAnnouncementClass do: aReactionBlock

	^ self announcer on: anAnnouncementClass do: aReactionBlock
!

visible
	"Answers true if this presenter should be visible 
	as soon as it get's rendered (or not, in which case,
	 it will be rendered while staying hidden)."
	^ visible ifNil:[self initializeVisible]
!

visible: aBoolean
	"Sets if this presenter should be visible 
	as soon as it get's rendered (or not, in which case,
	 it will be rendered while staying hidden)."
	visible := aBoolean
!

asJQuery
	
	^ wrapper asJQuery
!

wrapper

	^ wrapper
!

allSubPresenters

	^ self addAllSubPresentersTo: Set new
!

addAllSubPresentersTo: aSet
	"Adds all the sub presenters of the receiver to aSet."
	
	self subPpresenters do:[:aPresenter|
		aPresenter ifNotNil:[
			aSet add: aPresenter.
			aPresenter addAllSubPresentersTo: aSet]].
	
	^ aSet
!

subPresenters

	^ self children values
!

tr

	^ tr
!

wrapper: aTagBrush

	wrapper := aTagBrush
! !

!Presenter methodsFor: 'actions'!

doesNotUnderstand: aMessage

	^ (self hasPresenterAt: aMessage selector asSymbol)
		ifTrue:[self at: aMessage selector asSymbol]
		ifFalse:[super doesNotUnderstand: aMessage]
!

setModel: aModel
	"This widget is going updating its model to aModel"

	self onAboutToUpdateModel: aModel.

	model := aModel
!

open
	
	self onAboutToOpen.

	self paintOnJQuery: 'body' asJQuery.

	self onAfterOpen
!

newCanvasOn: aJQuery
	"Answers a new canvas based on the given aJQuery element."

	^ HTMLCanvas onJQuery: aJQuery
!

hide

	wrapper asJQuery hide.
	self onHide.
!

show

	wrapper asJQuery show.
	self onShow
!

append: aPresenter
	"Appends aPresenter to this presenter.
	Note: it's actually appended to the wrapper of this guy."

	wrapper append: aPresenter asJQuery
!

paint: aPresenter
	"Paints the (sub)preenter aPresenter in this (parent)presenter."

	[aPresenter paintOnJQuery: self asJQuery] on: Error do:[:x| self halt]
!

hideAll
	"Hide all the children.
	Note: it's done in such a way that if they don't exist they won't evoked."

	self children keys do:[:each| |child|
		child := self at: each ifAbsent:[nil].
		child ifNotNil:[
			child hide]].
!

newCanvas
	"Answers a new canvas based on the JQuery element wrapping this presenter."

	^ self newCanvasOn: self asJQuery
!

remove: aPresenter
	"Removes aPresenter from this presenter and from the DOM.
	Note: JQuery takes care of terminating event observations."
	| target |

	self children keysAndValuesDo:[:k :v|	
		(v == aPresenter) ifTrue:[
			target := k]].

	aPresenter asJQuery remove.
	self children removeKey: target ifAbsent:[nil].
!

removeAll

	self subPresenters do:[:e| 
		e remove]
!

feedbackText: aString

	self neutralFeedbackText: aString
!

positiveFeedbackText: aString

	self announce: (FeedbackRequest for: aString) bePositive
!

negativeFeedbackText: aString

	self announce: (FeedbackRequest for: aString) beNegative
!

neutralFeedbackText: aString

	self announce: (FeedbackRequest for: aString) beNeutral
!

setId: aString

	wrapper id: aString
!

remove

	self removeAll.

	parent 
		ifNil:[self asJQuery remove.]
		ifNotNil:[parent remove: self].
!

removeAt: aKey
	"Removes the (sub)presenter found at aKey
	does nothing otherwise."
	| target |

	self children keysAndValuesDo:[:k :v|	
		(k == aKey) ifTrue:[
			target := v]].

	target ifNotNil:[target remove]
! !

!Presenter methodsFor: 'initialization'!

initializeAnnouncer

	^ announcer := Announcer new
!

initializeChildren

	^ children := Dictionary new
!

model: aModel
	"Set the model of this widget"

	self setModel: aModel.
	
	self onModelUpdated
!

initializeVisible
	"We set the visible default in false so the application's
	behavior can decide elsewere how (and if) this presenter should appear."

	^ visible := false
!

initialize

	super initialize.

	painted := false
! !

!Presenter methodsFor: 'painting'!

paintOn: html
	"Paints the content (the wrapped content, like wrapper NOT included)
	of this presenter. Sub classes should override as appropiate."
	
	"default is paint nothing"
	^ self
!

paintOnJQuery: aJQuery
	"Appends what's being paint by this presenter to aJQuery."

	self appendToJQuery: aJQuery
! !

!Presenter methodsFor: 'reactions'!

onModelUpdated
	"The model has been updated.
	This is your chance to react about it."
	
	"no-op"
!

onAboutToUpdateModel: aModel
	"The model is about to be updated.
	This is your chance to react about it."
	
	"no-op"
!

onAboutToOpen

	"no-op"
!

onHide

	"no-op"
!

onShow

	"no-op"
!

onAfterOpen

	"no-op"
!

onAfterPainted

	"no-op"
! !

!Presenter methodsFor: 'rendering'!

renderOn: html
	"Start to paint this presenter.
	Note: presenters are always wrapped in a div using as CSS class
	it's class name."

	wrapper := html div.
	
	wrapper
		class: self class name;
		with:[self paintOn: html].
	self onAfterPainted.
	painted := true.
! !

!Presenter methodsFor: 'testing'!

hasParent

	^ parent notNil
!

isPresenter

	^ true
!

hasPresenterAt: aKey

	^ self children includesKey: aKey
!

isPainted

	^ painted
! !

!Presenter class methodsFor: 'accessing'!

defaultModel

	^ nil
! !

!Presenter class methodsFor: 'actions'!

for: aModel

	^ self new
		model: aModel;
		yourself
!

open

	^ (self for: self defaultModel) open
! !

Presenter subclass: #ItemsPresenter
	instanceVariableNames: 'items itemsGetter loader'
	category: 'Flow-Presenters'!
!ItemsPresenter commentStamp!
This kind of presenter is prepared to deal with a bunch of similar subpresenters.

You typically use one of these for presenting lists of things (you should subclass it and specialize it).

What you list in this presenters are the models you set in the #items instVar. Note that #items gets lazily initialized and the list of models is queried when the #itemsGetter block is evaluated.!

!ItemsPresenter methodsFor: 'accessing'!

items

	^ items
!

items: someModels

	items := someModels
!

itemsGetter

	^ itemsGetter ifNil:[self initializeItemsGetter]
!

itemsGetter: aBlock

	itemsGetter := aBlock
!

itemPresenters

	^ self items collect:[:item|
		self presenterFor: item]
!

presenterFor: anItem
	"Answers the presenter that corresponds to anItem.
	If this presenter doesn't have a subpresenter for anItem,
	it'll be lazily created."
	| itemPresenter |

	itemPresenter := self 
		ifAbsentAt: anItem 
		put:[self makePresenterFor: anItem]
		andDo:[self observeItemPresenter: (self at: anItem) ].

	^ itemPresenter
!

presenterClassFor: anItem
	"Returns the class of the presenter specialized in presenting anItem."

	self subclassResponsibility
!

loader

	^ loader ifNil:[self initializeLoader]
! !

!ItemsPresenter methodsFor: 'actions'!

reset

	self removeAll.
	items := nil.
!

makePresenterFor: anItem
	"Answers a new presenter corresponding to anItem."

	| itemPresenter |

	itemPresenter := (self presenterClassFor: anItem) new.

	self onModel: anItem for: itemPresenter.

	^ itemPresenter
!

observeItemPresenter: anItemPresenter
	"Sets the observations for anItemPresenter."

	"no-op"
!

makeLoader
	"Makes the loader that's shown while waiting to get the results when querying for the items."

	self subclassResponsibility

	" use this as an idea

	^(self newCanvasOn: '#ThisPresenter' asJQuery) img
		id: 'ThisPresenterLoader';
		src: '../files/YourLibrary/img/loaderBar.gif';
		yourself"
!

loadItemsDo: aBlock
	"Loads the items form the getter block and evaluates passing the reaction aBlock to it."

	^ self itemsGetter value: aBlock
!

itemsDo: aBlock
	"Performs aBlock either after loading the items or when it already have them."

	items 
		ifNil: [self loadItemsDo: aBlock]
		ifNotNil: aBlock
!

getItemsDo: aBlock
	"Returns the collection of items that should be presented by this presenter.
	Evaluates the onDone reaction when the answer arrives."

	"You can use this idea in your concrete ItemsPresenter subclass:

	jQuery ajax: #{ 
		'url' -> ('api/Blah/find?whatever=thing&you=needToDo').
		'type' -> 'GET'.
		'success' -> [:x| self onAfterLoad: x do: onDone].
		'fail' -> [:x| GettingItemsError signal: 'Cannot get the Blah kind of items: ', x responseText].
		'error' -> [:x| GettingItemsError signal: 'Cannot get the Blah kind of items: ', x responseText]}"  

	^ self subclassResponsibility
!

showLoader

	self loader asJQuery hide fadeIn
!

hideLoader

	self loader asJQuery hide fadeOut: 0.5
!

refresh
	
	self isLoaded ifFalse:[^self].

	self reset.
	self loadAndPaintOn: self newCanvas
!

makeItemsGetter

	^ [:onDone| self getItemsDo: onDone]
!

makeItemsFromJson: someJson
	"Answers the collection of items reified from someJson."

	self subclassResponsibility
! !

!ItemsPresenter methodsFor: 'initializing'!

initializeLoader

	^ loader := self makeLoader
!

initializeItemsGetter
	^ itemsGetter := self makeItemsGetter
! !

!ItemsPresenter methodsFor: 'painting'!

paintOn: html
	"Paints the presenters for the items.
	Note: this will paint the loader bar until it gets the results about querying the items.
	Once they arrive, they get created lazily and the loader will be hidden and the items' presenters will be pained"
	
	self loadAndPaintOn: html
!

paintItemsOn: html

	items do:[:item|
		self paint: (self presenterFor: item)].
!

loadAndPaintOn: html

	self onAboutToLoad.

	self itemsDo:[
		self paintItemsOn: html.
		self onAfterLoaded]
! !

!ItemsPresenter methodsFor: 'reactions'!

onModel: anItem for: anItemPresenter
	"The model for anItemPresenter is about to be set."

	anItemPresenter model: anItem
!

onAboutToLoad

	self showLoader
!

onAfterLoaded

	self hideLoader.
	
	self announce: ItemsLoaded new.
!

onAfterLoad: someJson do: onDone

	items := self makeItemsFromJson: someJson.

	onDone value
! !

!ItemsPresenter methodsFor: 'testing'!

hasItems

	^ items notNil and:[
	items notEmpty]
!

isLoaded

	^ items notNil
! !

ItemsPresenter subclass: #BunchPresenter
	instanceVariableNames: 'bunchSize index atEnd lastItems more'
	category: 'Flow-Presenters'!
!BunchPresenter commentStamp!
This preseter is specialized in presenting items that are loaded in bunches.
The intention is to fragment the quantity of items to present at one time so the experience gets improved.

Subpresenters of BunchPresenter can do things like painting 20 tweets at the time, query for another 20 tweets, so on and so forth!

!BunchPresenter methodsFor: 'accessing'!

bunchSize

	^ bunchSize ifNil:[self initializeBunchSize]
!

bunchSize: anInteger

	bunchSize := anInteger
!

index

	^ index ifNil:[self initializeIndex]
!

index: anInteger

	index := anInteger
!

start

	^ ((self index -1) * self bunchSize) +1
!

end

	^ self index * self bunchSize
!

nextBunch

	^ self index: self index + 1
!

items

	^ items ifNil:[self initializeItems]
!

more

	^ more ifNil:[self initializeMore]
! !

!BunchPresenter methodsFor: 'actions'!

getItemsDo: aBlock
	"Returns the collection of items that should be presented by this presenter.
	Evaluates the onDone reaction when the answer arrives."

	"You can use this idea in your concrete ItemsPresenter subclass:

	jQuery ajax: #{ 
		'url' -> ('api/Blah/find?whatever=thing&from=',self start asString,'&to=',self end asString).
		'type' -> 'GET'.
		'success' -> [:x| self onAfterLoad: x do: onDone].
		'fail' -> [:x| GettingItemsError signal: 'Cannot get the Blah kind of items: ', x responseText].
		'error' -> [:x| GettingItemsError signal: 'Cannot get the Blah kind of items: ', x responseText]}"  

	^ self subclassResponsibility
!

reset

	super reset.

	index := nil.
	atEnd := false
!

addItems: someItems

	self items addAll: someItems
!

removeItems: someItems

	self items removeAll: someItems
!

showNext

	| html|
	html := self newCanvas.
	self nextBunch.
	self loadAndPaintOn: html
!

itemsDo: aBlock
	"Performs aBlock either after loading the items or when it already have them."

	self loadItemsDo: aBlock
!

showLoader

	self loader asJQuery hide fadeIn
!

makeMore
	"Makes the button that should load more items."

	self subclassResponsibility

	" use this as an idea

	^(self newCanvasOn: '#ThisPresenter' asJQuery) a
		id: 'SeeMoreItems';
		onClick:[self onMore];
		with: 'More items...';	
		yourself"
!

showMore

	self more asJQuery hide fadeIn
! !

!BunchPresenter methodsFor: 'initialization'!

initializeIndex

	^ index := 1
!

initializeBunchSize

	^ bunchSize := self class defaultBunchSize
!

initialize

	super initialize.

	atEnd := false
!

initializeItems

	^ items := Array new
!

initializeMore

	^ more := self makeMore
! !

!BunchPresenter methodsFor: 'painting'!

paintItemsOn: html

	lastItems do:[:item|
		self paint: (self presenterFor: item)].
! !

!BunchPresenter methodsFor: 'reactions'!

onAfterLoad: someJson do: onDone

	lastItems := self makeItemsFromJson: someJson.
	self addItems: lastItems.
	self bunchSize > lastItems size ifTrue:[
		atEnd := true].

	onDone value
!

onAfterLoaded

	super onAfterLoaded.

	"Once the items are loaded, move the loader to the bottom."
	self wrapper asJQuery append: self loader asJQuery.
! !

!BunchPresenter methodsFor: 'testing'!

atEnd
	"Answers true if there isn't any other items to load."
	^ atEnd
! !

!BunchPresenter class methodsFor: 'not yet classified'!

defaultBunchSize
	"Not even geniuses can pay attention to about 
	3 or 4 things at the same time, so 7 sounds like more than enough.
	Of course you can override. Every application should do what it has to do 
	in order to provide the best user experience."

	^ 7
! !

Presenter subclass: #Application
	instanceVariableNames: 'feedback'
	category: 'Flow-Presenters'!

!Application methodsFor: 'accessing'!

feedback
	^ feedback ifNil:[self initializeFeedback]
!

feedbackText: aString

	self feedback text: aString
!

negativeFeedbackText: aString

	self feedback beNegative; text: aString
!

positiveFeedbackText: aString

	self feedback bePositive; text: aString
!

neutralFeedbackText: aString

	self feedback beNeutral; text: aString
! !

!Application methodsFor: 'actions'!

makeFeedback

	^ Feedback new
! !

!Application methodsFor: 'initialization'!

initializeFeedback
	^ feedback := self makeFeedback
!

initialize

	super initialize.

	(window jQuery: window) bind: 'hashchange' do: [self onHash].
! !

!Application methodsFor: 'reactions'!

onFeedback: anAnnouncement

	| polarity |

	polarity := anAnnouncement polarity.
	self perform: (polarity, 'FeedbackText:') withArguments: (Array with: anAnnouncement subject)
!

onAfterOpen

	super onAfterOpen.

	window at: 'app' put: self
!

onHash
	"The hash in the application URL has changed."

	"no-op"
! !

Presenter subclass: #Feedback
	instanceVariableNames: 'content text'
	category: 'Flow-Presenters'!

!Feedback methodsFor: 'accessing'!

text

	^ text
! !

!Feedback methodsFor: 'actions'!

text: aString

	text := aString.
	self refresh.
	self show
!

refresh

	content asJQuery html: text
!

show

	wrapper asJQuery slideDown: 500; fadeIn: 500 do:[
		window setTimeout: [wrapper asJQuery slideUp: 500; fadeOut: 500] delay: 3000]
!

beNegative

	self removePolarity.
	'#feedbackWrapper' asJQuery addClass: 'negativeFeedback'
!

beNeutral

	self removePolarity.
	'#feedbackWrapper' asJQuery addClass: 'neutralFeedback'
!

bePositive

	self removePolarity.
	'#feedbackWrapper' asJQuery addClass: 'positiveFeedback'
!

removePolarity

	#('neutralFeedback' 'neutralFeedback' 'neutralFeedback') do:[:cssClass|
		wrapper asJQuery removeClass: cssClass]
! !

!Feedback methodsFor: 'initialization'!

initialize

	super initialize.

	text := String new.
! !

!Feedback methodsFor: 'paint'!

paintOn: html
	
	wrapper id: 'feedback'.
	wrapper asJQuery hide.

	html div
		id: 'feedbackWrapper';
		with:[
			html div
				id:'feedbackContent';
				with:[
					self paintContentOn: html.
					self paintButtonOn: html]]
!

paintButtonOn: html

	html button
		id: 'feedbackClose';
		with: 'Close';
		onClick:[self onClose]
!

paintContentOn: html

	content := html div
				id: 'feedbackContentWrapper';
				yourself
! !

!Feedback methodsFor: 'reactions'!

onClose

	self hide
! !

Presenter subclass: #TagBrushPresenter
	instanceVariableNames: ''
	category: 'Flow-Presenters'!
!TagBrushPresenter commentStamp!
This presenter is a wrapping facility for aTagBrush.

Its value is in wrapping aTagBrush as if it were a flow presenter.

So you can make something like

anAlbum>>makeAddTrack

	aTagBrush := html div id: 'quickDiv'; class: 'aham'; with:[html a with: 'add new track'].

	^ TagBrushPresenter for: aTagBrush


In that way, your Album presenter can treat that div as if it were a subpresenter!

!TagBrushPresenter class methodsFor: 'actions'!

for: aTagBrush

	^ self new
		wrapper: aTagBrush;
		yourself
! !

