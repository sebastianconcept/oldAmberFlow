smalltalk.addPackage('Flow-Presenters', {});
smalltalk.addClass('Presenter', smalltalk.Widget, ['children', 'model', 'announcer', 'parent', 'wrapper'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_announcer'),
smalltalk.method({
selector: unescape('announcer'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@announcer']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeAnnouncer", []);})() : $receiver;
return self;},
args: [],
source: unescape('announcer%0A%0A%09%5E%20announcer%20ifNil%3A%5Bself%20initializeAnnouncer%5D'),
messageSends: ["ifNil:", "initializeAnnouncer"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeAnnouncer'),
smalltalk.method({
selector: unescape('initializeAnnouncer'),
category: 'initialization',
fn: function (){
var self=this;
return (self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
return self;},
args: [],
source: unescape('initializeAnnouncer%0A%0A%09%5E%20announcer%20%3A%3D%20Announcer%20new'),
messageSends: ["new"],
referencedClasses: ["Announcer"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_announce_'),
smalltalk.method({
selector: unescape('announce%3A'),
category: 'accessing',
fn: function (anAnnouncement){
var self=this;
smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [anAnnouncement]);
((($receiver = smalltalk.send(anAnnouncement, "_isBubbling", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_parent", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_parent", []), "_announce_", [anAnnouncement]);})() : nil;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_parent", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_parent", []), "_announce_", [anAnnouncement]);})() : nil;})]));
return self;},
args: ["anAnnouncement"],
source: unescape('announce%3A%20anAnnouncement%0A%09%22Announce%20%28bubbling%20through%20parents%29%22%0A%09%0A%09self%20announcer%20announce%3A%20anAnnouncement.%0A%0A%09anAnnouncement%20isBubbling%20ifTrue%3A%5B%0A%09%09self%20parent%20ifNotNil%3A%5B%0A%09%09%09self%20parent%20announce%3A%20anAnnouncement%5D%5D%0A'),
messageSends: ["announce:", "announcer", "ifTrue:", "isBubbling", "ifNotNil:", "parent"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hasParent'),
smalltalk.method({
selector: unescape('hasParent'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(self['@parent'], "_notNil", []);
return self;},
args: [],
source: unescape('hasParent%0A%0A%09%5E%20parent%20notNil'),
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_parent'),
smalltalk.method({
selector: unescape('parent'),
category: 'accessing',
fn: function (){
var self=this;
return self['@parent'];
return self;},
args: [],
source: unescape('parent%0A%0A%09%5E%20parent'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_parent_'),
smalltalk.method({
selector: unescape('parent%3A'),
category: 'accessing',
fn: function (aPresenter){
var self=this;
(self['@parent']=aPresenter);
return self;},
args: ["aPresenter"],
source: unescape('parent%3A%20aPresenter%0A%09parent%20%3A%3D%20aPresenter'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_children'),
smalltalk.method({
selector: unescape('children'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@children']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeChildren", []);})() : $receiver;
return self;},
args: [],
source: unescape('children%0A%0A%09%5E%20children%20ifNil%3A%5Bself%20initializeChildren%5D'),
messageSends: ["ifNil:", "initializeChildren"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeChildren'),
smalltalk.method({
selector: unescape('initializeChildren'),
category: 'initialization',
fn: function (){
var self=this;
return (self['@children']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape('initializeChildren%0A%0A%09%5E%20children%20%3A%3D%20Dictionary%20new'),
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_at_ifAbsent_", [aKey, aBlock]);
return self;},
args: ["aKey", "aBlock"],
source: unescape('at%3A%20aKey%20ifAbsent%3A%20aBlock%0A%0A%09%5E%20self%20children%20at%3A%20aKey%20ifAbsent%3A%20aBlock'),
messageSends: ["at:ifAbsent:", "children"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_at_", [aKey]);
return self;},
args: ["aKey"],
source: unescape('at%3A%20aKey%0A%09%22Answers%20the%20%28sub%29widget%20stored%20in%20this%20receiver%20at%20aKey%22%0A%09%5E%20self%20children%20at%3A%20aKey'),
messageSends: ["at:", "children"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aKey, aPresenter){
var self=this;
smalltalk.send(self, "_childrenAt_put_", [aKey, aPresenter]);
return aPresenter;
return self;},
args: ["aKey", "aPresenter"],
source: unescape('at%3A%20aKey%20put%3A%20aPresenter%20%0A%0A%09self%20childrenAt%3A%20aKey%20put%3A%20aPresenter.%0A%0A%09%5E%20aPresenter%20'),
messageSends: ["childrenAt:put:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_childrenAt_'),
smalltalk.method({
selector: unescape('childrenAt%3A'),
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.send(self, "_at_", [aKey]);
return self;},
args: ["aKey"],
source: unescape('childrenAt%3A%20aKey%0A%09%22Answers%20the%20%28sub%29widget%20that%20the%20receiver%20has%20stored%20at%20aKey%22%0A%09%5E%20self%20at%3A%20aKey'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'actions',
fn: function (aMessage){
var self=this;
return ((($receiver = smalltalk.send(self, "_hasPresenterAt_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])]);})() : (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Widget);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])]);}), (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Widget);})]));
return self;},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%0A%09%5E%20%28self%20hasPresenterAt%3A%20aMessage%20selector%20asSymbol%29%0A%09%09ifTrue%3A%5Bself%20at%3A%20aMessage%20selector%20asSymbol%5D%0A%09%09ifFalse%3A%5Bsuper%20doesNotUnderstand%3A%20aMessage%5D%0A'),
messageSends: ["ifTrue:ifFalse:", "hasPresenterAt:", "asSymbol", "selector", "at:", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_model_'),
smalltalk.method({
selector: unescape('model%3A'),
category: 'initialization',
fn: function (aModel){
var self=this;
smalltalk.send(self, "_setModel_", [aModel]);
smalltalk.send(self, "_onModelUpdated", []);
return self;},
args: ["aModel"],
source: unescape('model%3A%20aModel%0A%09%22Set%20the%20model%20of%20this%20widget%22%0A%0A%09self%20setModel%3A%20aModel.%0A%09%0A%09self%20onModelUpdated'),
messageSends: ["setModel:", "onModelUpdated"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onModelUpdated'),
smalltalk.method({
selector: unescape('onModelUpdated'),
category: 'reactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('onModelUpdated%0A%09%22The%20model%20has%20been%20updated.%0A%09This%20is%20your%20chance%20to%20react%20about%20it.%22%0A%09%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
category: 'accessing',
fn: function (){
var self=this;
return self['@model'];
return self;},
args: [],
source: unescape('model%0A%09%0A%09%5E%20model'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_setModel_'),
smalltalk.method({
selector: unescape('setModel%3A'),
category: 'actions',
fn: function (aModel){
var self=this;
smalltalk.send(self, "_onAboutToUpdateModel_", [aModel]);
(self['@model']=aModel);
return self;},
args: ["aModel"],
source: unescape('setModel%3A%20aModel%0A%09%22This%20widget%20is%20going%20updating%20its%20model%20to%20aModel%22%0A%0A%09self%20onAboutToUpdateModel%3A%20aModel.%0A%0A%09model%20%3A%3D%20aModel%20%0A'),
messageSends: ["onAboutToUpdateModel:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAboutToUpdateModel_'),
smalltalk.method({
selector: unescape('onAboutToUpdateModel%3A'),
category: 'reactions',
fn: function (aModel){
var self=this;

return self;},
args: ["aModel"],
source: unescape('onAboutToUpdateModel%3A%20aModel%0A%09%22The%20model%20is%20about%20to%20be%20updated.%0A%09This%20is%20your%20chance%20to%20react%20about%20it.%22%0A%09%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_onAboutToOpen", []);
smalltalk.send(self, "_paintOnJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
smalltalk.send(self, "_onAfterOpen", []);
return self;},
args: [],
source: unescape('open%0A%09%0A%09self%20onAboutToOpen.%0A%0A%09self%20paintOnJQuery%3A%20%27body%27%20asJQuery.%0A%0A%09self%20onAfterOpen'),
messageSends: ["onAboutToOpen", "paintOnJQuery:", "asJQuery", "onAfterOpen"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAboutToOpen'),
smalltalk.method({
selector: unescape('onAboutToOpen'),
category: 'reactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('onAboutToOpen%0A%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_ifAbsentAt_put_'),
smalltalk.method({
selector: unescape('ifAbsentAt%3Aput%3A'),
category: 'accessing',
fn: function (aKey, aBlock){
var self=this;
((($receiver = smalltalk.send(self, "_hasPresenterAt_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]));
return smalltalk.send(self, "_at_", [aKey]);
return self;},
args: ["aKey", "aBlock"],
source: unescape('ifAbsentAt%3A%20aKey%20put%3A%20aBlock%0A%09%22Conditionally%20%28to%20its%20abscence%29%20adds%20the%20presenter%20returned%20by%20aBlock%0A%09as%20%28sub%29widget%20of%20this%20widget.%0A%09Conveniently%2C%20answers%20that%20very%20presenter%22%0A%09%0A%09%28self%20hasPresenterAt%3A%20aKey%29%20ifFalse%3A%5B%0A%09%09self%20at%3A%20aKey%20put%3A%20aBlock%20value%5D.%0A%0A%09%5E%20self%20at%3A%20aKey'),
messageSends: ["ifFalse:", "hasPresenterAt:", "at:put:", "value", "at:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_ifAbsentAt_put_andDo_'),
smalltalk.method({
selector: unescape('ifAbsentAt%3Aput%3AandDo%3A'),
category: 'accessing',
fn: function (aKey, aBlock, anotherBlock){
var self=this;
((($receiver = smalltalk.send(self, "_hasPresenterAt_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);return smalltalk.send(anotherBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);return smalltalk.send(anotherBlock, "_value", []);})]));
return smalltalk.send(self, "_at_", [aKey]);
return self;},
args: ["aKey", "aBlock", "anotherBlock"],
source: unescape('ifAbsentAt%3A%20aKey%20put%3A%20aBlock%20andDo%3A%20anotherBlock%0A%09%22Conditionally%20%28to%20its%20abscence%29%20adds%20the%20presenter%20answered%20by%20aBlock%0A%09as%20%28sub%29widget%20of%20this%20widget%20and%20then%20evaluates%20anotherBlock.%0A%09Note%3A%20the%20typical%20applicability%20of%20anotherBlock%20is%20the%20configuration%20%0A%09of%20the%20observation%20of%20sub%20widgets%27%20announcements%22%0A%09%0A%09%28self%20hasPresenterAt%3A%20aKey%29%20ifFalse%3A%5B%0A%09%09self%20at%3A%20aKey%20put%3A%20aBlock%20value.%0A%09%09anotherBlock%20value%5D%20.%0A%0A%09%5E%20self%20at%3A%20aKey'),
messageSends: ["ifFalse:", "hasPresenterAt:", "at:put:", "value", "at:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_componentsAt_put_'),
smalltalk.method({
selector: unescape('componentsAt%3Aput%3A'),
category: 'accessing',
fn: function (aKey, aPresenter){
var self=this;
smalltalk.send(smalltalk.send(self, "_children", []), "_at_put_", [aKey, aPresenter]);
((($receiver = smalltalk.send(aPresenter, "_isPresenter", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aPresenter, "_parent_", [self]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(aPresenter, "_parent_", [self]);})]));
return aPresenter;
return self;},
args: ["aKey", "aPresenter"],
source: unescape('componentsAt%3A%20aKey%20put%3A%20aPresenter%20%0A%09%22Answers%20the%20presenter%20recently%20added%20to%20the%20receiver%0A%09and%20with%20this%20receiver%20as%20its%20parent.%22%0A%09%0A%09self%20children%20at%3A%20aKey%20put%3A%20aPresenter.%0A%09aPresenter%20isPresenter%20ifTrue%3A%20%5BaPresenter%20parent%3A%20self%5D.%0A%09%5E%20aPresenter%20'),
messageSends: ["at:put:", "children", "ifTrue:", "isPresenter", "parent:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_childrenAt_put_'),
smalltalk.method({
selector: unescape('childrenAt%3Aput%3A'),
category: 'accessing',
fn: function (aKey, aPresenter){
var self=this;
smalltalk.send(smalltalk.send(self, "_children", []), "_at_put_", [aKey, aPresenter]);
((($receiver = smalltalk.send(aPresenter, "_isPresenter", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aPresenter, "_parent_", [self]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(aPresenter, "_parent_", [self]);})]));
return aPresenter;
return self;},
args: ["aKey", "aPresenter"],
source: unescape('childrenAt%3A%20aKey%20put%3A%20aPresenter%20%0A%09%22Answers%20the%20presenter%20recently%20added%20to%20the%20receiver%0A%09%28with%20this%20receiver%20as%20its%20parent%29.%22%0A%09%0A%09self%20children%20at%3A%20aKey%20put%3A%20aPresenter.%0A%09aPresenter%20isPresenter%20ifTrue%3A%20%5BaPresenter%20parent%3A%20self%5D.%0A%09%5E%20aPresenter%20'),
messageSends: ["at:put:", "children", "ifTrue:", "isPresenter", "parent:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
category: 'accessing',
fn: function (anAnnouncementClass, aReactionBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [anAnnouncementClass, aReactionBlock]);
return self;},
args: ["anAnnouncementClass", "aReactionBlock"],
source: unescape('on%3A%20anAnnouncementClass%20do%3A%20aReactionBlock%0A%0A%09%5E%20self%20announcer%20on%3A%20anAnnouncementClass%20do%3A%20aReactionBlock'),
messageSends: ["on:do:", "announcer"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_newCanvasOn_'),
smalltalk.method({
selector: unescape('newCanvasOn%3A'),
category: 'actions',
fn: function (aJQuery){
var self=this;
return smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery]);
return self;},
args: ["aJQuery"],
source: unescape('newCanvasOn%3A%20aJQuery%0A%09%22Answers%20a%20new%20canvas%20based%20on%20the%20given%20aJQuery%20element.%22%0A%0A%09%5E%20HTMLCanvas%20onJQuery%3A%20aJQuery'),
messageSends: ["onJQuery:"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_isPresenter'),
smalltalk.method({
selector: unescape('isPresenter'),
category: 'testing',
fn: function (){
var self=this;
return true;
return self;},
args: [],
source: unescape('isPresenter%0A%0A%09%5E%20true'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_visible'),
smalltalk.method({
selector: unescape('visible'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = (typeof visible == 'undefined' ? nil : visible)) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeVisible", []);})() : $receiver;
return self;},
args: [],
source: unescape('visible%0A%09%22Answers%20true%20if%20this%20presenter%20should%20be%20visible%20%0A%09as%20soon%20as%20it%20get%27s%20rendered%20%28or%20not%2C%20in%20which%20case%2C%0A%09%20it%20will%20be%20rendered%20while%20staying%20hidden%29.%22%0A%09%5E%20visible%20ifNil%3A%5Bself%20initializeVisible%5D'),
messageSends: ["ifNil:", "initializeVisible"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_visible_'),
smalltalk.method({
selector: unescape('visible%3A'),
category: 'accessing',
fn: function (aBoolean){
var self=this;
(visible=aBoolean);
return self;},
args: ["aBoolean"],
source: unescape('visible%3A%20aBoolean%0A%09%22Sets%20if%20this%20presenter%20should%20be%20visible%20%0A%09as%20soon%20as%20it%20get%27s%20rendered%20%28or%20not%2C%20in%20which%20case%2C%0A%09%20it%20will%20be%20rendered%20while%20staying%20hidden%29.%22%0A%09visible%20%3A%3D%20aBoolean%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeVisible'),
smalltalk.method({
selector: unescape('initializeVisible'),
category: 'initialization',
fn: function (){
var self=this;
return (visible=false);
return self;},
args: [],
source: unescape('initializeVisible%0A%09%22We%20set%20the%20visible%20default%20in%20false%20so%20the%20application%27s%0A%09behavior%20can%20decide%20elsewere%20how%20%28and%20if%29%20this%20presenter%20should%20appear.%22%0A%0A%09%5E%20visible%20%3A%3D%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(self['@wrapper']=smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_paintOn_", [html]);})]);})(self['@wrapper']);
smalltalk.send(self, "_onAfterPainted", []);
(painted=true);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%22Start%20to%20paint%20this%20presenter.%0A%09Note%3A%20presenters%20are%20always%20wrapped%20in%20a%20div%20using%20as%20CSS%20class%0A%09it%27s%20class%20name.%22%0A%0A%09wrapper%20%3A%3D%20html%20div.%0A%09%0A%09wrapper%0A%09%09class%3A%20self%20class%20name%3B%0A%09%09with%3A%5Bself%20paintOn%3A%20html%5D.%0A%09self%20onAfterPainted.%0A%09painted%20%3A%3D%20true.'),
messageSends: ["div", "class:", "name", "class", "with:", "paintOn:", "onAfterPainted"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_hide", []);
smalltalk.send(self, "_onHide", []);
return self;},
args: [],
source: unescape('hide%0A%0A%09wrapper%20asJQuery%20hide.%0A%09self%20onHide.'),
messageSends: ["hide", "asJQuery", "onHide"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_show", []);
smalltalk.send(self, "_onShow", []);
return self;},
args: [],
source: unescape('show%0A%0A%09wrapper%20asJQuery%20show.%0A%09self%20onShow'),
messageSends: ["show", "asJQuery", "onShow"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@wrapper'], "_asJQuery", []);
return self;},
args: [],
source: unescape('asJQuery%0A%09%0A%09%5E%20wrapper%20asJQuery%0A'),
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_append_'),
smalltalk.method({
selector: unescape('append%3A'),
category: 'actions',
fn: function (aPresenter){
var self=this;
smalltalk.send(self['@wrapper'], "_append_", [smalltalk.send(aPresenter, "_asJQuery", [])]);
return self;},
args: ["aPresenter"],
source: unescape('append%3A%20aPresenter%0A%09%22Appends%20aPresenter%20to%20this%20presenter.%0A%09Note%3A%20it%27s%20actually%20appended%20to%20the%20wrapper%20of%20this%20guy.%22%0A%0A%09wrapper%20append%3A%20aPresenter%20asJQuery%0A'),
messageSends: ["append:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paintOn_'),
smalltalk.method({
selector: unescape('paintOn%3A'),
category: 'painting',
fn: function (html){
var self=this;
return self;
return self;},
args: ["html"],
source: unescape('paintOn%3A%20html%0A%09%22Paints%20the%20content%20%28the%20wrapped%20content%2C%20like%20wrapper%20NOT%20included%29%0A%09of%20this%20presenter.%20Sub%20classes%20should%20override%20as%20appropiate.%22%0A%09%0A%09%22default%20is%20paint%20nothing%22%0A%09%5E%20self'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paintOnJQuery_'),
smalltalk.method({
selector: unescape('paintOnJQuery%3A'),
category: 'painting',
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [aJQuery]);
return self;},
args: ["aJQuery"],
source: unescape('paintOnJQuery%3A%20aJQuery%0A%09%22Appends%20what%27s%20being%20paint%20by%20this%20presenter%20to%20aJQuery.%22%0A%0A%09self%20appendToJQuery%3A%20aJQuery'),
messageSends: ["appendToJQuery:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hasPresenterAt_'),
smalltalk.method({
selector: unescape('hasPresenterAt%3A'),
category: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_includesKey_", [aKey]);
return self;},
args: ["aKey"],
source: unescape('hasPresenterAt%3A%20aKey%0A%0A%09%5E%20self%20children%20includesKey%3A%20aKey%20'),
messageSends: ["includesKey:", "children"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paint_'),
smalltalk.method({
selector: unescape('paint%3A'),
category: 'painting',
fn: function (aPresenter){
var self=this;
smalltalk.send((function(){return smalltalk.send(aPresenter, "_paintOnJQuery_", [smalltalk.send(self, "_asJQuery", [])]);}), "_on_do_", [(smalltalk.Error || Error), (function(x){return smalltalk.send(self, "_halt", []);})]);
return self;},
args: ["aPresenter"],
source: unescape('paint%3A%20aPresenter%0A%09%22Paints%20the%20%28sub%29preenter%20aPresenter%20in%20this%20%28parent%29presenter.%22%0A%0A%09%5BaPresenter%20paintOnJQuery%3A%20self%20asJQuery%5D%20on%3A%20Error%20do%3A%5B%3Ax%7C%20self%20halt%5D'),
messageSends: ["on:do:", "paintOnJQuery:", "asJQuery", "halt"],
referencedClasses: ["Error"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hideAll'),
smalltalk.method({
selector: unescape('hideAll'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_children", []), "_keys", []), "_do_", [(function(each){var child=nil;
(child=smalltalk.send(self, "_at_ifAbsent_", [each, (function(){return nil;})]));return (($receiver = child) != nil && $receiver != undefined) ? (function(){return smalltalk.send(child, "_hide", []);})() : nil;})]);
return self;},
args: [],
source: unescape('hideAll%0A%09%22Hide%20all%20the%20children.%0A%09Note%3A%20it%27s%20done%20in%20such%20a%20way%20that%20if%20they%20don%27t%20exist%20they%20won%27t%20evoked.%22%0A%0A%09self%20children%20keys%20do%3A%5B%3Aeach%7C%20%7Cchild%7C%0A%09%09child%20%3A%3D%20self%20at%3A%20each%20ifAbsent%3A%5Bnil%5D.%0A%09%09child%20ifNotNil%3A%5B%0A%09%09%09child%20hide%5D%5D.%0A'),
messageSends: ["do:", "keys", "children", "at:ifAbsent:", "ifNotNil:", "hide"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_wrapper'),
smalltalk.method({
selector: unescape('wrapper'),
category: 'accessing',
fn: function (){
var self=this;
return self['@wrapper'];
return self;},
args: [],
source: unescape('wrapper%0A%0A%09%5E%20wrapper'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_newCanvas'),
smalltalk.method({
selector: unescape('newCanvas'),
category: 'actions',
fn: function (){
var self=this;
return smalltalk.send(self, "_newCanvasOn_", [smalltalk.send(self, "_asJQuery", [])]);
return self;},
args: [],
source: unescape('newCanvas%0A%09%22Answers%20a%20new%20canvas%20based%20on%20the%20JQuery%20element%20wrapping%20this%20presenter.%22%0A%0A%09%5E%20self%20newCanvasOn%3A%20self%20asJQuery'),
messageSends: ["newCanvasOn:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'actions',
fn: function (aPresenter){
var self=this;
var target=nil;
smalltalk.send(smalltalk.send(self, "_children", []), "_keysAndValuesDo_", [(function(k, v){return ((($receiver = smalltalk.send(v, "__eq_eq", [aPresenter])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (target=k);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (target=k);})]));})]);
smalltalk.send(smalltalk.send(aPresenter, "_asJQuery", []), "_remove", []);
smalltalk.send(smalltalk.send(self, "_children", []), "_removeKey_ifAbsent_", [target, (function(){return nil;})]);
return self;},
args: ["aPresenter"],
source: unescape('remove%3A%20aPresenter%0A%09%22Removes%20aPresenter%20from%20this%20presenter%20and%20from%20the%20DOM.%0A%09Note%3A%20JQuery%20takes%20care%20of%20terminating%20event%20observations.%22%0A%09%7C%20target%20%7C%0A%0A%09self%20children%20keysAndValuesDo%3A%5B%3Ak%20%3Av%7C%09%0A%09%09%28v%20%3D%3D%20aPresenter%29%20ifTrue%3A%5B%0A%09%09%09target%20%3A%3D%20k%5D%5D.%0A%0A%09aPresenter%20asJQuery%20remove.%0A%09self%20children%20removeKey%3A%20target%20ifAbsent%3A%5Bnil%5D.%0A'),
messageSends: ["keysAndValuesDo:", "children", "ifTrue:", unescape("%3D%3D"), "remove", "asJQuery", "removeKey:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_removeAll'),
smalltalk.method({
selector: unescape('removeAll'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_subPresenters", []), "_do_", [(function(e){return smalltalk.send(e, "_remove", []);})]);
return self;},
args: [],
source: unescape('removeAll%0A%0A%09self%20subPresenters%20do%3A%5B%3Ae%7C%20%0A%09%09e%20remove%5D'),
messageSends: ["do:", "subPresenters", "remove"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_allSubPresenters'),
smalltalk.method({
selector: unescape('allSubPresenters'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_addAllSubPresentersTo_", [smalltalk.send((smalltalk.Set || Set), "_new", [])]);
return self;},
args: [],
source: unescape('allSubPresenters%0A%0A%09%5E%20self%20addAllSubPresentersTo%3A%20Set%20new'),
messageSends: ["addAllSubPresentersTo:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_addAllSubPresentersTo_'),
smalltalk.method({
selector: unescape('addAllSubPresentersTo%3A'),
category: 'accessing',
fn: function (aSet){
var self=this;
smalltalk.send(smalltalk.send(self, "_subPpresenters", []), "_do_", [(function(aPresenter){return (($receiver = aPresenter) != nil && $receiver != undefined) ? (function(){smalltalk.send(aSet, "_add_", [aPresenter]);return smalltalk.send(aPresenter, "_addAllSubPresentersTo_", [aSet]);})() : nil;})]);
return aSet;
return self;},
args: ["aSet"],
source: unescape('addAllSubPresentersTo%3A%20aSet%0A%09%22Adds%20all%20the%20sub%20presenters%20of%20the%20receiver%20to%20aSet.%22%0A%09%0A%09self%20subPpresenters%20do%3A%5B%3AaPresenter%7C%0A%09%09aPresenter%20ifNotNil%3A%5B%0A%09%09%09aSet%20add%3A%20aPresenter.%0A%09%09%09aPresenter%20addAllSubPresentersTo%3A%20aSet%5D%5D.%0A%09%0A%09%5E%20aSet%0A'),
messageSends: ["do:", "subPpresenters", "ifNotNil:", "add:", "addAllSubPresentersTo:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_subPresenters'),
smalltalk.method({
selector: unescape('subPresenters'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_values", []);
return self;},
args: [],
source: unescape('subPresenters%0A%0A%09%5E%20self%20children%20values'),
messageSends: ["values", "children"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onHide'),
smalltalk.method({
selector: unescape('onHide'),
category: 'reactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('onHide%0A%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onShow'),
smalltalk.method({
selector: unescape('onShow'),
category: 'reactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('onShow%0A%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_tr'),
smalltalk.method({
selector: unescape('tr'),
category: 'accessing',
fn: function (){
var self=this;
return (typeof tr == 'undefined' ? nil : tr);
return self;},
args: [],
source: unescape('tr%0A%0A%09%5E%20tr'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(painted=false);
return self;},
args: [],
source: unescape('initialize%0A%0A%09super%20initialize.%0A%0A%09painted%20%3A%3D%20false'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_feedbackText_'),
smalltalk.method({
selector: unescape('feedbackText%3A'),
category: 'actions',
fn: function (aString){
var self=this;
smalltalk.send(self, "_neutralFeedbackText_", [aString]);
return self;},
args: ["aString"],
source: unescape('feedbackText%3A%20aString%0A%0A%09self%20neutralFeedbackText%3A%20aString'),
messageSends: ["neutralFeedbackText:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_positiveFeedbackText_'),
smalltalk.method({
selector: unescape('positiveFeedbackText%3A'),
category: 'actions',
fn: function (aString){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send(smalltalk.send((smalltalk.FeedbackRequest || FeedbackRequest), "_for_", [aString]), "_bePositive", [])]);
return self;},
args: ["aString"],
source: unescape('positiveFeedbackText%3A%20aString%0A%0A%09self%20announce%3A%20%28FeedbackRequest%20for%3A%20aString%29%20bePositive'),
messageSends: ["announce:", "bePositive", "for:"],
referencedClasses: ["FeedbackRequest"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_negativeFeedbackText_'),
smalltalk.method({
selector: unescape('negativeFeedbackText%3A'),
category: 'actions',
fn: function (aString){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send(smalltalk.send((smalltalk.FeedbackRequest || FeedbackRequest), "_for_", [aString]), "_beNegative", [])]);
return self;},
args: ["aString"],
source: unescape('negativeFeedbackText%3A%20aString%0A%0A%09self%20announce%3A%20%28FeedbackRequest%20for%3A%20aString%29%20beNegative'),
messageSends: ["announce:", "beNegative", "for:"],
referencedClasses: ["FeedbackRequest"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_neutralFeedbackText_'),
smalltalk.method({
selector: unescape('neutralFeedbackText%3A'),
category: 'actions',
fn: function (aString){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send(smalltalk.send((smalltalk.FeedbackRequest || FeedbackRequest), "_for_", [aString]), "_beNeutral", [])]);
return self;},
args: ["aString"],
source: unescape('neutralFeedbackText%3A%20aString%0A%0A%09self%20announce%3A%20%28FeedbackRequest%20for%3A%20aString%29%20beNeutral'),
messageSends: ["announce:", "beNeutral", "for:"],
referencedClasses: ["FeedbackRequest"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAfterOpen'),
smalltalk.method({
selector: unescape('onAfterOpen'),
category: 'reactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('onAfterOpen%0A%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_setId_'),
smalltalk.method({
selector: unescape('setId%3A'),
category: 'actions',
fn: function (aString){
var self=this;
smalltalk.send(self['@wrapper'], "_id_", [aString]);
return self;},
args: ["aString"],
source: unescape('setId%3A%20aString%0A%0A%09wrapper%20id%3A%20aString'),
messageSends: ["id:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAfterPainted'),
smalltalk.method({
selector: unescape('onAfterPainted'),
category: 'reactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('onAfterPainted%0A%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_isPainted'),
smalltalk.method({
selector: unescape('isPainted'),
category: 'testing',
fn: function (){
var self=this;
return (typeof painted == 'undefined' ? nil : painted);
return self;},
args: [],
source: unescape('isPainted%0A%0A%09%5E%20painted'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_removeAll", []);
(($receiver = self['@parent']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_remove", []);})() : (function(){return smalltalk.send(self['@parent'], "_remove_", [self]);})();
return self;},
args: [],
source: unescape('remove%0A%0A%09self%20removeAll.%0A%0A%09parent%20%0A%09%09ifNil%3A%5Bself%20asJQuery%20remove.%5D%0A%09%09ifNotNil%3A%5Bparent%20remove%3A%20self%5D.%0A%0A'),
messageSends: ["removeAll", "ifNil:ifNotNil:", "remove", "asJQuery", "remove:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_removeAt_'),
smalltalk.method({
selector: unescape('removeAt%3A'),
category: 'actions',
fn: function (aKey){
var self=this;
var target=nil;
smalltalk.send(smalltalk.send(self, "_children", []), "_keysAndValuesDo_", [(function(k, v){return ((($receiver = smalltalk.send(k, "__eq_eq", [aKey])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (target=v);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (target=v);})]));})]);
(($receiver = target) != nil && $receiver != undefined) ? (function(){return smalltalk.send(target, "_remove", []);})() : nil;
return self;},
args: ["aKey"],
source: unescape('removeAt%3A%20aKey%0A%09%22Removes%20the%20%28sub%29presenter%20found%20at%20aKey%0A%09does%20nothing%20otherwise.%22%0A%09%7C%20target%20%7C%0A%0A%09self%20children%20keysAndValuesDo%3A%5B%3Ak%20%3Av%7C%09%0A%09%09%28k%20%3D%3D%20aKey%29%20ifTrue%3A%5B%0A%09%09%09target%20%3A%3D%20v%5D%5D.%0A%0A%09target%20ifNotNil%3A%5Btarget%20remove%5D%0A'),
messageSends: ["keysAndValuesDo:", "children", "ifTrue:", unescape("%3D%3D"), "ifNotNil:", "remove"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_wrapper_'),
smalltalk.method({
selector: unescape('wrapper%3A'),
category: 'accessing',
fn: function (aTagBrush){
var self=this;
(self['@wrapper']=aTagBrush);
return self;},
args: ["aTagBrush"],
source: unescape('wrapper%3A%20aTagBrush%0A%0A%09wrapper%20%3A%3D%20aTagBrush'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
category: 'actions',
fn: function (aModel){
var self=this;
return (function($rec){smalltalk.send($rec, "_model_", [aModel]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aModel"],
source: unescape('for%3A%20aModel%0A%0A%09%5E%20self%20new%0A%09%09model%3A%20aModel%3B%0A%09%09yourself'),
messageSends: ["model:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Presenter.klass);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'actions',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_for_", [smalltalk.send(self, "_defaultModel", [])]), "_open", []);
return self;},
args: [],
source: unescape('open%0A%0A%09%5E%20%28self%20for%3A%20self%20defaultModel%29%20open'),
messageSends: ["open", "for:", "defaultModel"],
referencedClasses: []
}),
smalltalk.Presenter.klass);

smalltalk.addMethod(
unescape('_defaultModel'),
smalltalk.method({
selector: unescape('defaultModel'),
category: 'accessing',
fn: function (){
var self=this;
return nil;
return self;},
args: [],
source: unescape('defaultModel%0A%0A%09%5E%20nil'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter.klass);


smalltalk.addClass('ItemsPresenter', smalltalk.Presenter, ['items', 'itemsGetter', 'loader'], 'Flow-Presenters');
smalltalk.ItemsPresenter.comment=unescape('This%20kind%20of%20presenter%20is%20prepared%20to%20deal%20with%20a%20bunch%20of%20similar%20subpresenters.%0A%0AYou%20typically%20use%20one%20of%20these%20for%20presenting%20lists%20of%20things%20%28you%20should%20subclass%20it%20and%20specialize%20it%29.%0A%0AWhat%20you%20list%20in%20this%20presenters%20are%20the%20models%20you%20set%20in%20the%20%23items%20instVar.%20Note%20that%20%23items%20gets%20lazily%20initialized%20and%20the%20list%20of%20models%20is%20queried%20when%20the%20%23itemsGetter%20block%20is%20evaluated.%0A%0A')
smalltalk.addMethod(
unescape('_items'),
smalltalk.method({
selector: unescape('items'),
category: 'accessing',
fn: function (){
var self=this;
return self['@items'];
return self;},
args: [],
source: unescape('items%0A%0A%09%5E%20items%20'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_items_'),
smalltalk.method({
selector: unescape('items%3A'),
category: 'accessing',
fn: function (someModels){
var self=this;
(self['@items']=someModels);
return self;},
args: ["someModels"],
source: unescape('items%3A%20someModels%0A%0A%09items%20%3A%3D%20someModels%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_reset'),
smalltalk.method({
selector: unescape('reset'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_removeAll", []);
(self['@items']=nil);
return self;},
args: [],
source: unescape('reset%0A%0A%09self%20removeAll.%0A%09items%20%3A%3D%20nil.%0A%09'),
messageSends: ["removeAll"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_itemsGetter'),
smalltalk.method({
selector: unescape('itemsGetter'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@itemsGetter']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeItemsGetter", []);})() : $receiver;
return self;},
args: [],
source: unescape('itemsGetter%0A%0A%09%5E%20itemsGetter%20ifNil%3A%5Bself%20initializeItemsGetter%5D'),
messageSends: ["ifNil:", "initializeItemsGetter"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_itemsGetter_'),
smalltalk.method({
selector: unescape('itemsGetter%3A'),
category: 'accessing',
fn: function (aBlock){
var self=this;
(self['@itemsGetter']=aBlock);
return self;},
args: ["aBlock"],
source: unescape('itemsGetter%3A%20aBlock%0A%0A%09itemsGetter%20%3A%3D%20aBlock'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_paintOn_'),
smalltalk.method({
selector: unescape('paintOn%3A'),
category: 'painting',
fn: function (html){
var self=this;
smalltalk.send(self, "_loadAndPaintOn_", [html]);
return self;},
args: ["html"],
source: unescape('paintOn%3A%20html%0A%09%22Paints%20the%20presenters%20for%20the%20items.%0A%09Note%3A%20this%20will%20paint%20the%20loader%20bar%20until%20it%20gets%20the%20results%20about%20querying%20the%20items.%0A%09Once%20they%20arrive%2C%20they%20get%20created%20lazily%20and%20the%20loader%20will%20be%20hidden%20and%20the%20items%27%20presenters%20will%20be%20pained%22%0A%09%0A%09self%20loadAndPaintOn%3A%20html'),
messageSends: ["loadAndPaintOn:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_itemPresenters'),
smalltalk.method({
selector: unescape('itemPresenters'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_items", []), "_collect_", [(function(item){return smalltalk.send(self, "_presenterFor_", [item]);})]);
return self;},
args: [],
source: unescape('itemPresenters%0A%0A%09%5E%20self%20items%20collect%3A%5B%3Aitem%7C%0A%09%09self%20presenterFor%3A%20item%5D'),
messageSends: ["collect:", "items", "presenterFor:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_presenterFor_'),
smalltalk.method({
selector: unescape('presenterFor%3A'),
category: 'accessing',
fn: function (anItem){
var self=this;
var itemPresenter=nil;
(itemPresenter=smalltalk.send(self, "_ifAbsentAt_put_andDo_", [anItem, (function(){return smalltalk.send(self, "_makePresenterFor_", [anItem]);}), (function(){return smalltalk.send(self, "_observeItemPresenter_", [smalltalk.send(self, "_at_", [anItem])]);})]));
return itemPresenter;
return self;},
args: ["anItem"],
source: unescape('presenterFor%3A%20anItem%0A%09%22Answers%20the%20presenter%20that%20corresponds%20to%20anItem.%0A%09If%20this%20presenter%20doesn%27t%20have%20a%20subpresenter%20for%20anItem%2C%0A%09it%27ll%20be%20lazily%20created.%22%0A%09%7C%20itemPresenter%20%7C%0A%0A%09itemPresenter%20%3A%3D%20self%20%0A%09%09ifAbsentAt%3A%20anItem%20%0A%09%09put%3A%5Bself%20makePresenterFor%3A%20anItem%5D%0A%09%09andDo%3A%5Bself%20observeItemPresenter%3A%20%28self%20at%3A%20anItem%29%20%5D.%0A%0A%09%5E%20itemPresenter%0A%09'),
messageSends: ["ifAbsentAt:put:andDo:", "makePresenterFor:", "observeItemPresenter:", "at:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_makePresenterFor_'),
smalltalk.method({
selector: unescape('makePresenterFor%3A'),
category: 'actions',
fn: function (anItem){
var self=this;
var itemPresenter=nil;
(itemPresenter=smalltalk.send(smalltalk.send(self, "_presenterClassFor_", [anItem]), "_new", []));
smalltalk.send(self, "_onModel_for_", [anItem, itemPresenter]);
return itemPresenter;
return self;},
args: ["anItem"],
source: unescape('makePresenterFor%3A%20anItem%0A%09%22Answers%20a%20new%20presenter%20corresponding%20to%20anItem.%22%0A%0A%09%7C%20itemPresenter%20%7C%0A%0A%09itemPresenter%20%3A%3D%20%28self%20presenterClassFor%3A%20anItem%29%20new.%0A%0A%09self%20onModel%3A%20anItem%20for%3A%20itemPresenter.%0A%0A%09%5E%20itemPresenter'),
messageSends: ["new", "presenterClassFor:", "onModel:for:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_observeItemPresenter_'),
smalltalk.method({
selector: unescape('observeItemPresenter%3A'),
category: 'actions',
fn: function (anItemPresenter){
var self=this;

return self;},
args: ["anItemPresenter"],
source: unescape('observeItemPresenter%3A%20anItemPresenter%0A%09%22Sets%20the%20observations%20for%20anItemPresenter.%22%0A%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_onModel_for_'),
smalltalk.method({
selector: unescape('onModel%3Afor%3A'),
category: 'reactions',
fn: function (anItem, anItemPresenter){
var self=this;
smalltalk.send(anItemPresenter, "_model_", [anItem]);
return self;},
args: ["anItem", "anItemPresenter"],
source: unescape('onModel%3A%20anItem%20for%3A%20anItemPresenter%0A%09%22The%20model%20for%20anItemPresenter%20is%20about%20to%20be%20set.%22%0A%0A%09anItemPresenter%20model%3A%20anItem%0A'),
messageSends: ["model:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_presenterClassFor_'),
smalltalk.method({
selector: unescape('presenterClassFor%3A'),
category: 'accessing',
fn: function (anItem){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["anItem"],
source: unescape('presenterClassFor%3A%20anItem%0A%09%22Returns%20the%20class%20of%20the%20presenter%20specialized%20in%20presenting%20anItem.%22%0A%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_makeLoader'),
smalltalk.method({
selector: unescape('makeLoader'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('makeLoader%0A%09%22Makes%20the%20loader%20that%27s%20shown%20while%20waiting%20to%20get%20the%20results%20when%20querying%20for%20the%20items.%22%0A%0A%09self%20subclassResponsibility%0A%0A%09%22%20use%20this%20as%20an%20idea%0A%0A%09%5E%28self%20newCanvasOn%3A%20%27%23ThisPresenter%27%20asJQuery%29%20img%0A%09%09id%3A%20%27ThisPresenterLoader%27%3B%0A%09%09src%3A%20%27../files/YourLibrary/img/loaderBar.gif%27%3B%0A%09%09yourself%22'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_loader'),
smalltalk.method({
selector: unescape('loader'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@loader']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeLoader", []);})() : $receiver;
return self;},
args: [],
source: unescape('loader%0A%0A%09%5E%20loader%20ifNil%3A%5Bself%20initializeLoader%5D'),
messageSends: ["ifNil:", "initializeLoader"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_paintItemsOn_'),
smalltalk.method({
selector: unescape('paintItemsOn%3A'),
category: 'painting',
fn: function (html){
var self=this;
smalltalk.send(self['@items'], "_do_", [(function(item){return smalltalk.send(self, "_paint_", [smalltalk.send(self, "_presenterFor_", [item])]);})]);
return self;},
args: ["html"],
source: unescape('paintItemsOn%3A%20html%0A%0A%09items%20do%3A%5B%3Aitem%7C%0A%09%09self%20paint%3A%20%28self%20presenterFor%3A%20item%29%5D.%0A'),
messageSends: ["do:", "paint:", "presenterFor:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_loadItemsDo_'),
smalltalk.method({
selector: unescape('loadItemsDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_itemsGetter", []), "_value_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('loadItemsDo%3A%20aBlock%0A%09%22Loads%20the%20items%20form%20the%20getter%20block%20and%20evaluates%20passing%20the%20reaction%20aBlock%20to%20it.%22%0A%0A%09%5E%20self%20itemsGetter%20value%3A%20aBlock%09'),
messageSends: ["value:", "itemsGetter"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_itemsDo_'),
smalltalk.method({
selector: unescape('itemsDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
smalltalk.send(self['@items'], "_ifNil_ifNotNil_", [(function(){return smalltalk.send(self, "_loadItemsDo_", [aBlock]);}), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('itemsDo%3A%20aBlock%0A%09%22Performs%20aBlock%20either%20after%20loading%20the%20items%20or%20when%20it%20already%20have%20them.%22%0A%0A%09items%20%0A%09%09ifNil%3A%20%5Bself%20loadItemsDo%3A%20aBlock%5D%0A%09%09ifNotNil%3A%20aBlock'),
messageSends: ["ifNil:ifNotNil:", "loadItemsDo:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_getItemsDo_'),
smalltalk.method({
selector: unescape('getItemsDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["aBlock"],
source: unescape('getItemsDo%3A%20aBlock%0A%09%22Returns%20the%20collection%20of%20items%20that%20should%20be%20presented%20by%20this%20presenter.%0A%09Evaluates%20the%20onDone%20reaction%20when%20the%20answer%20arrives.%22%0A%0A%09%22You%20can%20use%20this%20idea%20in%20your%20concrete%20ItemsPresenter%20subclass%3A%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28%27api/Blah/find%3Fwhatever%3Dthing%26you%3DneedToDo%27%29.%0A%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterLoad%3A%20x%20do%3A%20onDone%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20GettingItemsError%20signal%3A%20%27Cannot%20get%20the%20Blah%20kind%20of%20items%3A%20%27%2C%20x%20responseText%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20GettingItemsError%20signal%3A%20%27Cannot%20get%20the%20Blah%20kind%20of%20items%3A%20%27%2C%20x%20responseText%5D%7D%22%20%20%0A%0A%09%5E%20self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_initializeLoader'),
smalltalk.method({
selector: unescape('initializeLoader'),
category: 'initializing',
fn: function (){
var self=this;
return (self['@loader']=smalltalk.send(self, "_makeLoader", []));
return self;},
args: [],
source: unescape('initializeLoader%0A%0A%09%5E%20loader%20%3A%3D%20self%20makeLoader'),
messageSends: ["makeLoader"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_showLoader'),
smalltalk.method({
selector: unescape('showLoader'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_loader", []), "_asJQuery", []), "_hide", []), "_fadeIn", []);
return self;},
args: [],
source: unescape('showLoader%0A%0A%09self%20loader%20asJQuery%20hide%20fadeIn%0A'),
messageSends: ["fadeIn", "hide", "asJQuery", "loader"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_hideLoader'),
smalltalk.method({
selector: unescape('hideLoader'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_loader", []), "_asJQuery", []), "_hide", []), "_fadeOut_", [(0.5)]);
return self;},
args: [],
source: unescape('hideLoader%0A%0A%09self%20loader%20asJQuery%20hide%20fadeOut%3A%200.5'),
messageSends: ["fadeOut:", "hide", "asJQuery", "loader"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_loadAndPaintOn_'),
smalltalk.method({
selector: unescape('loadAndPaintOn%3A'),
category: 'painting',
fn: function (html){
var self=this;
smalltalk.send(self, "_onAboutToLoad", []);
smalltalk.send(self, "_itemsDo_", [(function(){smalltalk.send(self, "_paintItemsOn_", [html]);return smalltalk.send(self, "_onAfterLoaded", []);})]);
return self;},
args: ["html"],
source: unescape('loadAndPaintOn%3A%20html%0A%0A%09self%20onAboutToLoad.%0A%0A%09self%20itemsDo%3A%5B%0A%09%09self%20paintItemsOn%3A%20html.%0A%09%09self%20onAfterLoaded%5D'),
messageSends: ["onAboutToLoad", "itemsDo:", "paintItemsOn:", "onAfterLoaded"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_hasItems'),
smalltalk.method({
selector: unescape('hasItems'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@items'], "_notNil", []), "_and_", [(function(){return smalltalk.send(self['@items'], "_notEmpty", []);})]);
return self;},
args: [],
source: unescape('hasItems%0A%0A%09%5E%20items%20notNil%20and%3A%5B%0A%09items%20notEmpty%5D'),
messageSends: ["and:", "notNil", "notEmpty"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'actions',
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_isLoaded", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_refresh', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_refresh', fn: function(){return self}})})();})]));
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_loadAndPaintOn_", [smalltalk.send(self, "_newCanvas", [])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_refresh'){return e.fn()} throw(e)}},
args: [],
source: unescape('refresh%0A%09%0A%09self%20isLoaded%20ifFalse%3A%5B%5Eself%5D.%0A%0A%09self%20reset.%0A%09self%20loadAndPaintOn%3A%20self%20newCanvas'),
messageSends: ["ifFalse:", "isLoaded", "reset", "loadAndPaintOn:", "newCanvas"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_onAboutToLoad'),
smalltalk.method({
selector: unescape('onAboutToLoad'),
category: 'reactions',
fn: function (){
var self=this;
smalltalk.send(self, "_showLoader", []);
return self;},
args: [],
source: unescape('onAboutToLoad%0A%0A%09self%20showLoader'),
messageSends: ["showLoader"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_onAfterLoaded'),
smalltalk.method({
selector: unescape('onAfterLoaded'),
category: 'reactions',
fn: function (){
var self=this;
smalltalk.send(self, "_hideLoader", []);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ItemsLoaded || ItemsLoaded), "_new", [])]);
return self;},
args: [],
source: unescape('onAfterLoaded%0A%0A%09self%20hideLoader.%0A%09%0A%09self%20announce%3A%20ItemsLoaded%20new.%0A'),
messageSends: ["hideLoader", "announce:", "new"],
referencedClasses: ["ItemsLoaded"]
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_makeItemsGetter'),
smalltalk.method({
selector: unescape('makeItemsGetter'),
category: 'actions',
fn: function (){
var self=this;
return (function(onDone){return smalltalk.send(self, "_getItemsDo_", [onDone]);});
return self;},
args: [],
source: unescape('makeItemsGetter%0A%0A%09%5E%20%5B%3AonDone%7C%20self%20getItemsDo%3A%20onDone%5D'),
messageSends: ["getItemsDo:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_initializeItemsGetter'),
smalltalk.method({
selector: unescape('initializeItemsGetter'),
category: 'initializing',
fn: function (){
var self=this;
return (self['@itemsGetter']=smalltalk.send(self, "_makeItemsGetter", []));
return self;},
args: [],
source: unescape('initializeItemsGetter%0A%09%5E%20itemsGetter%20%3A%3D%20self%20makeItemsGetter'),
messageSends: ["makeItemsGetter"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_onAfterLoad_do_'),
smalltalk.method({
selector: unescape('onAfterLoad%3Ado%3A'),
category: 'reactions',
fn: function (someJson, onDone){
var self=this;
(self['@items']=smalltalk.send(self, "_makeItemsFromJson_", [someJson]));
smalltalk.send(onDone, "_value", []);
return self;},
args: ["someJson", "onDone"],
source: unescape('onAfterLoad%3A%20someJson%20do%3A%20onDone%0A%0A%09items%20%3A%3D%20self%20makeItemsFromJson%3A%20someJson.%0A%0A%09onDone%20value'),
messageSends: ["makeItemsFromJson:", "value"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_makeItemsFromJson_'),
smalltalk.method({
selector: unescape('makeItemsFromJson%3A'),
category: 'actions',
fn: function (someJson){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["someJson"],
source: unescape('makeItemsFromJson%3A%20someJson%0A%09%22Answers%20the%20collection%20of%20items%20reified%20from%20someJson.%22%0A%0A%09self%20subclassResponsibility%09'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_isLoaded'),
smalltalk.method({
selector: unescape('isLoaded'),
category: 'testing',
fn: function (){
var self=this;
return smalltalk.send(self['@items'], "_notNil", []);
return self;},
args: [],
source: unescape('isLoaded%0A%0A%09%5E%20items%20notNil'),
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_refreshDo_'),
smalltalk.method({
selector: unescape('refreshDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
try{((($receiver = smalltalk.send(self, "_isLoaded", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_refreshDo_', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_refreshDo_', fn: function(){return self}})})();})]));
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_loadAndPaintOn_done_", [smalltalk.send(self, "_newCanvas", []), aBlock]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_refreshDo_'){return e.fn()} throw(e)}},
args: ["aBlock"],
source: unescape('refreshDo%3A%20aBlock%0A%0A%09self%20isLoaded%20ifFalse%3A%5B%5Eself%5D.%0A%0A%09self%20reset.%0A%09self%20loadAndPaintOn%3A%20self%20newCanvas%20done%3A%20aBlock'),
messageSends: ["ifFalse:", "isLoaded", "reset", "loadAndPaintOn:done:", "newCanvas"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_loadAndPaintOn_done_'),
smalltalk.method({
selector: unescape('loadAndPaintOn%3Adone%3A'),
category: 'painting',
fn: function (html, aBlock){
var self=this;
smalltalk.send(self, "_onAboutToLoad", []);
smalltalk.send(self, "_itemsDo_", [(function(){smalltalk.send(self, "_paintItemsOn_", [html]);smalltalk.send(self, "_onAfterLoaded", []);return smalltalk.send(aBlock, "_value", []);})]);
return self;},
args: ["html", "aBlock"],
source: unescape('loadAndPaintOn%3A%20html%20done%3A%20aBlock%0A%0A%09self%20onAboutToLoad.%0A%0A%09self%20itemsDo%3A%5B%0A%09%09self%20paintItemsOn%3A%20html.%0A%09%09self%20onAfterLoaded.%0A%09%09aBlock%20value%5D'),
messageSends: ["onAboutToLoad", "itemsDo:", "paintItemsOn:", "onAfterLoaded", "value"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);



smalltalk.addClass('BunchPresenter', smalltalk.ItemsPresenter, ['bunchSize', 'index', 'atEnd', 'lastItems', 'more'], 'Flow-Presenters');
smalltalk.BunchPresenter.comment=unescape('This%20preseter%20is%20specialized%20in%20presenting%20items%20that%20are%20loaded%20in%20bunches.%0AThe%20intention%20is%20to%20fragment%20the%20quantity%20of%20items%20to%20present%20at%20one%20time%20so%20the%20experience%20gets%20improved.%0A%0ASubpresenters%20of%20BunchPresenter%20can%20do%20things%20like%20painting%2020%20tweets%20at%20the%20time%2C%20query%20for%20another%2020%20tweets%2C%20so%20on%20and%20so%20forth')
smalltalk.addMethod(
unescape('_bunchSize'),
smalltalk.method({
selector: unescape('bunchSize'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@bunchSize']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeBunchSize", []);})() : $receiver;
return self;},
args: [],
source: unescape('bunchSize%0A%0A%09%5E%20bunchSize%20ifNil%3A%5Bself%20initializeBunchSize%5D'),
messageSends: ["ifNil:", "initializeBunchSize"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_bunchSize_'),
smalltalk.method({
selector: unescape('bunchSize%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@bunchSize']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('bunchSize%3A%20anInteger%0A%0A%09bunchSize%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_index'),
smalltalk.method({
selector: unescape('index'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@index']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeIndex", []);})() : $receiver;
return self;},
args: [],
source: unescape('index%0A%0A%09%5E%20index%20ifNil%3A%5Bself%20initializeIndex%5D'),
messageSends: ["ifNil:", "initializeIndex"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initializeIndex'),
smalltalk.method({
selector: unescape('initializeIndex'),
category: 'initialization',
fn: function (){
var self=this;
return (self['@index']=(1));
return self;},
args: [],
source: unescape('initializeIndex%0A%0A%09%5E%20index%20%3A%3D%201'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initializeBunchSize'),
smalltalk.method({
selector: unescape('initializeBunchSize'),
category: 'initialization',
fn: function (){
var self=this;
return (self['@bunchSize']=smalltalk.send(smalltalk.send(self, "_class", []), "_defaultBunchSize", []));
return self;},
args: [],
source: unescape('initializeBunchSize%0A%0A%09%5E%20bunchSize%20%3A%3D%20self%20class%20defaultBunchSize'),
messageSends: ["defaultBunchSize", "class"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_index_'),
smalltalk.method({
selector: unescape('index%3A'),
category: 'accessing',
fn: function (anInteger){
var self=this;
(self['@index']=anInteger);
return self;},
args: ["anInteger"],
source: unescape('index%3A%20anInteger%0A%0A%09index%20%3A%3D%20anInteger'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = ((($receiver = ((($receiver = smalltalk.send(self, "_index", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_bunchSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_bunchSize", [])]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;},
args: [],
source: unescape('start%0A%0A%09%5E%20%28%28self%20index%20-1%29%20*%20self%20bunchSize%29%20+1'),
messageSends: [unescape("+"), unescape("*"), unescape("-"), "index", "bunchSize"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_end'),
smalltalk.method({
selector: unescape('end'),
category: 'accessing',
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_index", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_bunchSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_bunchSize", [])]));
return self;},
args: [],
source: unescape('end%0A%0A%09%5E%20self%20index%20*%20self%20bunchSize'),
messageSends: [unescape("*"), "index", "bunchSize"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_getItemsDo_'),
smalltalk.method({
selector: unescape('getItemsDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: ["aBlock"],
source: unescape('getItemsDo%3A%20aBlock%0A%09%22Returns%20the%20collection%20of%20items%20that%20should%20be%20presented%20by%20this%20presenter.%0A%09Evaluates%20the%20onDone%20reaction%20when%20the%20answer%20arrives.%22%0A%0A%09%22You%20can%20use%20this%20idea%20in%20your%20concrete%20ItemsPresenter%20subclass%3A%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28%27api/Blah/find%3Fwhatever%3Dthing%26from%3D%27%2Cself%20start%20asString%2C%27%26to%3D%27%2Cself%20end%20asString%29.%0A%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterLoad%3A%20x%20do%3A%20onDone%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20GettingItemsError%20signal%3A%20%27Cannot%20get%20the%20Blah%20kind%20of%20items%3A%20%27%2C%20x%20responseText%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20GettingItemsError%20signal%3A%20%27Cannot%20get%20the%20Blah%20kind%20of%20items%3A%20%27%2C%20x%20responseText%5D%7D%22%20%20%0A%0A%09%5E%20self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_nextBunch'),
smalltalk.method({
selector: unescape('nextBunch'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_index_", [((($receiver = smalltalk.send(self, "_index", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return self;},
args: [],
source: unescape('nextBunch%0A%0A%09%5E%20self%20index%3A%20self%20index%20+%201'),
messageSends: ["index:", unescape("+"), "index"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_reset'),
smalltalk.method({
selector: unescape('reset'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_reset", [], smalltalk.ItemsPresenter);
(self['@index']=nil);
(self['@atEnd']=false);
return self;},
args: [],
source: unescape('reset%0A%0A%09super%20reset.%0A%0A%09index%20%3A%3D%20nil.%0A%09atEnd%20%3A%3D%20false'),
messageSends: ["reset"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_atEnd'),
smalltalk.method({
selector: unescape('atEnd'),
category: 'testing',
fn: function (){
var self=this;
return self['@atEnd'];
return self;},
args: [],
source: unescape('atEnd%0A%09%22Answers%20true%20if%20there%20isn%27t%20any%20other%20items%20to%20load.%22%0A%09%5E%20atEnd'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.ItemsPresenter);
(self['@atEnd']=false);
return self;},
args: [],
source: unescape('initialize%0A%0A%09super%20initialize.%0A%0A%09atEnd%20%3A%3D%20false'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_onAfterLoad_do_'),
smalltalk.method({
selector: unescape('onAfterLoad%3Ado%3A'),
category: 'reactions',
fn: function (someJson, onDone){
var self=this;
(self['@lastItems']=smalltalk.send(self, "_makeItemsFromJson_", [someJson]));
smalltalk.send(self, "_addItems_", [self['@lastItems']]);
((($receiver = ((($receiver = smalltalk.send(self, "_bunchSize", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(self['@lastItems'], "_size", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(self['@lastItems'], "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@atEnd']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@atEnd']=true);})]));
smalltalk.send(onDone, "_value", []);
return self;},
args: ["someJson", "onDone"],
source: unescape('onAfterLoad%3A%20someJson%20do%3A%20onDone%0A%0A%09lastItems%20%3A%3D%20self%20makeItemsFromJson%3A%20someJson.%0A%09self%20addItems%3A%20lastItems.%0A%09self%20bunchSize%20%3E%20lastItems%20size%20ifTrue%3A%5B%0A%09%09atEnd%20%3A%3D%20true%5D.%0A%0A%09onDone%20value%0A%0A'),
messageSends: ["makeItemsFromJson:", "addItems:", "ifTrue:", unescape("%3E"), "bunchSize", "size", "value"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_items'),
smalltalk.method({
selector: unescape('items'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@items']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeItems", []);})() : $receiver;
return self;},
args: [],
source: unescape('items%0A%0A%09%5E%20items%20ifNil%3A%5Bself%20initializeItems%5D'),
messageSends: ["ifNil:", "initializeItems"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initializeItems'),
smalltalk.method({
selector: unescape('initializeItems'),
category: 'initialization',
fn: function (){
var self=this;
return (self['@items']=smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: unescape('initializeItems%0A%0A%09%5E%20items%20%3A%3D%20Array%20new'),
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_addItems_'),
smalltalk.method({
selector: unescape('addItems%3A'),
category: 'actions',
fn: function (someItems){
var self=this;
smalltalk.send(smalltalk.send(self, "_items", []), "_addAll_", [someItems]);
return self;},
args: ["someItems"],
source: unescape('addItems%3A%20someItems%0A%0A%09self%20items%20addAll%3A%20someItems'),
messageSends: ["addAll:", "items"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_removeItems_'),
smalltalk.method({
selector: unescape('removeItems%3A'),
category: 'actions',
fn: function (someItems){
var self=this;
smalltalk.send(smalltalk.send(self, "_items", []), "_removeAll_", [someItems]);
return self;},
args: ["someItems"],
source: unescape('removeItems%3A%20someItems%0A%0A%09self%20items%20removeAll%3A%20someItems'),
messageSends: ["removeAll:", "items"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_showNext'),
smalltalk.method({
selector: unescape('showNext'),
category: 'actions',
fn: function (){
var self=this;
var html=nil;
(html=smalltalk.send(self, "_newCanvas", []));
smalltalk.send(self, "_nextBunch", []);
smalltalk.send(self, "_loadAndPaintOn_", [html]);
return self;},
args: [],
source: unescape('showNext%0A%0A%09%7C%20html%7C%0A%09html%20%3A%3D%20self%20newCanvas.%0A%09self%20nextBunch.%0A%09self%20loadAndPaintOn%3A%20html%0A'),
messageSends: ["newCanvas", "nextBunch", "loadAndPaintOn:"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_paintItemsOn_'),
smalltalk.method({
selector: unescape('paintItemsOn%3A'),
category: 'painting',
fn: function (html){
var self=this;
smalltalk.send(self['@lastItems'], "_do_", [(function(item){return smalltalk.send(self, "_paint_", [smalltalk.send(self, "_presenterFor_", [item])]);})]);
return self;},
args: ["html"],
source: unescape('paintItemsOn%3A%20html%0A%0A%09lastItems%20do%3A%5B%3Aitem%7C%0A%09%09self%20paint%3A%20%28self%20presenterFor%3A%20item%29%5D.%0A'),
messageSends: ["do:", "paint:", "presenterFor:"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_itemsDo_'),
smalltalk.method({
selector: unescape('itemsDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_loadItemsDo_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('itemsDo%3A%20aBlock%0A%09%22Performs%20aBlock%20either%20after%20loading%20the%20items%20or%20when%20it%20already%20have%20them.%22%0A%0A%09self%20loadItemsDo%3A%20aBlock'),
messageSends: ["loadItemsDo:"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_showLoader'),
smalltalk.method({
selector: unescape('showLoader'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_loader", []), "_asJQuery", []), "_hide", []), "_fadeIn", []);
return self;},
args: [],
source: unescape('showLoader%0A%0A%09self%20loader%20asJQuery%20hide%20fadeIn'),
messageSends: ["fadeIn", "hide", "asJQuery", "loader"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_onAfterLoaded'),
smalltalk.method({
selector: unescape('onAfterLoaded'),
category: 'reactions',
fn: function (){
var self=this;
smalltalk.send(self, "_onAfterLoaded", [], smalltalk.ItemsPresenter);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_append_", [smalltalk.send(smalltalk.send(self, "_loader", []), "_asJQuery", [])]);
return self;},
args: [],
source: unescape('onAfterLoaded%0A%0A%09super%20onAfterLoaded.%0A%0A%09%22Once%20the%20items%20are%20loaded%2C%20move%20the%20loader%20to%20the%20bottom.%22%0A%09self%20wrapper%20asJQuery%20append%3A%20self%20loader%20asJQuery.'),
messageSends: ["onAfterLoaded", "append:", "asJQuery", "wrapper", "loader"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_more'),
smalltalk.method({
selector: unescape('more'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@more']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeMore", []);})() : $receiver;
return self;},
args: [],
source: unescape('more%0A%0A%09%5E%20more%20ifNil%3A%5Bself%20initializeMore%5D%0A'),
messageSends: ["ifNil:", "initializeMore"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initializeMore'),
smalltalk.method({
selector: unescape('initializeMore'),
category: 'initialization',
fn: function (){
var self=this;
return (self['@more']=smalltalk.send(self, "_makeMore", []));
return self;},
args: [],
source: unescape('initializeMore%0A%0A%09%5E%20more%20%3A%3D%20self%20makeMore'),
messageSends: ["makeMore"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_makeMore'),
smalltalk.method({
selector: unescape('makeMore'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('makeMore%0A%09%22Makes%20the%20button%20that%20should%20load%20more%20items.%22%0A%0A%09self%20subclassResponsibility%0A%0A%09%22%20use%20this%20as%20an%20idea%0A%0A%09%5E%28self%20newCanvasOn%3A%20%27%23ThisPresenter%27%20asJQuery%29%20a%0A%09%09id%3A%20%27SeeMoreItems%27%3B%0A%09%09onClick%3A%5Bself%20onMore%5D%3B%0A%09%09with%3A%20%27More%20items...%27%3B%09%0A%09%09yourself%22'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_showMore'),
smalltalk.method({
selector: unescape('showMore'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_more", []), "_asJQuery", []), "_hide", []), "_fadeIn", []);
return self;},
args: [],
source: unescape('showMore%0A%0A%09self%20more%20asJQuery%20hide%20fadeIn'),
messageSends: ["fadeIn", "hide", "asJQuery", "more"],
referencedClasses: []
}),
smalltalk.BunchPresenter);


smalltalk.addMethod(
unescape('_defaultBunchSize'),
smalltalk.method({
selector: unescape('defaultBunchSize'),
category: 'not yet classified',
fn: function (){
var self=this;
return (7);
return self;},
args: [],
source: unescape('defaultBunchSize%0A%09%22Not%20even%20geniuses%20can%20pay%20attention%20to%20about%20%0A%093%20or%204%20things%20at%20the%20same%20time%2C%20so%207%20sounds%20like%20more%20than%20enough.%0A%09Of%20course%20you%20can%20override.%20Every%20application%20should%20do%20what%20it%20has%20to%20do%20%0A%09in%20order%20to%20provide%20the%20best%20user%20experience.%22%0A%0A%09%5E%207'),
messageSends: [],
referencedClasses: []
}),
smalltalk.BunchPresenter.klass);


smalltalk.addClass('Application', smalltalk.Presenter, ['feedback'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_feedback'),
smalltalk.method({
selector: unescape('feedback'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@feedback']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeFeedback", []);})() : $receiver;
return self;},
args: [],
source: unescape('feedback%0A%09%5E%20feedback%20ifNil%3A%5Bself%20initializeFeedback%5D'),
messageSends: ["ifNil:", "initializeFeedback"],
referencedClasses: []
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_initializeFeedback'),
smalltalk.method({
selector: unescape('initializeFeedback'),
category: 'initialization',
fn: function (){
var self=this;
return (self['@feedback']=smalltalk.send(self, "_makeFeedback", []));
return self;},
args: [],
source: unescape('initializeFeedback%0A%09%5E%20feedback%20%3A%3D%20self%20makeFeedback'),
messageSends: ["makeFeedback"],
referencedClasses: []
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_makeFeedback'),
smalltalk.method({
selector: unescape('makeFeedback'),
category: 'actions',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Feedback || Feedback), "_new", []);
return self;},
args: [],
source: unescape('makeFeedback%0A%0A%09%5E%20Feedback%20new'),
messageSends: ["new"],
referencedClasses: ["Feedback"]
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_feedbackText_'),
smalltalk.method({
selector: unescape('feedbackText%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_feedback", []), "_text_", [aString]);
return self;},
args: ["aString"],
source: unescape('feedbackText%3A%20aString%0A%0A%09self%20feedback%20text%3A%20aString'),
messageSends: ["text:", "feedback"],
referencedClasses: []
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_negativeFeedbackText_'),
smalltalk.method({
selector: unescape('negativeFeedbackText%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_beNegative", []);return smalltalk.send($rec, "_text_", [aString]);})(smalltalk.send(self, "_feedback", []));
return self;},
args: ["aString"],
source: unescape('negativeFeedbackText%3A%20aString%0A%0A%09self%20feedback%20beNegative%3B%20text%3A%20aString'),
messageSends: ["beNegative", "text:", "feedback"],
referencedClasses: []
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_positiveFeedbackText_'),
smalltalk.method({
selector: unescape('positiveFeedbackText%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_bePositive", []);return smalltalk.send($rec, "_text_", [aString]);})(smalltalk.send(self, "_feedback", []));
return self;},
args: ["aString"],
source: unescape('positiveFeedbackText%3A%20aString%0A%0A%09self%20feedback%20bePositive%3B%20text%3A%20aString'),
messageSends: ["bePositive", "text:", "feedback"],
referencedClasses: []
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_neutralFeedbackText_'),
smalltalk.method({
selector: unescape('neutralFeedbackText%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_beNeutral", []);return smalltalk.send($rec, "_text_", [aString]);})(smalltalk.send(self, "_feedback", []));
return self;},
args: ["aString"],
source: unescape('neutralFeedbackText%3A%20aString%0A%0A%09self%20feedback%20beNeutral%3B%20text%3A%20aString'),
messageSends: ["beNeutral", "text:", "feedback"],
referencedClasses: []
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_onFeedback_'),
smalltalk.method({
selector: unescape('onFeedback%3A'),
category: 'reactions',
fn: function (anAnnouncement){
var self=this;
var polarity=nil;
(polarity=smalltalk.send(anAnnouncement, "_polarity", []));
smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(polarity, "__comma", ["FeedbackText:"]), smalltalk.send((smalltalk.Array || Array), "_with_", [smalltalk.send(anAnnouncement, "_subject", [])])]);
return self;},
args: ["anAnnouncement"],
source: unescape('onFeedback%3A%20anAnnouncement%0A%0A%09%7C%20polarity%20%7C%0A%0A%09polarity%20%3A%3D%20anAnnouncement%20polarity.%0A%09self%20perform%3A%20%28polarity%2C%20%27FeedbackText%3A%27%29%20withArguments%3A%20%28Array%20with%3A%20anAnnouncement%20subject%29%0A%0A%09'),
messageSends: ["polarity", "perform:withArguments:", unescape("%2C"), "with:", "subject"],
referencedClasses: ["Array"]
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_onAfterOpen'),
smalltalk.method({
selector: unescape('onAfterOpen'),
category: 'reactions',
fn: function (){
var self=this;
smalltalk.send(self, "_onAfterOpen", [], smalltalk.Presenter);
smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_put_", ["app", self]);
return self;},
args: [],
source: unescape('onAfterOpen%0A%0A%09super%20onAfterOpen.%0A%0A%09window%20at%3A%20%27app%27%20put%3A%20self%0A'),
messageSends: ["onAfterOpen", "at:put:"],
referencedClasses: []
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Presenter);
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof window == 'undefined' ? nil : window)]), "_bind_do_", ["hashchange", (function(){return smalltalk.send(self, "_onHash", []);})]);
return self;},
args: [],
source: unescape('initialize%0A%0A%09super%20initialize.%0A%0A%09%28window%20jQuery%3A%20window%29%20bind%3A%20%27hashchange%27%20do%3A%20%5Bself%20onHash%5D.'),
messageSends: ["initialize", "bind:do:", "jQuery:", "onHash"],
referencedClasses: []
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_onHash'),
smalltalk.method({
selector: unescape('onHash'),
category: 'reactions',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('onHash%0A%09%22The%20hash%20in%20the%20application%20URL%20has%20changed.%22%0A%0A%09%22no-op%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Application);



smalltalk.addClass('Feedback', smalltalk.Presenter, ['content', 'text'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_paintOn_'),
smalltalk.method({
selector: unescape('paintOn%3A'),
category: 'paint',
fn: function (html){
var self=this;
smalltalk.send(self['@wrapper'], "_id_", ["feedback"]);
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_hide", []);
(function($rec){smalltalk.send($rec, "_id_", ["feedbackWrapper"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_id_", ["feedbackContent"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_paintContentOn_", [html]);return smalltalk.send(self, "_paintButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('paintOn%3A%20html%0A%09%0A%09wrapper%20id%3A%20%27feedback%27.%0A%09wrapper%20asJQuery%20hide.%0A%0A%09html%20div%0A%09%09id%3A%20%27feedbackWrapper%27%3B%0A%09%09with%3A%5B%0A%09%09%09html%20div%0A%09%09%09%09id%3A%27feedbackContent%27%3B%0A%09%09%09%09with%3A%5B%0A%09%09%09%09%09self%20paintContentOn%3A%20html.%0A%09%09%09%09%09self%20paintButtonOn%3A%20html%5D%5D%0A'),
messageSends: ["id:", "hide", "asJQuery", "with:", "paintContentOn:", "paintButtonOn:", "div"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_paintButtonOn_'),
smalltalk.method({
selector: unescape('paintButtonOn%3A'),
category: 'paint',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["feedbackClose"]);smalltalk.send($rec, "_with_", ["Close"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_onClose", []);})]);})(smalltalk.send(html, "_button", []));
return self;},
args: ["html"],
source: unescape('paintButtonOn%3A%20html%0A%0A%09html%20button%0A%09%09id%3A%20%27feedbackClose%27%3B%0A%09%09with%3A%20%27Close%27%3B%0A%09%09onClick%3A%5Bself%20onClose%5D'),
messageSends: ["id:", "with:", "onClick:", "onClose", "button"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_paintContentOn_'),
smalltalk.method({
selector: unescape('paintContentOn%3A'),
category: 'paint',
fn: function (html){
var self=this;
(self['@content']=(function($rec){smalltalk.send($rec, "_id_", ["feedbackContentWrapper"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", [])));
return self;},
args: ["html"],
source: unescape('paintContentOn%3A%20html%0A%0A%09content%20%3A%3D%20html%20div%0A%09%09%09%09id%3A%20%27feedbackContentWrapper%27%3B%0A%09%09%09%09yourself'),
messageSends: ["id:", "yourself", "div"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
category: 'accessing',
fn: function (){
var self=this;
return self['@text'];
return self;},
args: [],
source: unescape('text%0A%0A%09%5E%20text'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_text_'),
smalltalk.method({
selector: unescape('text%3A'),
category: 'actions',
fn: function (aString){
var self=this;
(self['@text']=aString);
smalltalk.send(self, "_refresh", []);
smalltalk.send(self, "_show", []);
return self;},
args: ["aString"],
source: unescape('text%3A%20aString%0A%0A%09text%20%3A%3D%20aString.%0A%09self%20refresh.%0A%09self%20show'),
messageSends: ["refresh", "show"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Presenter);
(self['@text']=smalltalk.send((smalltalk.String || String), "_new", []));
return self;},
args: [],
source: unescape('initialize%0A%0A%09super%20initialize.%0A%0A%09text%20%3A%3D%20String%20new.%0A'),
messageSends: ["initialize", "new"],
referencedClasses: ["String"]
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@content'], "_asJQuery", []), "_html_", [self['@text']]);
return self;},
args: [],
source: unescape('refresh%0A%0A%09content%20asJQuery%20html%3A%20text%0A'),
messageSends: ["html:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'actions',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_slideDown_", [(500)]);return smalltalk.send($rec, "_fadeIn_do_", [(500), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_setTimeout_delay_", [(function(){return (function($rec){smalltalk.send($rec, "_slideUp_", [(500)]);return smalltalk.send($rec, "_fadeOut_", [(500)]);})(smalltalk.send(self['@wrapper'], "_asJQuery", []));}), (3000)]);})]);})(smalltalk.send(self['@wrapper'], "_asJQuery", []));
return self;},
args: [],
source: unescape('show%0A%0A%09wrapper%20asJQuery%20slideDown%3A%20500%3B%20fadeIn%3A%20500%20do%3A%5B%0A%09%09window%20setTimeout%3A%20%5Bwrapper%20asJQuery%20slideUp%3A%20500%3B%20fadeOut%3A%20500%5D%20delay%3A%203000%5D%09'),
messageSends: ["slideDown:", "fadeIn:do:", "setTimeout:delay:", "slideUp:", "fadeOut:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_onClose'),
smalltalk.method({
selector: unescape('onClose'),
category: 'reactions',
fn: function (){
var self=this;
smalltalk.send(self, "_hide", []);
return self;},
args: [],
source: unescape('onClose%0A%0A%09self%20hide'),
messageSends: ["hide"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_beNegative'),
smalltalk.method({
selector: unescape('beNegative'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_removePolarity", []);
smalltalk.send(smalltalk.send(unescape("%23feedbackWrapper"), "_asJQuery", []), "_addClass_", ["negativeFeedback"]);
return self;},
args: [],
source: unescape('beNegative%0A%0A%09self%20removePolarity.%0A%09%27%23feedbackWrapper%27%20asJQuery%20addClass%3A%20%27negativeFeedback%27'),
messageSends: ["removePolarity", "addClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_beNeutral'),
smalltalk.method({
selector: unescape('beNeutral'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_removePolarity", []);
smalltalk.send(smalltalk.send(unescape("%23feedbackWrapper"), "_asJQuery", []), "_addClass_", ["neutralFeedback"]);
return self;},
args: [],
source: unescape('beNeutral%0A%0A%09self%20removePolarity.%0A%09%27%23feedbackWrapper%27%20asJQuery%20addClass%3A%20%27neutralFeedback%27'),
messageSends: ["removePolarity", "addClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_bePositive'),
smalltalk.method({
selector: unescape('bePositive'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_removePolarity", []);
smalltalk.send(smalltalk.send(unescape("%23feedbackWrapper"), "_asJQuery", []), "_addClass_", ["positiveFeedback"]);
return self;},
args: [],
source: unescape('bePositive%0A%0A%09self%20removePolarity.%0A%09%27%23feedbackWrapper%27%20asJQuery%20addClass%3A%20%27positiveFeedback%27'),
messageSends: ["removePolarity", "addClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_removePolarity'),
smalltalk.method({
selector: unescape('removePolarity'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(["neutralFeedback", "neutralFeedback", "neutralFeedback"], "_do_", [(function(cssClass){return smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_removeClass_", [cssClass]);})]);
return self;},
args: [],
source: unescape('removePolarity%0A%0A%09%23%28%27neutralFeedback%27%20%27neutralFeedback%27%20%27neutralFeedback%27%29%20do%3A%5B%3AcssClass%7C%0A%09%09wrapper%20asJQuery%20removeClass%3A%20cssClass%5D'),
messageSends: ["do:", "removeClass:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Feedback);



smalltalk.addClass('TagBrushPresenter', smalltalk.Presenter, [], 'Flow-Presenters');
smalltalk.TagBrushPresenter.comment=unescape('This%20presenter%20is%20a%20wrapping%20facility%20for%20aTagBrush.%0A%0AIts%20value%20is%20in%20wrapping%20aTagBrush%20as%20if%20it%20were%20a%20flow%20presenter.%0A%0ASo%20you%20can%20make%20something%20like%0A%0AanAlbum%3E%3EmakeAddTrack%0A%0A%09aTagBrush%20%3A%3D%20html%20div%20id%3A%20%27quickDiv%27%3B%20class%3A%20%27aham%27%3B%20with%3A%5Bhtml%20a%20with%3A%20%27add%20new%20track%27%5D.%0A%0A%09%5E%20TagBrushPresenter%20for%3A%20aTagBrush%0A%0A%0AIn%20that%20way%2C%20your%20Album%20presenter%20can%20treat%20that%20div%20as%20if%20it%20were%20a%20subpresenter%0A%09%09%0A')

smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
category: 'actions',
fn: function (aTagBrush){
var self=this;
return (function($rec){smalltalk.send($rec, "_wrapper_", [aTagBrush]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aTagBrush"],
source: unescape('for%3A%20aTagBrush%0A%0A%09%5E%20self%20new%0A%09%09wrapper%3A%20aTagBrush%3B%0A%09%09yourself'),
messageSends: ["wrapper:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.TagBrushPresenter.klass);


