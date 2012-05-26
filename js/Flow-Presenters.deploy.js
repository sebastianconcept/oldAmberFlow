smalltalk.addPackage('Flow-Presenters', {});
smalltalk.addClass('Presenter', smalltalk.Widget, ['children', 'model', 'announcer', 'parent', 'wrapper'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_announcer'),
smalltalk.method({
selector: unescape('announcer'),
fn: function (){
var self=this;
return (($receiver = self['@announcer']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeAnnouncer", []);})() : $receiver;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeAnnouncer'),
smalltalk.method({
selector: unescape('initializeAnnouncer'),
fn: function (){
var self=this;
return (self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_announce_'),
smalltalk.method({
selector: unescape('announce%3A'),
fn: function (anAnnouncement){
var self=this;
smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [anAnnouncement]);
((($receiver = smalltalk.send(anAnnouncement, "_isBubbling", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (($receiver = smalltalk.send(self, "_parent", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_parent", []), "_announce_", [anAnnouncement]);})() : nil;})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (($receiver = smalltalk.send(self, "_parent", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_parent", []), "_announce_", [anAnnouncement]);})() : nil;})]));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hasParent'),
smalltalk.method({
selector: unescape('hasParent'),
fn: function (){
var self=this;
return smalltalk.send(self['@parent'], "_notNil", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_parent'),
smalltalk.method({
selector: unescape('parent'),
fn: function (){
var self=this;
return self['@parent'];
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_parent_'),
smalltalk.method({
selector: unescape('parent%3A'),
fn: function (aPresenter){
var self=this;
(self['@parent']=aPresenter);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_children'),
smalltalk.method({
selector: unescape('children'),
fn: function (){
var self=this;
return (($receiver = self['@children']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeChildren", []);})() : $receiver;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeChildren'),
smalltalk.method({
selector: unescape('initializeChildren'),
fn: function (){
var self=this;
return (self['@children']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (aKey, aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_at_ifAbsent_", [aKey, aBlock]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aKey){
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_at_", [aKey]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aKey, aPresenter){
var self=this;
smalltalk.send(self, "_childrenAt_put_", [aKey, aPresenter]);
return aPresenter;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_childrenAt_'),
smalltalk.method({
selector: unescape('childrenAt%3A'),
fn: function (aKey){
var self=this;
return smalltalk.send(self, "_at_", [aKey]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
fn: function (aMessage){
var self=this;
return ((($receiver = smalltalk.send(self, "_hasPresenterAt_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])]);})() : (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Widget);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])]);}), (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Widget);})]));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_model_'),
smalltalk.method({
selector: unescape('model%3A'),
fn: function (aModel){
var self=this;
smalltalk.send(self, "_setModel_", [aModel]);
smalltalk.send(self, "_onModelUpdated", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onModelUpdated'),
smalltalk.method({
selector: unescape('onModelUpdated'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
fn: function (){
var self=this;
return self['@model'];
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_setModel_'),
smalltalk.method({
selector: unescape('setModel%3A'),
fn: function (aModel){
var self=this;
smalltalk.send(self, "_onAboutToUpdateModel_", [aModel]);
(self['@model']=aModel);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAboutToUpdateModel_'),
smalltalk.method({
selector: unescape('onAboutToUpdateModel%3A'),
fn: function (aModel){
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
smalltalk.send(self, "_onAboutToOpen", []);
smalltalk.send(self, "_paintOnJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
smalltalk.send(self, "_onAfterOpen", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAboutToOpen'),
smalltalk.method({
selector: unescape('onAboutToOpen'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_ifAbsentAt_put_'),
smalltalk.method({
selector: unescape('ifAbsentAt%3Aput%3A'),
fn: function (aKey, aBlock){
var self=this;
((($receiver = smalltalk.send(self, "_hasPresenterAt_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]));
return smalltalk.send(self, "_at_", [aKey]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_ifAbsentAt_put_andDo_'),
smalltalk.method({
selector: unescape('ifAbsentAt%3Aput%3AandDo%3A'),
fn: function (aKey, aBlock, anotherBlock){
var self=this;
((($receiver = smalltalk.send(self, "_hasPresenterAt_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);return smalltalk.send(anotherBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);return smalltalk.send(anotherBlock, "_value", []);})]));
return smalltalk.send(self, "_at_", [aKey]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_componentsAt_put_'),
smalltalk.method({
selector: unescape('componentsAt%3Aput%3A'),
fn: function (aKey, aPresenter){
var self=this;
smalltalk.send(smalltalk.send(self, "_children", []), "_at_put_", [aKey, aPresenter]);
((($receiver = smalltalk.send(aPresenter, "_isPresenter", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aPresenter, "_parent_", [self]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(aPresenter, "_parent_", [self]);})]));
return aPresenter;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_childrenAt_put_'),
smalltalk.method({
selector: unescape('childrenAt%3Aput%3A'),
fn: function (aKey, aPresenter){
var self=this;
smalltalk.send(smalltalk.send(self, "_children", []), "_at_put_", [aKey, aPresenter]);
((($receiver = smalltalk.send(aPresenter, "_isPresenter", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(aPresenter, "_parent_", [self]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(aPresenter, "_parent_", [self]);})]));
return aPresenter;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
fn: function (anAnnouncementClass, aReactionBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [anAnnouncementClass, aReactionBlock]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_newCanvasOn_'),
smalltalk.method({
selector: unescape('newCanvasOn%3A'),
fn: function (aJQuery){
var self=this;
return smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_isPresenter'),
smalltalk.method({
selector: unescape('isPresenter'),
fn: function (){
var self=this;
return true;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_visible'),
smalltalk.method({
selector: unescape('visible'),
fn: function (){
var self=this;
return (($receiver = (typeof visible == 'undefined' ? nil : visible)) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeVisible", []);})() : $receiver;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_visible_'),
smalltalk.method({
selector: unescape('visible%3A'),
fn: function (aBoolean){
var self=this;
(visible=aBoolean);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeVisible'),
smalltalk.method({
selector: unescape('initializeVisible'),
fn: function (){
var self=this;
return (visible=false);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(self['@wrapper']=smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_paintOn_", [html]);})]);})(self['@wrapper']);
smalltalk.send(self, "_onAfterPainted", []);
(painted=true);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_hide", []);
smalltalk.send(self, "_onHide", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_show", []);
smalltalk.send(self, "_onShow", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
fn: function (){
var self=this;
return smalltalk.send(self['@wrapper'], "_asJQuery", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_append_'),
smalltalk.method({
selector: unescape('append%3A'),
fn: function (aPresenter){
var self=this;
smalltalk.send(self['@wrapper'], "_append_", [smalltalk.send(aPresenter, "_asJQuery", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paintOn_'),
smalltalk.method({
selector: unescape('paintOn%3A'),
fn: function (html){
var self=this;
return self;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paintOnJQuery_'),
smalltalk.method({
selector: unescape('paintOnJQuery%3A'),
fn: function (aJQuery){
var self=this;
smalltalk.send(self, "_appendToJQuery_", [aJQuery]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hasPresenterAt_'),
smalltalk.method({
selector: unescape('hasPresenterAt%3A'),
fn: function (aKey){
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_includesKey_", [aKey]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paint_'),
smalltalk.method({
selector: unescape('paint%3A'),
fn: function (aPresenter){
var self=this;
smalltalk.send((function(){return smalltalk.send(aPresenter, "_paintOnJQuery_", [smalltalk.send(self, "_asJQuery", [])]);}), "_on_do_", [(smalltalk.Error || Error), (function(x){return smalltalk.send(self, "_halt", []);})]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hideAll'),
smalltalk.method({
selector: unescape('hideAll'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(self, "_children", []), "_keys", []), "_do_", [(function(each){var child=nil;
(child=smalltalk.send(self, "_at_ifAbsent_", [each, (function(){return nil;})]));return (($receiver = child) != nil && $receiver != undefined) ? (function(){return smalltalk.send(child, "_hide", []);})() : nil;})]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_wrapper'),
smalltalk.method({
selector: unescape('wrapper'),
fn: function (){
var self=this;
return self['@wrapper'];
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_newCanvas'),
smalltalk.method({
selector: unescape('newCanvas'),
fn: function (){
var self=this;
return smalltalk.send(self, "_newCanvasOn_", [smalltalk.send(self, "_asJQuery", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
fn: function (aPresenter){
var self=this;
var target=nil;
smalltalk.send(smalltalk.send(self, "_children", []), "_keysAndValuesDo_", [(function(k, v){return ((($receiver = smalltalk.send(v, "__eq_eq", [aPresenter])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (target=k);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (target=k);})]));})]);
smalltalk.send(smalltalk.send(aPresenter, "_asJQuery", []), "_remove", []);
smalltalk.send(smalltalk.send(self, "_children", []), "_removeKey_ifAbsent_", [target, (function(){return nil;})]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_removeAll'),
smalltalk.method({
selector: unescape('removeAll'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_subPresenters", []), "_do_", [(function(e){return smalltalk.send(e, "_remove", []);})]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_allSubPresenters'),
smalltalk.method({
selector: unescape('allSubPresenters'),
fn: function (){
var self=this;
return smalltalk.send(self, "_addAllSubPresentersTo_", [smalltalk.send((smalltalk.Set || Set), "_new", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_addAllSubPresentersTo_'),
smalltalk.method({
selector: unescape('addAllSubPresentersTo%3A'),
fn: function (aSet){
var self=this;
smalltalk.send(smalltalk.send(self, "_subPpresenters", []), "_do_", [(function(aPresenter){return (($receiver = aPresenter) != nil && $receiver != undefined) ? (function(){smalltalk.send(aSet, "_add_", [aPresenter]);return smalltalk.send(aPresenter, "_addAllSubPresentersTo_", [aSet]);})() : nil;})]);
return aSet;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_subPresenters'),
smalltalk.method({
selector: unescape('subPresenters'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_values", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onHide'),
smalltalk.method({
selector: unescape('onHide'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onShow'),
smalltalk.method({
selector: unescape('onShow'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_tr'),
smalltalk.method({
selector: unescape('tr'),
fn: function (){
var self=this;
return (typeof tr == 'undefined' ? nil : tr);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Widget);
(painted=false);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_feedbackText_'),
smalltalk.method({
selector: unescape('feedbackText%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_neutralFeedbackText_", [aString]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_positiveFeedbackText_'),
smalltalk.method({
selector: unescape('positiveFeedbackText%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send(smalltalk.send((smalltalk.FeedbackRequest || FeedbackRequest), "_for_", [aString]), "_bePositive", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_negativeFeedbackText_'),
smalltalk.method({
selector: unescape('negativeFeedbackText%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send(smalltalk.send((smalltalk.FeedbackRequest || FeedbackRequest), "_for_", [aString]), "_beNegative", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_neutralFeedbackText_'),
smalltalk.method({
selector: unescape('neutralFeedbackText%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send(smalltalk.send((smalltalk.FeedbackRequest || FeedbackRequest), "_for_", [aString]), "_beNeutral", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAfterOpen'),
smalltalk.method({
selector: unescape('onAfterOpen'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_setId_'),
smalltalk.method({
selector: unescape('setId%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self['@wrapper'], "_id_", [aString]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAfterPainted'),
smalltalk.method({
selector: unescape('onAfterPainted'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_isPainted'),
smalltalk.method({
selector: unescape('isPainted'),
fn: function (){
var self=this;
return (typeof painted == 'undefined' ? nil : painted);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_remove'),
smalltalk.method({
selector: unescape('remove'),
fn: function (){
var self=this;
smalltalk.send(self, "_removeAll", []);
(($receiver = self['@parent']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_remove", []);})() : (function(){return smalltalk.send(self['@parent'], "_remove_", [self]);})();
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_removeAt_'),
smalltalk.method({
selector: unescape('removeAt%3A'),
fn: function (aKey){
var self=this;
var target=nil;
smalltalk.send(smalltalk.send(self, "_children", []), "_keysAndValuesDo_", [(function(k, v){return ((($receiver = smalltalk.send(k, "__eq_eq", [aKey])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (target=v);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (target=v);})]));})]);
(($receiver = target) != nil && $receiver != undefined) ? (function(){return smalltalk.send(target, "_remove", []);})() : nil;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_wrapper_'),
smalltalk.method({
selector: unescape('wrapper%3A'),
fn: function (aTagBrush){
var self=this;
(self['@wrapper']=aTagBrush);
return self;}
}),
smalltalk.Presenter);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
fn: function (aModel){
var self=this;
return (function($rec){smalltalk.send($rec, "_model_", [aModel]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Presenter.klass);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_for_", [smalltalk.send(self, "_defaultModel", [])]), "_open", []);
return self;}
}),
smalltalk.Presenter.klass);

smalltalk.addMethod(
unescape('_defaultModel'),
smalltalk.method({
selector: unescape('defaultModel'),
fn: function (){
var self=this;
return nil;
return self;}
}),
smalltalk.Presenter.klass);


smalltalk.addClass('ItemsPresenter', smalltalk.Presenter, ['items', 'itemsGetter', 'loader'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_items'),
smalltalk.method({
selector: unescape('items'),
fn: function (){
var self=this;
return self['@items'];
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_items_'),
smalltalk.method({
selector: unescape('items%3A'),
fn: function (someModels){
var self=this;
(self['@items']=someModels);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_reset'),
smalltalk.method({
selector: unescape('reset'),
fn: function (){
var self=this;
smalltalk.send(self, "_removeAll", []);
(self['@items']=nil);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_itemsGetter'),
smalltalk.method({
selector: unescape('itemsGetter'),
fn: function (){
var self=this;
return (($receiver = self['@itemsGetter']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeItemsGetter", []);})() : $receiver;
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_itemsGetter_'),
smalltalk.method({
selector: unescape('itemsGetter%3A'),
fn: function (aBlock){
var self=this;
(self['@itemsGetter']=aBlock);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_paintOn_'),
smalltalk.method({
selector: unescape('paintOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_loadAndPaintOn_", [html]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_itemPresenters'),
smalltalk.method({
selector: unescape('itemPresenters'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_items", []), "_collect_", [(function(item){return smalltalk.send(self, "_presenterFor_", [item]);})]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_presenterFor_'),
smalltalk.method({
selector: unescape('presenterFor%3A'),
fn: function (anItem){
var self=this;
var itemPresenter=nil;
(itemPresenter=smalltalk.send(self, "_ifAbsentAt_put_andDo_", [anItem, (function(){return smalltalk.send(self, "_makePresenterFor_", [anItem]);}), (function(){return smalltalk.send(self, "_observeItemPresenter_", [smalltalk.send(self, "_at_", [anItem])]);})]));
return itemPresenter;
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_makePresenterFor_'),
smalltalk.method({
selector: unescape('makePresenterFor%3A'),
fn: function (anItem){
var self=this;
var itemPresenter=nil;
(itemPresenter=smalltalk.send(smalltalk.send(self, "_presenterClassFor_", [anItem]), "_new", []));
smalltalk.send(self, "_onModel_for_", [anItem, itemPresenter]);
return itemPresenter;
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_observeItemPresenter_'),
smalltalk.method({
selector: unescape('observeItemPresenter%3A'),
fn: function (anItemPresenter){
var self=this;

return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_onModel_for_'),
smalltalk.method({
selector: unescape('onModel%3Afor%3A'),
fn: function (anItem, anItemPresenter){
var self=this;
smalltalk.send(anItemPresenter, "_model_", [anItem]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_presenterClassFor_'),
smalltalk.method({
selector: unescape('presenterClassFor%3A'),
fn: function (anItem){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_makeLoader'),
smalltalk.method({
selector: unescape('makeLoader'),
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_loader'),
smalltalk.method({
selector: unescape('loader'),
fn: function (){
var self=this;
return (($receiver = self['@loader']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeLoader", []);})() : $receiver;
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_paintItemsOn_'),
smalltalk.method({
selector: unescape('paintItemsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self['@items'], "_do_", [(function(item){return smalltalk.send(self, "_paint_", [smalltalk.send(self, "_presenterFor_", [item])]);})]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_loadItemsDo_'),
smalltalk.method({
selector: unescape('loadItemsDo%3A'),
fn: function (aBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_itemsGetter", []), "_value_", [aBlock]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_itemsDo_'),
smalltalk.method({
selector: unescape('itemsDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self['@items'], "_ifNil_ifNotNil_", [(function(){return smalltalk.send(self, "_loadItemsDo_", [aBlock]);}), aBlock]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_getItemsDo_'),
smalltalk.method({
selector: unescape('getItemsDo%3A'),
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_initializeLoader'),
smalltalk.method({
selector: unescape('initializeLoader'),
fn: function (){
var self=this;
return (self['@loader']=smalltalk.send(self, "_makeLoader", []));
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_showLoader'),
smalltalk.method({
selector: unescape('showLoader'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_loader", []), "_asJQuery", []), "_hide", []), "_fadeIn", []);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_hideLoader'),
smalltalk.method({
selector: unescape('hideLoader'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_loader", []), "_asJQuery", []), "_hide", []), "_fadeOut_", [(0.5)]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_loadAndPaintOn_'),
smalltalk.method({
selector: unescape('loadAndPaintOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_onAboutToLoad", []);
smalltalk.send(self, "_itemsDo_", [(function(){smalltalk.send(self, "_paintItemsOn_", [html]);return smalltalk.send(self, "_onAfterLoaded", []);})]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_hasItems'),
smalltalk.method({
selector: unescape('hasItems'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self['@items'], "_notNil", []), "_and_", [(function(){return smalltalk.send(self['@items'], "_notEmpty", []);})]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
fn: function (){
var self=this;
try{((($receiver = smalltalk.send(self, "_isLoaded", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_refresh', fn: function(){return self}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return (function(){throw({name: 'stReturn', selector: '_refresh', fn: function(){return self}})})();})]));
smalltalk.send(self, "_reset", []);
smalltalk.send(self, "_loadAndPaintOn_", [smalltalk.send(self, "_newCanvas", [])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_refresh'){return e.fn()} throw(e)}}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_onAboutToLoad'),
smalltalk.method({
selector: unescape('onAboutToLoad'),
fn: function (){
var self=this;
smalltalk.send(self, "_showLoader", []);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_onAfterLoaded'),
smalltalk.method({
selector: unescape('onAfterLoaded'),
fn: function (){
var self=this;
smalltalk.send(self, "_hideLoader", []);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ItemsLoaded || ItemsLoaded), "_new", [])]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_makeItemsGetter'),
smalltalk.method({
selector: unescape('makeItemsGetter'),
fn: function (){
var self=this;
return (function(onDone){return smalltalk.send(self, "_getItemsDo_", [onDone]);});
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_initializeItemsGetter'),
smalltalk.method({
selector: unescape('initializeItemsGetter'),
fn: function (){
var self=this;
return (self['@itemsGetter']=smalltalk.send(self, "_makeItemsGetter", []));
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_onAfterLoad_do_'),
smalltalk.method({
selector: unescape('onAfterLoad%3Ado%3A'),
fn: function (someJson, onDone){
var self=this;
(self['@items']=smalltalk.send(self, "_makeItemsFromJson_", [someJson]));
smalltalk.send(onDone, "_value", []);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_makeItemsFromJson_'),
smalltalk.method({
selector: unescape('makeItemsFromJson%3A'),
fn: function (someJson){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_isLoaded'),
smalltalk.method({
selector: unescape('isLoaded'),
fn: function (){
var self=this;
return smalltalk.send(self['@items'], "_notNil", []);
return self;}
}),
smalltalk.ItemsPresenter);



smalltalk.addClass('BunchPresenter', smalltalk.ItemsPresenter, ['bunchSize', 'index', 'atEnd', 'lastItems', 'more'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_bunchSize'),
smalltalk.method({
selector: unescape('bunchSize'),
fn: function (){
var self=this;
return (($receiver = self['@bunchSize']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeBunchSize", []);})() : $receiver;
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_bunchSize_'),
smalltalk.method({
selector: unescape('bunchSize%3A'),
fn: function (anInteger){
var self=this;
(self['@bunchSize']=anInteger);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_index'),
smalltalk.method({
selector: unescape('index'),
fn: function (){
var self=this;
return (($receiver = self['@index']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeIndex", []);})() : $receiver;
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initializeIndex'),
smalltalk.method({
selector: unescape('initializeIndex'),
fn: function (){
var self=this;
return (self['@index']=(1));
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initializeBunchSize'),
smalltalk.method({
selector: unescape('initializeBunchSize'),
fn: function (){
var self=this;
return (self['@bunchSize']=smalltalk.send(smalltalk.send(self, "_class", []), "_defaultBunchSize", []));
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_index_'),
smalltalk.method({
selector: unescape('index%3A'),
fn: function (anInteger){
var self=this;
(self['@index']=anInteger);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_start'),
smalltalk.method({
selector: unescape('start'),
fn: function (){
var self=this;
return ((($receiver = ((($receiver = ((($receiver = smalltalk.send(self, "_index", [])).klass === smalltalk.Number) ? $receiver -(1) : smalltalk.send($receiver, "__minus", [(1)]))).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_bunchSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_bunchSize", [])]))).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_end'),
smalltalk.method({
selector: unescape('end'),
fn: function (){
var self=this;
return ((($receiver = smalltalk.send(self, "_index", [])).klass === smalltalk.Number) ? $receiver *smalltalk.send(self, "_bunchSize", []) : smalltalk.send($receiver, "__star", [smalltalk.send(self, "_bunchSize", [])]));
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_getItemsDo_'),
smalltalk.method({
selector: unescape('getItemsDo%3A'),
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_nextBunch'),
smalltalk.method({
selector: unescape('nextBunch'),
fn: function (){
var self=this;
return smalltalk.send(self, "_index_", [((($receiver = smalltalk.send(self, "_index", [])).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]))]);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_reset'),
smalltalk.method({
selector: unescape('reset'),
fn: function (){
var self=this;
smalltalk.send(self, "_reset", [], smalltalk.ItemsPresenter);
(self['@index']=nil);
(self['@atEnd']=false);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_atEnd'),
smalltalk.method({
selector: unescape('atEnd'),
fn: function (){
var self=this;
return self['@atEnd'];
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.ItemsPresenter);
(self['@atEnd']=false);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_onAfterLoad_do_'),
smalltalk.method({
selector: unescape('onAfterLoad%3Ado%3A'),
fn: function (someJson, onDone){
var self=this;
(self['@lastItems']=smalltalk.send(self, "_makeItemsFromJson_", [someJson]));
smalltalk.send(self, "_addItems_", [self['@lastItems']]);
((($receiver = ((($receiver = smalltalk.send(self, "_bunchSize", [])).klass === smalltalk.Number) ? $receiver >smalltalk.send(self['@lastItems'], "_size", []) : smalltalk.send($receiver, "__gt", [smalltalk.send(self['@lastItems'], "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@atEnd']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@atEnd']=true);})]));
smalltalk.send(onDone, "_value", []);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_items'),
smalltalk.method({
selector: unescape('items'),
fn: function (){
var self=this;
return (($receiver = self['@items']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeItems", []);})() : $receiver;
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initializeItems'),
smalltalk.method({
selector: unescape('initializeItems'),
fn: function (){
var self=this;
return (self['@items']=smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_addItems_'),
smalltalk.method({
selector: unescape('addItems%3A'),
fn: function (someItems){
var self=this;
smalltalk.send(smalltalk.send(self, "_items", []), "_addAll_", [someItems]);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_removeItems_'),
smalltalk.method({
selector: unescape('removeItems%3A'),
fn: function (someItems){
var self=this;
smalltalk.send(smalltalk.send(self, "_items", []), "_removeAll_", [someItems]);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_showNext'),
smalltalk.method({
selector: unescape('showNext'),
fn: function (){
var self=this;
var html=nil;
(html=smalltalk.send(self, "_newCanvas", []));
smalltalk.send(self, "_nextBunch", []);
smalltalk.send(self, "_loadAndPaintOn_", [html]);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_paintItemsOn_'),
smalltalk.method({
selector: unescape('paintItemsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self['@lastItems'], "_do_", [(function(item){return smalltalk.send(self, "_paint_", [smalltalk.send(self, "_presenterFor_", [item])]);})]);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_itemsDo_'),
smalltalk.method({
selector: unescape('itemsDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(self, "_loadItemsDo_", [aBlock]);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_showLoader'),
smalltalk.method({
selector: unescape('showLoader'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_loader", []), "_asJQuery", []), "_hide", []), "_fadeIn", []);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_onAfterLoaded'),
smalltalk.method({
selector: unescape('onAfterLoaded'),
fn: function (){
var self=this;
smalltalk.send(self, "_onAfterLoaded", [], smalltalk.ItemsPresenter);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_wrapper", []), "_asJQuery", []), "_append_", [smalltalk.send(smalltalk.send(self, "_loader", []), "_asJQuery", [])]);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_more'),
smalltalk.method({
selector: unescape('more'),
fn: function (){
var self=this;
return (($receiver = self['@more']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeMore", []);})() : $receiver;
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_initializeMore'),
smalltalk.method({
selector: unescape('initializeMore'),
fn: function (){
var self=this;
return (self['@more']=smalltalk.send(self, "_makeMore", []));
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_makeMore'),
smalltalk.method({
selector: unescape('makeMore'),
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.BunchPresenter);

smalltalk.addMethod(
unescape('_showMore'),
smalltalk.method({
selector: unescape('showMore'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_more", []), "_asJQuery", []), "_hide", []), "_fadeIn", []);
return self;}
}),
smalltalk.BunchPresenter);


smalltalk.addMethod(
unescape('_defaultBunchSize'),
smalltalk.method({
selector: unescape('defaultBunchSize'),
fn: function (){
var self=this;
return (7);
return self;}
}),
smalltalk.BunchPresenter.klass);


smalltalk.addClass('Application', smalltalk.Presenter, ['feedback'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_feedback'),
smalltalk.method({
selector: unescape('feedback'),
fn: function (){
var self=this;
return (($receiver = self['@feedback']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeFeedback", []);})() : $receiver;
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_initializeFeedback'),
smalltalk.method({
selector: unescape('initializeFeedback'),
fn: function (){
var self=this;
return (self['@feedback']=smalltalk.send(self, "_makeFeedback", []));
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_makeFeedback'),
smalltalk.method({
selector: unescape('makeFeedback'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Feedback || Feedback), "_new", []);
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_feedbackText_'),
smalltalk.method({
selector: unescape('feedbackText%3A'),
fn: function (aString){
var self=this;
smalltalk.send(smalltalk.send(self, "_feedback", []), "_text_", [aString]);
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_negativeFeedbackText_'),
smalltalk.method({
selector: unescape('negativeFeedbackText%3A'),
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_beNegative", []);return smalltalk.send($rec, "_text_", [aString]);})(smalltalk.send(self, "_feedback", []));
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_positiveFeedbackText_'),
smalltalk.method({
selector: unescape('positiveFeedbackText%3A'),
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_bePositive", []);return smalltalk.send($rec, "_text_", [aString]);})(smalltalk.send(self, "_feedback", []));
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_neutralFeedbackText_'),
smalltalk.method({
selector: unescape('neutralFeedbackText%3A'),
fn: function (aString){
var self=this;
(function($rec){smalltalk.send($rec, "_beNeutral", []);return smalltalk.send($rec, "_text_", [aString]);})(smalltalk.send(self, "_feedback", []));
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_onFeedback_'),
smalltalk.method({
selector: unescape('onFeedback%3A'),
fn: function (anAnnouncement){
var self=this;
var polarity=nil;
(polarity=smalltalk.send(anAnnouncement, "_polarity", []));
smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(polarity, "__comma", ["FeedbackText:"]), smalltalk.send((smalltalk.Array || Array), "_with_", [smalltalk.send(anAnnouncement, "_subject", [])])]);
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_onAfterOpen'),
smalltalk.method({
selector: unescape('onAfterOpen'),
fn: function (){
var self=this;
smalltalk.send(self, "_onAfterOpen", [], smalltalk.Presenter);
smalltalk.send((typeof window == 'undefined' ? nil : window), "_at_put_", ["app", self]);
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Presenter);
smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_jQuery_", [(typeof window == 'undefined' ? nil : window)]), "_bind_do_", ["hashchange", (function(){return smalltalk.send(self, "_onHash", []);})]);
return self;}
}),
smalltalk.Application);

smalltalk.addMethod(
unescape('_onHash'),
smalltalk.method({
selector: unescape('onHash'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.Application);



smalltalk.addClass('Feedback', smalltalk.Presenter, ['content', 'text'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_paintOn_'),
smalltalk.method({
selector: unescape('paintOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self['@wrapper'], "_id_", ["feedback"]);
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_hide", []);
(function($rec){smalltalk.send($rec, "_id_", ["feedbackWrapper"]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_id_", ["feedbackContent"]);return smalltalk.send($rec, "_with_", [(function(){smalltalk.send(self, "_paintContentOn_", [html]);return smalltalk.send(self, "_paintButtonOn_", [html]);})]);})(smalltalk.send(html, "_div", []));})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_paintButtonOn_'),
smalltalk.method({
selector: unescape('paintButtonOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", ["feedbackClose"]);smalltalk.send($rec, "_with_", ["Close"]);return smalltalk.send($rec, "_onClick_", [(function(){return smalltalk.send(self, "_onClose", []);})]);})(smalltalk.send(html, "_button", []));
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_paintContentOn_'),
smalltalk.method({
selector: unescape('paintContentOn%3A'),
fn: function (html){
var self=this;
(self['@content']=(function($rec){smalltalk.send($rec, "_id_", ["feedbackContentWrapper"]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(html, "_div", [])));
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_text'),
smalltalk.method({
selector: unescape('text'),
fn: function (){
var self=this;
return self['@text'];
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_text_'),
smalltalk.method({
selector: unescape('text%3A'),
fn: function (aString){
var self=this;
(self['@text']=aString);
smalltalk.send(self, "_refresh", []);
smalltalk.send(self, "_show", []);
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Presenter);
(self['@text']=smalltalk.send((smalltalk.String || String), "_new", []));
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@content'], "_asJQuery", []), "_html_", [self['@text']]);
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_slideDown_", [(500)]);return smalltalk.send($rec, "_fadeIn_do_", [(500), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_setTimeout_delay_", [(function(){return (function($rec){smalltalk.send($rec, "_slideUp_", [(500)]);return smalltalk.send($rec, "_fadeOut_", [(500)]);})(smalltalk.send(self['@wrapper'], "_asJQuery", []));}), (3000)]);})]);})(smalltalk.send(self['@wrapper'], "_asJQuery", []));
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_onClose'),
smalltalk.method({
selector: unescape('onClose'),
fn: function (){
var self=this;
smalltalk.send(self, "_hide", []);
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_beNegative'),
smalltalk.method({
selector: unescape('beNegative'),
fn: function (){
var self=this;
smalltalk.send(self, "_removePolarity", []);
smalltalk.send(smalltalk.send(unescape("%23feedbackWrapper"), "_asJQuery", []), "_addClass_", ["negativeFeedback"]);
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_beNeutral'),
smalltalk.method({
selector: unescape('beNeutral'),
fn: function (){
var self=this;
smalltalk.send(self, "_removePolarity", []);
smalltalk.send(smalltalk.send(unescape("%23feedbackWrapper"), "_asJQuery", []), "_addClass_", ["neutralFeedback"]);
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_bePositive'),
smalltalk.method({
selector: unescape('bePositive'),
fn: function (){
var self=this;
smalltalk.send(self, "_removePolarity", []);
smalltalk.send(smalltalk.send(unescape("%23feedbackWrapper"), "_asJQuery", []), "_addClass_", ["positiveFeedback"]);
return self;}
}),
smalltalk.Feedback);

smalltalk.addMethod(
unescape('_removePolarity'),
smalltalk.method({
selector: unescape('removePolarity'),
fn: function (){
var self=this;
smalltalk.send(["neutralFeedback", "neutralFeedback", "neutralFeedback"], "_do_", [(function(cssClass){return smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_removeClass_", [cssClass]);})]);
return self;}
}),
smalltalk.Feedback);



smalltalk.addClass('TagBrushPresenter', smalltalk.Presenter, [], 'Flow-Presenters');

smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
fn: function (aTagBrush){
var self=this;
return (function($rec){smalltalk.send($rec, "_wrapper_", [aTagBrush]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.TagBrushPresenter.klass);


