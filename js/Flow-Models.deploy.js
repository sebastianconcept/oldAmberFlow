smalltalk.addPackage('Flow-Models', {});
smalltalk.addClass('Model', smalltalk.Object, ['announcer'], 'Flow-Models');
smalltalk.addMethod(
unescape('_announcer'),
smalltalk.method({
selector: unescape('announcer'),
fn: function (){
var self=this;
return (($receiver = self['@announcer']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeAnnouncer", []);})() : $receiver;
return self;}
}),
smalltalk.Model);

smalltalk.addMethod(
unescape('_initializeAnnouncer'),
smalltalk.method({
selector: unescape('initializeAnnouncer'),
fn: function (){
var self=this;
return (self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
return self;}
}),
smalltalk.Model);

smalltalk.addMethod(
unescape('_announce_'),
smalltalk.method({
selector: unescape('announce%3A'),
fn: function (anAnnouncement){
var self=this;
smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [anAnnouncement]);
return self;}
}),
smalltalk.Model);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
fn: function (anAnnouncementClass, aReactionBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [anAnnouncementClass, aReactionBlock]);
return self;}
}),
smalltalk.Model);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathSt_", [unescape("/flow/commit")]);
smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathJs_", [unescape("/flow/commit")]);
return self;}
}),
smalltalk.Model.klass);

smalltalk.addMethod(
unescape('_basePath'),
smalltalk.method({
selector: unescape('basePath'),
fn: function (){
var self=this;
return "api";
return self;}
}),
smalltalk.Model.klass);

smalltalk.addMethod(
unescape('_path'),
smalltalk.method({
selector: unescape('path'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_basePath", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_modelPath", [])]);
return self;}
}),
smalltalk.Model.klass);

smalltalk.addMethod(
unescape('_modelPath'),
smalltalk.method({
selector: unescape('modelPath'),
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;}
}),
smalltalk.Model.klass);

smalltalk.addMethod(
unescape('_jsonIgnoreInstanceVariables'),
smalltalk.method({
selector: unescape('jsonIgnoreInstanceVariables'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_jsonIgnoreInstanceVariables", [], smalltalk.Object.klass), "__comma", [["announcer"]]);
return self;}
}),
smalltalk.Model.klass);


