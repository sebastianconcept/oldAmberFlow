smalltalk.addPackage('Flow-Presenters', {});
smalltalk.addClass('Presenter', smalltalk.Widget, ['children', 'model', 'announcer', 'parent', 'visible', 'wrapper'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_announcer'),
smalltalk.method({
selector: unescape('announcer'),
category: 'accessing',
fn: function () {
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
fn: function () {
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
fn: function (anAnnouncement) {
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
fn: function () {
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
fn: function () {
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
fn: function (aKdWidget) {
var self=this;
(self['@parent']=aKdWidget);
return self;},
args: ["aKdWidget"],
source: unescape('parent%3A%20aKdWidget%0A%0A%09parent%20%3A%3D%20aKdWidget'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_children'),
smalltalk.method({
selector: unescape('children'),
category: 'accessing',
fn: function () {
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
fn: function () {
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
fn: function (aKey, aBlock) {
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
fn: function (aKey) {
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
unescape('_allSubChildren'),
smalltalk.method({
selector: unescape('allSubChildren'),
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.send(self, "_addAllSubChildrenTo_", [smalltalk.send((smalltalk.Set || Set), "_new", [])]);
return self;},
args: [],
source: unescape('allSubChildren%0A%0A%09%5E%20self%20addAllSubChildrenTo%3A%20Set%20new'),
messageSends: ["addAllSubChildrenTo:", "new"],
referencedClasses: ["Set"]
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_addAllSubChildrenTo_'),
smalltalk.method({
selector: unescape('addAllSubChildrenTo%3A'),
category: 'accessing',
fn: function (aSet) {
var self=this;
var subChildren=nil;
(subChildren=smalltalk.send(smalltalk.send(self, "_children", []), "_values", []));
smalltalk.send(subChildren, "_do_", [(function(aKdWidget){return (($receiver = aKdWidget) != nil && $receiver != undefined) ? (function(){smalltalk.send(aSet, "_add_", [aKdWidget]);return smalltalk.send(aKdWidget, "_addAllSubChildrenTo_", [aSet]);})() : nil;})]);
return aSet;
return self;},
args: ["aSet"],
source: unescape('addAllSubChildrenTo%3A%20aSet%0A%09%22Adds%20all%20the%20sub%20children%20of%20the%20receiver%20to%20aSet.%22%0A%09%0A%09%7C%20subChildren%20%7C%0A%09%0A%09subChildren%20%3A%3D%20self%20children%20values.%0A%09subChildren%20do%3A%5B%3AaKdWidget%7C%0A%09%09aKdWidget%20ifNotNil%3A%5B%0A%09%09%09aSet%20add%3A%20aKdWidget.%0A%09%09%09aKdWidget%20addAllSubChildrenTo%3A%20aSet%5D%5D.%0A%09%0A%09%5E%20aSet%0A'),
messageSends: ["values", "children", "do:", "ifNotNil:", "add:", "addAllSubChildrenTo:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aKey, aPresenter) {
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
fn: function (aKey) {
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
fn: function (aMessage) {
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
fn: function (aModel) {
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
fn: function () {
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
fn: function () {
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
fn: function (aModel) {
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
fn: function (aModel) {
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
fn: function () {
var self=this;
smalltalk.send(self, "_onAboutToOpen", []);
smalltalk.send(self, "_paintOnJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('open%0A%09%0A%09self%20onAboutToOpen.%0A%0A%09self%20paintOnJQuery%3A%20%27body%27%20asJQuery%20'),
messageSends: ["onAboutToOpen", "paintOnJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAboutToOpen'),
smalltalk.method({
selector: unescape('onAboutToOpen'),
category: 'reactions',
fn: function () {
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
fn: function (aKey, aPresenter) {
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
fn: function (aKey, aPresenter) {
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
fn: function (anAnnouncementClass, aReactionBlock) {
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
fn: function (aJQuery) {
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
fn: function () {
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
fn: function () {
var self=this;
return (($receiver = self['@visible']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeVisible", []);})() : $receiver;
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
fn: function (aBoolean) {
var self=this;
(self['@visible']=aBoolean);
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
fn: function () {
var self=this;
return (self['@visible']=false);
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
fn: function (html) {
var self=this;
(self['@painted']=true);
(self['@wrapper']=smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_paintOn_", [html]);})]);})(self['@wrapper']);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09%22Render%20this%20presenter.%0A%09Note%3A%20presenters%20are%20always%20wrapped%20in%20a%20div%20using%20as%20CSS%20class%0A%09it%27s%20class%20name.%22%0A%0A%09painted%20%3A%3D%20true.%0A%0A%09wrapper%20%3A%3D%20html%20div.%0A%09%0A%09wrapper%0A%09%09class%3A%20self%20class%20name%3B%0A%09%09with%3A%5Bself%20paintOn%3A%20html%5D'),
messageSends: ["div", "class:", "name", "class", "with:", "paintOn:"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
category: 'actions',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_hide", []);
return self;},
args: [],
source: unescape('hide%0A%0A%09wrapper%20asJQuery%20hide'),
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
category: 'actions',
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_show", []);
return self;},
args: [],
source: unescape('show%0A%0A%09wrapper%20asJQuery%20show'),
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: 'accessing',
fn: function () {
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
fn: function (aPresenter) {
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
category: 'rendering',
fn: function (html) {
var self=this;
self;
return self;},
args: ["html"],
source: unescape('paintOn%3A%20html%0A%09%22Paints%20the%20content%20%28the%20wrapped%20content%2C%20like%20wrapper%20NOT%20included%29%0A%09of%20this%20presenter.%20Sub%20classes%20should%20override%20as%20appropiate.%22%0A%09%0A%09%22default%20is%20paint%20nothing%22%0A%09self'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paintOnJQuery_'),
smalltalk.method({
selector: unescape('paintOnJQuery%3A'),
category: 'rendering',
fn: function (aJQuery) {
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
fn: function (aKey) {
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
category: 'actions',
fn: function (aPresenter) {
var self=this;
smalltalk.send(aPresenter, "_paintOnJQuery_", [smalltalk.send(self, "_asJQuery", [])]);
return self;},
args: ["aPresenter"],
source: unescape('paint%3A%20aPresenter%0A%09%22Paints%20the%20%28sub%29preenter%20aPresenter%20in%20this%20%28parent%29presenter.%22%0A%0A%09aPresenter%20paintOnJQuery%3A%20self%20asJQuery%0A'),
messageSends: ["paintOnJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hideAll'),
smalltalk.method({
selector: unescape('hideAll'),
category: 'actions',
fn: function () {
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
fn: function () {
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
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
category: 'actions',
fn: function (aModel) {
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
fn: function () {
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
fn: function () {
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
return (($receiver = self['@items']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_error", []);})() : $receiver;
return self;},
args: [],
source: unescape('items%0A%0A%09%5E%20items%20ifNil%3A%5Bself%20error%5D'),
messageSends: ["ifNil:", "error"],
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
(self['@items']=nil);
return self;},
args: [],
source: unescape('reset%0A%0A%09items%20%3A%3D%20nil'),
messageSends: [],
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
return self['@itemsGetter'];
return self;},
args: [],
source: unescape('itemsGetter%0A%0A%09%5E%20itemsGetter'),
messageSends: [],
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
smalltalk.send(self, "_showLoader", []);
smalltalk.send(self, "_loadAndPaintOn_", [html]);
return self;},
args: ["html"],
source: unescape('paintOn%3A%20html%0A%09%22Paints%20the%20presenters%20for%20the%20items.%0A%09Note%3A%20this%20will%20paint%20the%20loader%20bar%20until%20it%20gets%20the%20results%20about%20querying%20the%20items.%0A%09Once%20they%20arrive%2C%20they%20get%20created%20lazily%20and%20the%20loader%20will%20be%20hidden%20and%20the%20items%27%20presenters%20will%20be%20pained%22%0A%09%0A%09self%20showLoader.%0A%09self%20loadAndPaintOn%3A%20html'),
messageSends: ["showLoader", "loadAndPaintOn:"],
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
unescape('_onItemsLoadedDo_'),
smalltalk.method({
selector: unescape('onItemsLoadedDo%3A'),
category: 'reactions',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_loader", []), "_fadeOut_do_", [(0.5), aBlock]);
return self;},
args: ["aBlock"],
source: unescape('onItemsLoadedDo%3A%20aBlock%0A%0A%09self%20loader%20fadeOut%3A%200.5%20do%3A%20aBlock'),
messageSends: ["fadeOut:do:", "loader"],
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
(self['@items']=smalltalk.send(self, "_getItemsDo_", [aBlock]));
return self;},
args: ["aBlock"],
source: unescape('loadItemsDo%3A%20aBlock%0A%09%22Loads%20the%20items%20form%20the%20getter%20block%20and%20evaluates%20passing%20the%20reaction%20aBlock%20to%20it.%22%0A%09items%20%3A%3D%20self%20getItemsDo%3A%20aBlock%0A'),
messageSends: ["getItemsDo:"],
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
return smalltalk.send(self['@itemsGetter'], "_value_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('getItemsDo%3A%20aBlock%0A%09%22Brings%20the%20whole%20bunch%20of%20fresh%20items%20from%20the%20itemGetter.%0A%09Pass%20aBlock%20to%20the%20itemsGetter%20so%20it%20gets%20evaluated%20when%20finished.%22%0A%0A%09%5E%20itemsGetter%20value%3A%20aBlock%0A%09'),
messageSends: ["value:"],
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
smalltalk.send(self, "_itemsDo_", [(function(){smalltalk.send(self, "_hideLoader", []);return smalltalk.send(self, "_paintItemsOn_", [html]);})]);
return self;},
args: ["html"],
source: unescape('loadAndPaintOn%3A%20html%0A%0A%09self%20itemsDo%3A%5B%0A%09%09self%20hideLoader.%0A%09%09self%20paintItemsOn%3A%20html%5D%0A'),
messageSends: ["itemsDo:", "hideLoader", "paintItemsOn:"],
referencedClasses: []
}),
smalltalk.ItemsPresenter);



