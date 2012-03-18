smalltalk.addPackage('Flow-Presenters', {});
smalltalk.addClass('Presenter', smalltalk.Widget, ['children', 'model', 'announcer', 'parent', 'visible', 'wrapper'], 'Flow-Presenters');
smalltalk.addMethod(
unescape('_announcer'),
smalltalk.method({
selector: unescape('announcer'),
fn: function () {
var self=this;
return (($receiver = self['@announcer']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeAnnouncer", []);})() : $receiver;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeAnnouncer'),
smalltalk.method({
selector: unescape('initializeAnnouncer'),
fn: function () {
var self=this;
return (self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_announce_'),
smalltalk.method({
selector: unescape('announce%3A'),
fn: function (anAnnouncement) {
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
fn: function () {
var self=this;
return smalltalk.send(self['@parent'], "_notNil", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_parent'),
smalltalk.method({
selector: unescape('parent'),
fn: function () {
var self=this;
return self['@parent'];
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_parent_'),
smalltalk.method({
selector: unescape('parent%3A'),
fn: function (aKdWidget) {
var self=this;
(self['@parent']=aKdWidget);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_children'),
smalltalk.method({
selector: unescape('children'),
fn: function () {
var self=this;
return (($receiver = self['@children']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeChildren", []);})() : $receiver;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeChildren'),
smalltalk.method({
selector: unescape('initializeChildren'),
fn: function () {
var self=this;
return (self['@children']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_ifAbsent_'),
smalltalk.method({
selector: unescape('at%3AifAbsent%3A'),
fn: function (aKey, aBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_at_ifAbsent_", [aKey, aBlock]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aKey) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_at_", [aKey]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_allSubChildren'),
smalltalk.method({
selector: unescape('allSubChildren'),
fn: function () {
var self=this;
return smalltalk.send(self, "_addAllSubChildrenTo_", [smalltalk.send((smalltalk.Set || Set), "_new", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_addAllSubChildrenTo_'),
smalltalk.method({
selector: unescape('addAllSubChildrenTo%3A'),
fn: function (aSet) {
var self=this;
var subChildren=nil;
(subChildren=smalltalk.send(smalltalk.send(self, "_children", []), "_values", []));
smalltalk.send(subChildren, "_do_", [(function(aKdWidget){return (($receiver = aKdWidget) != nil && $receiver != undefined) ? (function(){smalltalk.send(aSet, "_add_", [aKdWidget]);return smalltalk.send(aKdWidget, "_addAllSubChildrenTo_", [aSet]);})() : nil;})]);
return aSet;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aKey, aPresenter) {
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
fn: function (aKey) {
var self=this;
return smalltalk.send(self, "_at_", [aKey]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
fn: function (aMessage) {
var self=this;
return ((($receiver = smalltalk.send(self, "_hasPresenterAt_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])]);})() : (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Widget);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(self, "_at_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", [])]);}), (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Widget);})]));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_model_'),
smalltalk.method({
selector: unescape('model%3A'),
fn: function (aModel) {
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
fn: function () {
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_model'),
smalltalk.method({
selector: unescape('model'),
fn: function () {
var self=this;
return self['@model'];
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_setModel_'),
smalltalk.method({
selector: unescape('setModel%3A'),
fn: function (aModel) {
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
fn: function (aModel) {
var self=this;

return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function () {
var self=this;
smalltalk.send(self, "_onAboutToOpen", []);
smalltalk.send(self, "_paintOnJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_onAboutToOpen'),
smalltalk.method({
selector: unescape('onAboutToOpen'),
fn: function () {
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
return ((($receiver = smalltalk.send(self, "_hasPresenterAt_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);})]));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_ifAbsentAt_put_andDo_'),
smalltalk.method({
selector: unescape('ifAbsentAt%3Aput%3AandDo%3A'),
fn: function (aKey, aBlock, anotherBlock) {
var self=this;
((($receiver = smalltalk.send(self, "_hasPresenterAt_", [aKey])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);return smalltalk.send(anotherBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(self, "_at_put_", [aKey, smalltalk.send(aBlock, "_value", [])]);return smalltalk.send(anotherBlock, "_value", []);})]));
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_componentsAt_put_'),
smalltalk.method({
selector: unescape('componentsAt%3Aput%3A'),
fn: function (aKey, aPresenter) {
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
fn: function (aKey, aPresenter) {
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
fn: function (anAnnouncementClass, aReactionBlock) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [anAnnouncementClass, aReactionBlock]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_newCanvasOn_'),
smalltalk.method({
selector: unescape('newCanvasOn%3A'),
fn: function (aJQuery) {
var self=this;
return smalltalk.send((smalltalk.HTMLCanvas || HTMLCanvas), "_onJQuery_", [aJQuery]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_isPresenter'),
smalltalk.method({
selector: unescape('isPresenter'),
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_visible'),
smalltalk.method({
selector: unescape('visible'),
fn: function () {
var self=this;
return (($receiver = self['@visible']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeVisible", []);})() : $receiver;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_visible_'),
smalltalk.method({
selector: unescape('visible%3A'),
fn: function (aBoolean) {
var self=this;
(self['@visible']=aBoolean);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_initializeVisible'),
smalltalk.method({
selector: unescape('initializeVisible'),
fn: function () {
var self=this;
return (self['@visible']=false);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html) {
var self=this;
(self['@painted']=true);
(self['@wrapper']=smalltalk.send(html, "_div", []));
(function($rec){smalltalk.send($rec, "_class_", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])]);return smalltalk.send($rec, "_with_", [(function(){return smalltalk.send(self, "_paintOn_", [html]);})]);})(self['@wrapper']);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hide'),
smalltalk.method({
selector: unescape('hide'),
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_hide", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_show'),
smalltalk.method({
selector: unescape('show'),
fn: function () {
var self=this;
smalltalk.send(smalltalk.send(self['@wrapper'], "_asJQuery", []), "_show", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
fn: function () {
var self=this;
return smalltalk.send(self['@wrapper'], "_asJQuery", []);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_append_'),
smalltalk.method({
selector: unescape('append%3A'),
fn: function (aPresenter) {
var self=this;
smalltalk.send(self['@wrapper'], "_append_", [smalltalk.send(aPresenter, "_asJQuery", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paintOn_'),
smalltalk.method({
selector: unescape('paintOn%3A'),
fn: function (html) {
var self=this;
self;
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paintOnJQuery_'),
smalltalk.method({
selector: unescape('paintOnJQuery%3A'),
fn: function (aJQuery) {
var self=this;
smalltalk.send(self, "_appendToJQuery_", [aJQuery]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hasPresenterAt_'),
smalltalk.method({
selector: unescape('hasPresenterAt%3A'),
fn: function (aKey) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_children", []), "_includesKey_", [aKey]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_paint_'),
smalltalk.method({
selector: unescape('paint%3A'),
fn: function (aPresenter) {
var self=this;
smalltalk.send(aPresenter, "_paintOnJQuery_", [smalltalk.send(self, "_asJQuery", [])]);
return self;}
}),
smalltalk.Presenter);

smalltalk.addMethod(
unescape('_hideAll'),
smalltalk.method({
selector: unescape('hideAll'),
fn: function () {
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
fn: function () {
var self=this;
return self['@wrapper'];
return self;}
}),
smalltalk.Presenter);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
fn: function (aModel) {
var self=this;
return (function($rec){smalltalk.send($rec, "_model_", [aModel]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Presenter.klass);

smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_for_", [smalltalk.send(self, "_defaultModel", [])]), "_open", []);
return self;}
}),
smalltalk.Presenter.klass);

smalltalk.addMethod(
unescape('_defaultModel'),
smalltalk.method({
selector: unescape('defaultModel'),
fn: function () {
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
return (($receiver = self['@items']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_error", []);})() : $receiver;
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
return self['@itemsGetter'];
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
smalltalk.send(self, "_showLoader", []);
smalltalk.send(self, "_paintItemsOn_", [html]);
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
return smalltalk.send(self, "_ifAbsentAt_put_andDo_", [anItem, (function(){return smalltalk.send(self, "_makePresenterFor_", [anItem]);}), (function(){return smalltalk.send(self, "_observeItemPresenter_", [smalltalk.send(self, "_at_", [anItem])]);})]);
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
unescape('_onItemsLoadedDo_'),
smalltalk.method({
selector: unescape('onItemsLoadedDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self, "_loader", []), "_fadeOut_do_", [(0.5), aBlock]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_paintItemsOn_'),
smalltalk.method({
selector: unescape('paintItemsOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(self, "_itemsDo_", [(function(){return smalltalk.send(self, "_onItemsDo_", [(function(){return smalltalk.send(self, "_paintItemsOn_", [html]);})]);})]);
return self;}
}),
smalltalk.ItemsPresenter);

smalltalk.addMethod(
unescape('_loadItemsDo_'),
smalltalk.method({
selector: unescape('loadItemsDo%3A'),
fn: function (aBlock){
var self=this;
(self['@items']=smalltalk.send(self, "_getItemsDo_", [aBlock]));
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
return smalltalk.send(self['@itemsGetter'], "_value_", [aBlock]);
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