smalltalk.addClass('PersistentModel', smalltalk.Model, ['id', 'createdOn'], 'Flow-Models');
smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
fn: function (aString){
var self=this;
(self['@id']=aString);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
fn: function (){
var self=this;
return self['@id'];
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterCreate_'),
smalltalk.method({
selector: unescape('onAfterCreate%3A'),
fn: function (x){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x])]);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelCreated || ModelCreated), "_for_", [self])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self['@id'], "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterUpdate_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})])])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_delete'),
smalltalk.method({
selector: unescape('delete'),
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self['@id'], "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["DELETE"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterDelete_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})])])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterUpdate_'),
smalltalk.method({
selector: unescape('onAfterUpdate%3A'),
fn: function (x){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelUpdated || ModelUpdated), "_for_", [self])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onUpdateFail_'),
smalltalk.method({
selector: unescape('onUpdateFail%3A'),
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelUpdateError || ModelUpdateError), "_signal_", [smalltalk.send("Could not update ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onDeleteFail_'),
smalltalk.method({
selector: unescape('onDeleteFail%3A'),
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelUpdateError || ModelUpdateError), "_signal_", [smalltalk.send("Could not delete ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterDelete_'),
smalltalk.method({
selector: unescape('onAfterDelete%3A'),
fn: function (x){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelDeleted || ModelDeleted), "_for_", [self])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_path'),
smalltalk.method({
selector: unescape('path'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_path", []);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_syncWith_'),
smalltalk.method({
selector: unescape('syncWith%3A'),
fn: function (aReifiedJSON){
var self=this;
try{var instVarsToSync=nil;
var reifierMethod=nil;
(($receiver = aReifiedJSON) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_syncWith_', fn: function(){return nil}})})();})() : $receiver;
(instVarsToSync=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_reject_", [(function(e){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_jsonIgnoreInstanceVariables", []), "_includes_", [e]);})]));
smalltalk.send(instVarsToSync, "_do_", [(function(instVarName){var value=nil;
(value=smalltalk.send(aReifiedJSON, "_at_", [instVarName]));(reifierMethod=smalltalk.send(instVarName, "__comma", ["From:"]));((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "_respondsTo_", [reifierMethod])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (value=smalltalk.send(smalltalk.send(self, "_class", []), "_perform_withArguments_", [reifierMethod, smalltalk.send((smalltalk.Array || Array), "_with_", [value])]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (value=smalltalk.send(smalltalk.send(self, "_class", []), "_perform_withArguments_", [reifierMethod, smalltalk.send((smalltalk.Array || Array), "_with_", [value])]));})]));((($receiver = smalltalk.send(value, "_isKindOf_", [(smalltalk.JSObjectProxy || JSObjectProxy)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (value=smalltalk.send(smalltalk.send(self, "_class", []), "_reify_from_", [instVarName, value]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (value=smalltalk.send(smalltalk.send(self, "_class", []), "_reify_from_", [instVarName, value]));})]));((($receiver = smalltalk.send(smalltalk.send(value, "_isKindOf_", [(smalltalk.Collection || Collection)]), "_and_", [(function(){return smalltalk.send(smalltalk.send(value, "_isKindOf_", [(smalltalk.CharacterArray || CharacterArray)]), "_not", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (value=smalltalk.send(value, "_collect_", [(function(each){return smalltalk.send(smalltalk.send(self, "_class", []), "_reifyElementsOn_from_", [instVarName, each]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (value=smalltalk.send(value, "_collect_", [(function(each){return smalltalk.send(smalltalk.send(self, "_class", []), "_reifyElementsOn_from_", [instVarName, each]);})]));})]));return smalltalk.send(self, "_instVarAt_put_", [instVarName, value]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_syncWith_'){return e.fn()} throw(e)}}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self['@id'], "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRefresh_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefeshFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefreshFail_", [x]);})])])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onRefreshFail_'),
smalltalk.method({
selector: unescape('onRefreshFail%3A'),
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelRefreshError || ModelRefreshError), "_signal_", [smalltalk.send("Could not refresh ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterRefresh_'),
smalltalk.method({
selector: unescape('onAfterRefresh%3A'),
fn: function (x){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x])]);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelRefreshed || ModelRefreshed), "_for_", [self])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
fn: function (){
var self=this;
return smalltalk.send(self, "_update", []);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_syncFrom_'),
smalltalk.method({
selector: unescape('syncFrom%3A'),
fn: function (someJson){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [someJson])]);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_createdOn_'),
smalltalk.method({
selector: unescape('createdOn%3A'),
fn: function (aDate){
var self=this;
(self['@createdOn']=aDate);
return self;}
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_createdOn'),
smalltalk.method({
selector: unescape('createdOn'),
fn: function (){
var self=this;
return self['@createdOn'];
return self;}
}),
smalltalk.PersistentModel);


smalltalk.addMethod(
unescape('_atId_'),
smalltalk.method({
selector: unescape('atId%3A'),
fn: function (anId){
var self=this;
return smalltalk.send(self, "_read_", [anId]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_read_'),
smalltalk.method({
selector: unescape('read%3A'),
fn: function (anId){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [anId])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("sucess", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRead_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onReadFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onReadFail_", [x]);})])])]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_create'),
smalltalk.method({
selector: unescape('create'),
fn: function (){
var self=this;
var newInstance=nil;
(newInstance=smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(self, "_path", [])]),smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(newInstance, "_onAfterCreate_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onCreateFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onCreateFail_", [x]);})])])]);
return newInstance;
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_onCreateFail_'),
smalltalk.method({
selector: unescape('onCreateFail%3A'),
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelCreateError || ModelCreateError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not create ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_onReadFail_'),
smalltalk.method({
selector: unescape('onReadFail%3A'),
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelReadError || ModelReadError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not read ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_onAfterRead_'),
smalltalk.method({
selector: unescape('onAfterRead%3A'),
fn: function (x){
var self=this;
return smalltalk.send(self, "_reify_", [x]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_reify_'),
smalltalk.method({
selector: unescape('reify%3A'),
fn: function (aJSONString){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_parse_", [aJSONString]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_fromJson_'),
smalltalk.method({
selector: unescape('fromJson%3A'),
fn: function (someJson){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_syncFrom_", [someJson]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_reify_from_'),
smalltalk.method({
selector: unescape('reify%3Afrom%3A'),
fn: function (instVarName, aReifiedJSON){
var self=this;
var reifierMethod=nil;
(reifierMethod=smalltalk.send(instVarName, "__comma", ["From:"]));
((($receiver = smalltalk.send(self, "_respondsTo_", [reifierMethod])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.MissingInstanceVariableReifier || MissingInstanceVariableReifier), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Please implement: ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%20class%3E%3E")]), "__comma", [reifierMethod]), "__comma", [" to properly reify that instance variable"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.MissingInstanceVariableReifier || MissingInstanceVariableReifier), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Please implement: ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%20class%3E%3E")]), "__comma", [reifierMethod]), "__comma", [" to properly reify that instance variable"])]);})]));
return smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(reifierMethod, "_asSymbol", []), smalltalk.send((smalltalk.Array || Array), "_with_", [aReifiedJSON])]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_reifyElementsOn_from_'),
smalltalk.method({
selector: unescape('reifyElementsOn%3Afrom%3A'),
fn: function (instVarName, aReifiedJSON){
var self=this;
var reifierMethod=nil;
(reifierMethod=smalltalk.send(smalltalk.send("oneOf", "__comma", [smalltalk.send(instVarName, "_capitalized", [])]), "__comma", ["From:"]));
((($receiver = smalltalk.send(self, "_respondsTo_", [reifierMethod])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.MissingInstanceVariableReifier || MissingInstanceVariableReifier), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Please implement: ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%20class%3E%3E")]), "__comma", [reifierMethod]), "__comma", [" to properly reify that instance variable"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.MissingInstanceVariableReifier || MissingInstanceVariableReifier), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Please implement: ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%20class%3E%3E")]), "__comma", [reifierMethod]), "__comma", [" to properly reify that instance variable"])]);})]));
return smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(reifierMethod, "_asSymbol", []), smalltalk.send((smalltalk.Array || Array), "_with_", [aReifiedJSON])]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_fromReified_'),
smalltalk.method({
selector: unescape('fromReified%3A'),
fn: function (aReifiedJSON){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_syncWith_", [aReifiedJSON]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_createdOnFrom_'),
smalltalk.method({
selector: unescape('createdOnFrom%3A'),
fn: function (aReifiedJSON){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_fromString_", [aReifiedJSON]);
return self;}
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_manyFromJson_'),
smalltalk.method({
selector: unescape('manyFromJson%3A'),
fn: function (someJson){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.JSON || JSON), "_parse_", [someJson]), "_collect_", [(function(each){return smalltalk.send(self, "_fromReified_", [each]);})]);
return self;}
}),
smalltalk.PersistentModel.klass);


smalltalk.addClass('JsonPersistentModel', smalltalk.Model, ['data'], 'Flow-Models');
smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
fn: function (aString){
var self=this;
smalltalk.send(self['@data'], "_at_put_", [smalltalk.symbolFor("id"), aString]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
fn: function (){
var self=this;
return smalltalk.send(self['@data'], "_at_", [smalltalk.symbolFor("id")]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(smalltalk.send(self, "_id", []), "_asString", [])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
fn: function (){
var self=this;
smalltalk.send(self, "_updateDo_", [(function(){return nil;})]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_delete'),
smalltalk.method({
selector: unescape('delete'),
fn: function (){
var self=this;
smalltalk.send(self, "_deleteDo_", [(function(){return nil;})]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onUpdateFail_'),
smalltalk.method({
selector: unescape('onUpdateFail%3A'),
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelUpdateError || ModelUpdateError), "_signal_", [smalltalk.send("Could not update ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onDeleteFail_'),
smalltalk.method({
selector: unescape('onDeleteFail%3A'),
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelUpdateError || ModelUpdateError), "_signal_", [smalltalk.send("Could not delete ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_path'),
smalltalk.method({
selector: unescape('path'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_path", []);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_syncWith_'),
smalltalk.method({
selector: unescape('syncWith%3A'),
fn: function (aReifiedJSON){
var self=this;
(self['@data']=aReifiedJSON);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
fn: function (){
var self=this;
smalltalk.send(self, "_refreshDo_", [(function(){return nil;})]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onRefreshFail_'),
smalltalk.method({
selector: unescape('onRefreshFail%3A'),
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelRefreshError || ModelRefreshError), "_signal_", [smalltalk.send("Could not refresh ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
fn: function (){
var self=this;
return smalltalk.send(self, "_saveDo_", [(function(){return nil;})]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_syncFrom_'),
smalltalk.method({
selector: unescape('syncFrom%3A'),
fn: function (someJson){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [someJson])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_createdOn_'),
smalltalk.method({
selector: unescape('createdOn%3A'),
fn: function (aDate){
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.symbolFor("createdOn"), aDate]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_createdOn'),
smalltalk.method({
selector: unescape('createdOn'),
fn: function (){
var self=this;
try{var selector=nil;
var expects=nil;
var object=nil;
(selector=smalltalk.symbolFor("createdOn"));
(expects=(smalltalk.Date || Date));
(object=smalltalk.send(self, "_at_", [smalltalk.send(selector, "_asString", [])]));
(($receiver = object) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_createdOn', fn: function(){return nil}})})();})() : $receiver;
((($receiver = smalltalk.send(object, "_isKindOf_", [expects])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_createdOn', fn: function(){return object}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_createdOn', fn: function(){return object}})})();})]));
(function(){throw({name: 'stReturn', selector: '_createdOn', fn: function(){return smalltalk.send(self, "_at_put_", [smalltalk.send(selector, "_asString", []), smalltalk.send(self, "_dateAndTimeAt_", [selector])])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_createdOn'){return e.fn()} throw(e)}}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Model);
(self['@data']=new Object());
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_asJSONString'),
smalltalk.method({
selector: unescape('asJSONString'),
fn: function (){
var self=this;
smalltalk.send(self, "_onAboutToJSON", []);
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [self['@data']]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_data'),
smalltalk.method({
selector: unescape('data'),
fn: function (){
var self=this;
return self['@data'];
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAboutToJSON'),
smalltalk.method({
selector: unescape('onAboutToJSON'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@data'], "_keys", []), "_do_", [(function(key){var value=nil;
(value=smalltalk.send(self['@data'], "_at_", [key]));return ((($receiver = smalltalk.send(value, "_isKindOf_", [(smalltalk.JSObjectProxy || JSObjectProxy)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(self, "_respondsTo_", [key])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.ModelGetterIsMissing || ModelGetterIsMissing), "_signal_", [smalltalk.send("Cannot find getter for: ", "__comma", [key])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.ModelGetterIsMissing || ModelGetterIsMissing), "_signal_", [smalltalk.send("Cannot find getter for: ", "__comma", [key])]);})]));(value=smalltalk.send(self, "_perform_", [smalltalk.send(key, "_asSymbol", [])]));smalltalk.send(value, "_onAboutToJSON", []);return smalltalk.send(self['@data'], "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(self, "_respondsTo_", [key])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.ModelGetterIsMissing || ModelGetterIsMissing), "_signal_", [smalltalk.send("Cannot find getter for: ", "__comma", [key])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.ModelGetterIsMissing || ModelGetterIsMissing), "_signal_", [smalltalk.send("Cannot find getter for: ", "__comma", [key])]);})]));(value=smalltalk.send(self, "_perform_", [smalltalk.send(key, "_asSymbol", [])]));smalltalk.send(value, "_onAboutToJSON", []);return smalltalk.send(self['@data'], "_at_put_", [key, value]);})]));})]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAfterCreate_done_'),
smalltalk.method({
selector: unescape('onAfterCreate%3Adone%3A'),
fn: function (x, aBlock){
var self=this;
(self['@data']=smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x]));
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelCreated || ModelCreated), "_for_", [self])]);
smalltalk.send(aBlock, "_value_", [self]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_subModelAt_'),
smalltalk.method({
selector: unescape('subModelAt%3A'),
fn: function (aSelector){
var self=this;
try{var subModelData=nil;
var modelClass=nil;
(subModelData=smalltalk.send(self['@data'], "_at_", [aSelector]));
(($receiver = subModelData) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_subModelAt_', fn: function(){return nil}})})();})() : $receiver;
(modelClass=smalltalk.send(subModelData, "_at_", ["class"]));
(modelClass=smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_at_", [modelClass]));
(($receiver = modelClass) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_subModelAt_', fn: function(){return smalltalk.send((smalltalk.ModelMetadataError || ModelMetadataError), "_signal_", [smalltalk.send(smalltalk.send("Cannot find ", "__comma", [smalltalk.send(aSelector, "_asString", [])]), "__comma", [unescape("%27s%20class%20for%20this%20metadata")])])}})})();})() : $receiver;
(function(){throw({name: 'stReturn', selector: '_subModelAt_', fn: function(){return smalltalk.send(modelClass, "_fromReified_", [subModelData])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_subModelAt_'){return e.fn()} throw(e)}}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aKey){
var self=this;
return smalltalk.send(self['@data'], "_at_", [aKey]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aKey, anObject){
var self=this;
smalltalk.send(self['@data'], "_at_put_", [aKey, anObject]);
return anObject;
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_dateAndTimeAt_'),
smalltalk.method({
selector: unescape('dateAndTimeAt%3A'),
fn: function (aSelector){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_fromString_", [smalltalk.send(self, "_at_", [aSelector])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
fn: function (aMessage){
var self=this;
try{var key=nil;
(key=smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", []));
((($receiver = smalltalk.send(key, "_isUnary", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self['@data'], "_at_", [smalltalk.send(key, "_asString", [])])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self['@data'], "_at_", [smalltalk.send(key, "_asString", [])])}})})();})]));
(function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return ((($receiver = smalltalk.send(smalltalk.send(key, "_isKeyword", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(key, "_asString", []), "_occurrencesOf_", [":"]), "__eq", [(1)]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(key=smalltalk.send(key, "_allButLast", []));return smalltalk.send(self['@data'], "_at_put_", [smalltalk.send(key, "_asString", []), smalltalk.send(smalltalk.send(aMessage, "_arguments", []), "_first", [])]);})() : (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Model);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(key=smalltalk.send(key, "_allButLast", []));return smalltalk.send(self['@data'], "_at_put_", [smalltalk.send(key, "_asString", []), smalltalk.send(smalltalk.send(aMessage, "_arguments", []), "_first", [])]);}), (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Model);})]))}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_doesNotUnderstand_'){return e.fn()} throw(e)}}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_deleteDo_'),
smalltalk.method({
selector: unescape('deleteDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(smalltalk.send(self, "_id", []), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["DELETE"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterDelete_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})])])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_refreshDo_'),
smalltalk.method({
selector: unescape('refreshDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(smalltalk.send(self, "_id", []), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRefresh_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefeshFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefreshFail_", [x]);})])])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_saveDo_'),
smalltalk.method({
selector: unescape('saveDo%3A'),
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_updateDo_", [aBlock]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_updateDo_'),
smalltalk.method({
selector: unescape('updateDo%3A'),
fn: function (aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(smalltalk.send(self, "_id", []), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterUpdate_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})])])]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAfterRefresh_done_'),
smalltalk.method({
selector: unescape('onAfterRefresh%3Adone%3A'),
fn: function (x, aBlock){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x])]);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelRefreshed || ModelRefreshed), "_for_", [self])]);
smalltalk.send(aBlock, "_value_", [self]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAfterDelete_done_'),
smalltalk.method({
selector: unescape('onAfterDelete%3Adone%3A'),
fn: function (x, aBlock){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelDeleted || ModelDeleted), "_for_", [self])]);
smalltalk.send(aBlock, "_value_", [self]);
return self;}
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAfterUpdate_done_'),
smalltalk.method({
selector: unescape('onAfterUpdate%3Adone%3A'),
fn: function (x, aBlock){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelUpdated || ModelUpdated), "_for_", [self])]);
smalltalk.send(aBlock, "_value_", [self]);
return self;}
}),
smalltalk.JsonPersistentModel);


smalltalk.addMethod(
unescape('_atId_'),
smalltalk.method({
selector: unescape('atId%3A'),
fn: function (anId){
var self=this;
return smalltalk.send(self, "_read_do_", [anId, (function(){return nil;})]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_read_'),
smalltalk.method({
selector: unescape('read%3A'),
fn: function (anId){
var self=this;
smalltalk.send(self, "_read_do_", [anId, (function(){return nil;})]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_create'),
smalltalk.method({
selector: unescape('create'),
fn: function (){
var self=this;
return smalltalk.send(self, "_createDo_", [(function(){return nil;})]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_reify_'),
smalltalk.method({
selector: unescape('reify%3A'),
fn: function (someJson){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_parse_", [someJson]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_fromJson_'),
smalltalk.method({
selector: unescape('fromJson%3A'),
fn: function (someJson){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_syncFrom_", [someJson]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_fromReified_'),
smalltalk.method({
selector: unescape('fromReified%3A'),
fn: function (aReifiedJSON){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_syncWith_", [aReifiedJSON]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_createdOnFrom_'),
smalltalk.method({
selector: unescape('createdOnFrom%3A'),
fn: function (aReifiedJSON){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_fromString_", [aReifiedJSON]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_manyFromJson_'),
smalltalk.method({
selector: unescape('manyFromJson%3A'),
fn: function (someJson){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.JSON || JSON), "_parse_", [someJson]), "_collect_", [(function(each){return smalltalk.send(self, "_fromReified_", [each]);})]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_createDo_'),
smalltalk.method({
selector: unescape('createDo%3A'),
fn: function (aBlock){
var self=this;
var newInstance=nil;
(newInstance=smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(self, "_path", [])]),smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(newInstance, "_onAfterCreate_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelCreateError || ModelCreateError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not create ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelCreateError || ModelCreateError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not create ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})])])]);
return newInstance;
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_read_do_'),
smalltalk.method({
selector: unescape('read%3Ado%3A'),
fn: function (anId, aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [anId])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("sucess", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRead_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelReadError || ModelReadError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not read ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelReadError || ModelReadError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not read ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})])])]);
return self;}
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_onAfterRead_done_'),
smalltalk.method({
selector: unescape('onAfterRead%3Adone%3A'),
fn: function (someJson, aBlock){
var self=this;
smalltalk.send(self, "_reify_", [someJson]);
smalltalk.send(aBlock, "_value_", [self]);
return self;
return self;}
}),
smalltalk.JsonPersistentModel.klass);


