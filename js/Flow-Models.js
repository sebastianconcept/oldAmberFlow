smalltalk.addPackage('Flow-Models', {});
smalltalk.addClass('Model', smalltalk.Object, ['announcer'], 'Flow-Models');
smalltalk.Model.comment=unescape('Models%20are%20meant%20to%20be%20used%20as%20local-only%20%28at%20the%20DOM%29%20objects%20that%20should%20be%20transident%20in%20nature%20%28not-persistent%29')
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
smalltalk.Model);

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
smalltalk.Model);

smalltalk.addMethod(
unescape('_announce_'),
smalltalk.method({
selector: unescape('announce%3A'),
category: 'actions',
fn: function (anAnnouncement){
var self=this;
smalltalk.send(smalltalk.send(self, "_announcer", []), "_announce_", [anAnnouncement]);
return self;},
args: ["anAnnouncement"],
source: unescape('announce%3A%20anAnnouncement%0A%0A%09self%20announcer%20announce%3A%20anAnnouncement'),
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.Model);

smalltalk.addMethod(
unescape('_on_do_'),
smalltalk.method({
selector: unescape('on%3Ado%3A'),
category: 'actions',
fn: function (anAnnouncementClass, aReactionBlock){
var self=this;
return smalltalk.send(smalltalk.send(self, "_announcer", []), "_on_do_", [anAnnouncementClass, aReactionBlock]);
return self;},
args: ["anAnnouncementClass", "aReactionBlock"],
source: unescape('on%3A%20anAnnouncementClass%20do%3A%20aReactionBlock%0A%0A%09%5E%20self%20announcer%20on%3A%20anAnnouncementClass%20do%3A%20aReactionBlock'),
messageSends: ["on:do:", "announcer"],
referencedClasses: []
}),
smalltalk.Model);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathSt_", [unescape("/flow/commit")]);
smalltalk.send((smalltalk.Package || Package), "_defaultCommitPathJs_", [unescape("/flow/commit")]);
return self;},
args: [],
source: unescape('initialize%0A%0A%09%22Set%20amber%20to%20commit%20using%20the%20Flow%27s%20API%22%0A%09Package%20defaultCommitPathSt%3A%20%27/flow/commit%27.%0A%09Package%20defaultCommitPathJs%3A%20%27/flow/commit%27%0A'),
messageSends: ["defaultCommitPathSt:", "defaultCommitPathJs:"],
referencedClasses: ["Package"]
}),
smalltalk.Model.klass);

smalltalk.addMethod(
unescape('_basePath'),
smalltalk.method({
selector: unescape('basePath'),
category: 'accessing',
fn: function (){
var self=this;
return "api";
return self;},
args: [],
source: unescape('basePath%0A%09%22Answers%20the%20base%20path%20for%20the%20application%27s%20API.%0A%09Subclasses%20should%20override%20if%20appropriate.%22%0A%0A%09%22By%20default%20we%20use%20the%20AmberMP%27s%20default%22%0A%09%5E%20%27api%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Model.klass);

smalltalk.addMethod(
unescape('_path'),
smalltalk.method({
selector: unescape('path'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_basePath", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_modelPath", [])]);
return self;},
args: [],
source: unescape('path%0A%09%5E%20self%20basePath%2C%27/%27%2C%20self%20modelPath'),
messageSends: [unescape("%2C"), "basePath", "modelPath"],
referencedClasses: []
}),
smalltalk.Model.klass);

smalltalk.addMethod(
unescape('_modelPath'),
smalltalk.method({
selector: unescape('modelPath'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self, "_name", []);
return self;},
args: [],
source: unescape('modelPath%0A%09%22Answers%20the%20path%20for%20posting%20instances%20of%20this%20model.%0A%09Subclasses%20should%20override%20if%20appropriate.%22%0A%0A%09%5E%20self%20name'),
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.Model.klass);

smalltalk.addMethod(
unescape('_jsonIgnoreInstanceVariables'),
smalltalk.method({
selector: unescape('jsonIgnoreInstanceVariables'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_jsonIgnoreInstanceVariables", [], smalltalk.Object.klass), "__comma", [["announcer"]]);
return self;},
args: [],
source: unescape('jsonIgnoreInstanceVariables%0A%0A%09%5E%20super%20jsonIgnoreInstanceVariables%2C%20%23%28%27announcer%27%29'),
messageSends: [unescape("%2C"), "jsonIgnoreInstanceVariables"],
referencedClasses: []
}),
smalltalk.Model.klass);


smalltalk.addClass('PersistentModel', smalltalk.Model, ['data'], 'Flow-Models');
smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self['@data'], "_at_put_", [smalltalk.symbolFor("id"), aString]);
return self;},
args: ["aString"],
source: unescape('id%3A%20aString%0A%0A%09data%20at%3A%20%23id%20put%3A%20aString'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@data'], "_at_", [smalltalk.symbolFor("id")]);
return self;},
args: [],
source: unescape('id%0A%0A%09%5E%20data%20at%3A%20%23id%20'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(smalltalk.send(self, "_id", []), "_asString", [])]);
return self;},
args: [],
source: unescape('url%0A%0A%09%5E%20self%20path%2C%27/%27%2Cself%20id%20asString%0A'),
messageSends: [unescape("%2C"), "path", "asString", "id"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_updateDo_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('update%0A%0A%09self%20updateDo%3A%20%5Bnil%5D%0A%0A%0A'),
messageSends: ["updateDo:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_delete'),
smalltalk.method({
selector: unescape('delete'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_deleteDo_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('delete%0A%0A%09self%20deleteDo%3A%5Bnil%5D%0A%0A'),
messageSends: ["deleteDo:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onUpdateFail_'),
smalltalk.method({
selector: unescape('onUpdateFail%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelUpdateError || ModelUpdateError), "_signal_", [smalltalk.send("Could not update ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;},
args: ["x"],
source: unescape('onUpdateFail%3A%20x%0A%0A%09ModelUpdateError%20signal%3A%20%27Could%20not%20update%20%27%2C%20self%20class%20name%09%0A'),
messageSends: ["signal:", unescape("%2C"), "name", "class"],
referencedClasses: ["ModelUpdateError"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onDeleteFail_'),
smalltalk.method({
selector: unescape('onDeleteFail%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelUpdateError || ModelUpdateError), "_signal_", [smalltalk.send("Could not delete ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;},
args: ["x"],
source: unescape('onDeleteFail%3A%20x%0A%0A%09ModelUpdateError%20signal%3A%20%27Could%20not%20delete%20%27%2C%20self%20class%20name%09%0A'),
messageSends: ["signal:", unescape("%2C"), "name", "class"],
referencedClasses: ["ModelUpdateError"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_path'),
smalltalk.method({
selector: unescape('path'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_class", []), "_path", []);
return self;},
args: [],
source: unescape('path%20%0A%0A%09%5E%20self%20class%20path'),
messageSends: ["path", "class"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_syncWith_'),
smalltalk.method({
selector: unescape('syncWith%3A'),
category: 'actions',
fn: function (aReifiedJSON){
var self=this;
(self['@data']=aReifiedJSON);
return self;},
args: ["aReifiedJSON"],
source: unescape('syncWith%3A%20aReifiedJSON%0A%09%22Sync%20the%20current%20values%20in%20this%20model%20%0A%09with%20the%20ones%20coming%20in%20aReifiedJSON.%22%0A%0A%09data%20%3A%3D%20aReifiedJSON'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_refreshDo_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('refresh%0A%09%22Re-read%20this%20model%27s%20state.%22%0A%0A%09self%20refreshDo%3A%5Bnil%5D'),
messageSends: ["refreshDo:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onRefreshFail_'),
smalltalk.method({
selector: unescape('onRefreshFail%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelRefreshError || ModelRefreshError), "_signal_", [smalltalk.send("Could not refresh ", "__comma", [smalltalk.send(smalltalk.send(self, "_class", []), "_name", [])])]);
return self;},
args: ["x"],
source: unescape('onRefreshFail%3A%20x%0A%0A%09ModelRefreshError%20signal%3A%20%27Could%20not%20refresh%20%27%2C%20self%20class%20name%09%0A'),
messageSends: ["signal:", unescape("%2C"), "name", "class"],
referencedClasses: ["ModelRefreshError"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
category: 'actions',
fn: function (){
var self=this;
return smalltalk.send(self, "_saveDo_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('save%0A%09%5E%20self%20saveDo%3A%5Bnil%5D'),
messageSends: ["saveDo:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_syncFrom_'),
smalltalk.method({
selector: unescape('syncFrom%3A'),
category: 'actions',
fn: function (someJson){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [someJson])]);
return self;},
args: ["someJson"],
source: unescape('syncFrom%3A%20someJson%0A%0A%09self%20syncWith%3A%20%28self%20class%20reify%3A%20someJson%29'),
messageSends: ["syncWith:", "reify:", "class"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_createdOn_'),
smalltalk.method({
selector: unescape('createdOn%3A'),
category: 'accessing',
fn: function (aDate){
var self=this;
smalltalk.send(self, "_at_put_", [smalltalk.symbolFor("createdOn"), aDate]);
return self;},
args: ["aDate"],
source: unescape('createdOn%3A%20aDate%0A%0A%09self%20at%3A%20%23createdOn%20put%3A%20aDate'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_createdOn'),
smalltalk.method({
selector: unescape('createdOn'),
category: 'accessing',
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
} catch(e) {if(e.name === 'stReturn' && e.selector === '_createdOn'){return e.fn()} throw(e)}},
args: [],
source: unescape('createdOn%20%0A%0A%09%7C%20selector%20expects%20object%7C%0A%0A%09selector%20%3A%3D%20%23createdOn.%0A%09expects%20%3A%3D%20Date.%0A%0A%09object%20%3A%3D%20self%20at%3A%20selector%20asString.%0A%09object%20ifNil%3A%5B%5Enil%5D.%0A%0A%09%28object%20isKindOf%3A%20expects%29%20ifTrue%3A%5B%5Eobject%5D.%0A%0A%09%5E%20self%20at%3A%20selector%20asString%20put%3A%20%28self%20dateAndTimeAt%3A%20selector%29.'),
messageSends: ["at:", "asString", "ifNil:", "ifTrue:", "isKindOf:", "at:put:", "dateAndTimeAt:"],
referencedClasses: ["Date"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Model);
(self['@data']=new Object());
return self;},
args: [],
source: unescape('initialize%0A%0A%09super%20initialize.%0A%0A%09data%20%3A%3D%20%3Cnew%20Object%28%29%3E'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_asJSONString'),
smalltalk.method({
selector: unescape('asJSONString'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send(self, "_onAboutToJSON", []);
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [self['@data']]);
return self;},
args: [],
source: unescape('asJSONString%0A%0A%09self%20onAboutToJSON.%0A%0A%09%5E%20JSON%20stringify%3A%20data'),
messageSends: ["onAboutToJSON", "stringify:"],
referencedClasses: ["JSON"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_data'),
smalltalk.method({
selector: unescape('data'),
category: 'accessing',
fn: function (){
var self=this;
return self['@data'];
return self;},
args: [],
source: unescape('data%0A%0A%09%5E%20data'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAboutToJSON'),
smalltalk.method({
selector: unescape('onAboutToJSON'),
category: 'reactions',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self['@data'], "_keys", []), "_do_", [(function(key){var value=nil;
(value=smalltalk.send(self['@data'], "_at_", [key]));return ((($receiver = smalltalk.send(value, "_isKindOf_", [(smalltalk.JSObjectProxy || JSObjectProxy)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){((($receiver = smalltalk.send(self, "_respondsTo_", [key])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.ModelGetterIsMissing || ModelGetterIsMissing), "_signal_", [smalltalk.send("Cannot find getter for: ", "__comma", [key])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.ModelGetterIsMissing || ModelGetterIsMissing), "_signal_", [smalltalk.send("Cannot find getter for: ", "__comma", [key])]);})]));(value=smalltalk.send(self, "_perform_", [smalltalk.send(key, "_asSymbol", [])]));smalltalk.send(value, "_onAboutToJSON", []);return smalltalk.send(self['@data'], "_at_put_", [key, value]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){((($receiver = smalltalk.send(self, "_respondsTo_", [key])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.ModelGetterIsMissing || ModelGetterIsMissing), "_signal_", [smalltalk.send("Cannot find getter for: ", "__comma", [key])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.ModelGetterIsMissing || ModelGetterIsMissing), "_signal_", [smalltalk.send("Cannot find getter for: ", "__comma", [key])]);})]));(value=smalltalk.send(self, "_perform_", [smalltalk.send(key, "_asSymbol", [])]));smalltalk.send(value, "_onAboutToJSON", []);return smalltalk.send(self['@data'], "_at_put_", [key, value]);})]));})]);
return self;},
args: [],
source: unescape('onAboutToJSON%0A%09%22This%20model%20is%20about%20to%20be%20stringified%20in%20JSON.%0A%09All%20inst%20var%20values%20that%20are%20expected%20to%20be%20model%20objects%2C%20need%20to%20be%20instanciated%20as%20expected.%22%0A%0A%09data%20keys%20do%3A%5B%3Akey%7C%20%7Cvalue%7C%0A%09%09value%20%3A%3D%20data%20at%3A%20key.%0A%09%09%22Transcript%20cr%3B%20show%3A%20self%20class%20name%2C%27%3E%3EonAboutToJSON%20%20-%3E%20%27%2C%20key%20asString%2C%20%27%20-%3E%20%27%2C%20value%20printString.%22%0A%0A%09%09%22If%20the%20value%20is%20a%20js%20object%20proxy%2C%20we%20assume%20it%27s%20the%20data%20for%20a%20%28composed%29%20flow%20model%2C%20%0A%09%09so%20we%20call%20the%20getter%20in%20this%20receiver%20expecting%20to%20get%20it%20properly%20instantiated%20%28because%20that%27s%20our%20convention%20here%29.%22%0A%09%09%28value%20isKindOf%3A%20JSObjectProxy%29%20ifTrue%3A%5B%0A%09%09%09%28self%20respondsTo%3A%20key%29%20ifFalse%3A%5BModelGetterIsMissing%20signal%3A%20%27Cannot%20find%20getter%20for%3A%20%27%2C%20key%5D.%0A%09%09%09value%20%3A%3D%20self%20perform%3A%20key%20asSymbol.%0A%09%09%09value%20onAboutToJSON.%0A%09%09%09data%20at%3A%20key%20put%3A%20value%5D%5D.'),
messageSends: ["do:", "keys", "at:", "ifTrue:", "isKindOf:", "ifFalse:", "respondsTo:", "signal:", unescape("%2C"), "perform:", "asSymbol", "onAboutToJSON", "at:put:"],
referencedClasses: ["JSObjectProxy", "ModelGetterIsMissing"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterCreate_done_'),
smalltalk.method({
selector: unescape('onAfterCreate%3Adone%3A'),
category: 'reactions',
fn: function (x, aBlock){
var self=this;
(self['@data']=smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x]));
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelCreated || ModelCreated), "_for_", [self])]);
smalltalk.send(aBlock, "_value_", [self]);
return self;},
args: ["x", "aBlock"],
source: unescape('onAfterCreate%3A%20x%20done%3A%20aBlock%0A%0A%09data%20%3A%3D%20self%20class%20reify%3A%20x.%0A%0A%09self%20announce%3A%20%28ModelCreated%20for%3A%20self%29.%0A%09aBlock%20value%3A%20self'),
messageSends: ["reify:", "class", "announce:", "for:", "value:"],
referencedClasses: ["ModelCreated"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_subModelAt_'),
smalltalk.method({
selector: unescape('subModelAt%3A'),
category: 'accessing',
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
} catch(e) {if(e.name === 'stReturn' && e.selector === '_subModelAt_'){return e.fn()} throw(e)}},
args: ["aSelector"],
source: unescape('subModelAt%3A%20aSelector%0A%09%22Answers%20the%20reified%20submodel%20%28instantiating%20if%20necessary%29.%22%0A%09%0A%09%7C%20subModelData%20modelClass%20%7C%0A%0A%09subModelData%20%3A%3D%20data%20at%3A%20aSelector.%0A%09subModelData%20ifNil%3A%5B%5Enil%5D.%0A%09%0A%09modelClass%20%3A%3D%20subModelData%20at%3A%20%27class%27.%0A%09modelClass%20%3A%3D%20Smalltalk%20current%20at%3A%20modelClass.%0A%0A%09modelClass%20ifNil%3A%5B%5EModelMetadataError%20signal%3A%20%27Cannot%20find%20%27%2CaSelector%20asString%2C%27%27%27s%20class%20for%20this%20metadata%27%5D.%0A%09%0A%09%5E%20modelClass%20fromReified%3A%20subModelData'),
messageSends: ["at:", "ifNil:", "current", "signal:", unescape("%2C"), "asString", "fromReified:"],
referencedClasses: ["Smalltalk", "ModelMetadataError"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.send(self['@data'], "_at_", [aKey]);
return self;},
args: ["aKey"],
source: unescape('at%3A%20aKey%0A%0A%09%5E%20data%20at%3A%20aKey'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'accessing',
fn: function (aKey, anObject){
var self=this;
smalltalk.send(self['@data'], "_at_put_", [aKey, anObject]);
return anObject;
return self;},
args: ["aKey", "anObject"],
source: unescape('at%3A%20aKey%20put%3A%20anObject%0A%0A%09data%20at%3A%20aKey%20put%3A%20anObject.%0A%0A%09%5E%20anObject'),
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_dateAndTimeAt_'),
smalltalk.method({
selector: unescape('dateAndTimeAt%3A'),
category: 'accessing',
fn: function (aSelector){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_fromString_", [smalltalk.send(self, "_at_", [aSelector])]);
return self;},
args: ["aSelector"],
source: unescape('dateAndTimeAt%3A%20aSelector%0A%0A%09%5E%20Date%20fromString%3A%20%28self%20at%3A%20aSelector%29'),
messageSends: ["fromString:", "at:"],
referencedClasses: ["Date"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_doesNotUnderstand_'),
smalltalk.method({
selector: unescape('doesNotUnderstand%3A'),
category: 'actions',
fn: function (aMessage){
var self=this;
try{var key=nil;
(key=smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", []));
((($receiver = smalltalk.send(key, "_isUnary", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self['@data'], "_at_", [smalltalk.send(key, "_asString", [])])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return smalltalk.send(self['@data'], "_at_", [smalltalk.send(key, "_asString", [])])}})})();})]));
(function(){throw({name: 'stReturn', selector: '_doesNotUnderstand_', fn: function(){return ((($receiver = smalltalk.send(smalltalk.send(key, "_isKeyword", []), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(key, "_asString", []), "_occurrencesOf_", [":"]), "__eq", [(1)]);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(key=smalltalk.send(key, "_allButLast", []));return smalltalk.send(self['@data'], "_at_put_", [smalltalk.send(key, "_asString", []), smalltalk.send(smalltalk.send(aMessage, "_arguments", []), "_first", [])]);})() : (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Model);})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){(key=smalltalk.send(key, "_allButLast", []));return smalltalk.send(self['@data'], "_at_put_", [smalltalk.send(key, "_asString", []), smalltalk.send(smalltalk.send(aMessage, "_arguments", []), "_first", [])]);}), (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Model);})]))}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_doesNotUnderstand_'){return e.fn()} throw(e)}},
args: ["aMessage"],
source: unescape('doesNotUnderstand%3A%20aMessage%0A%09%22The%20idea%20behind%20this%20DNU%20is%20to%20use%20the%20selector%20as%20setters%20or%20getter%20%0A%09delegating%20to%20data%20%28aJsonObject%29%22%0A%09%0A%09%7C%20key%20%7C%0A%0A%0A%09key%20%3A%3D%20aMessage%20selector%20asSymbol.%0A%0A%09key%20isUnary%20ifTrue%3A%20%5B%0A%09%09%5E%20data%20at%3A%20key%20asString%5D.%0A%0A%09%5E%20%28key%20isKeyword%20and%3A%20%5B%0A%09%28key%20asString%20occurrencesOf%3A%20%27%3A%27%29%20%3D%201%5D%29%0A%09%09ifTrue%3A%20%5Bkey%20%3A%3D%20key%20allButLast.%0A%09%09%09%09data%20at%3A%20key%20asString%20put%3A%20aMessage%20arguments%20first%5D%0A%09%09ifFalse%3A%20%5Bsuper%20doesNotUnderstand%3A%20aMessage%5D'),
messageSends: ["asSymbol", "selector", "ifTrue:", "isUnary", "at:", "asString", "ifTrue:ifFalse:", "and:", "isKeyword", unescape("%3D"), "occurrencesOf:", "allButLast", "at:put:", "first", "arguments", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_deleteDo_'),
smalltalk.method({
selector: unescape('deleteDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(smalltalk.send(self, "_id", []), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["DELETE"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterDelete_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})])])]);
return self;},
args: ["aBlock"],
source: unescape('deleteDo%3A%20aBlock%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cself%20id%20asString%29.%0A%09%09%27type%27%20-%3E%20%27DELETE%27.%0A%09%09%27data%27%20-%3E%20self%20asJSONString.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterDelete%3A%20x%20done%3A%20aBlock%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onDeleteFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onDeleteFail%3A%20x%5D%7D%20%20%0A%0A'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "id", "asJSONString", "onAfterDelete:done:", "onDeleteFail:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_refreshDo_'),
smalltalk.method({
selector: unescape('refreshDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(smalltalk.send(self, "_id", []), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRefresh_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefeshFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefreshFail_", [x]);})])])]);
return self;},
args: ["aBlock"],
source: unescape('refreshDo%3A%20aBlock%0A%09%22Re-read%20this%20model%27s%20state.%22%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cself%20id%20asString%29.%0A%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterRefresh%3A%20x%20done%3A%20aBlock%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onRefeshFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onRefreshFail%3A%20x%5D%7D%09%09'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "id", "onAfterRefresh:done:", "onRefeshFail:", "onRefreshFail:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_saveDo_'),
smalltalk.method({
selector: unescape('saveDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
return smalltalk.send(self, "_updateDo_", [aBlock]);
return self;},
args: ["aBlock"],
source: unescape('saveDo%3A%20aBlock%0A%09%5E%20self%20updateDo%3A%20aBlock'),
messageSends: ["updateDo:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_updateDo_'),
smalltalk.method({
selector: unescape('updateDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(smalltalk.send(self, "_id", []), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterUpdate_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})])])]);
return self;},
args: ["aBlock"],
source: unescape('updateDo%3A%20aBlock%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cself%20id%20asString%29.%0A%09%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%27data%27%20-%3E%20self%20asJSONString.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterUpdate%3A%20x%20done%3A%20aBlock%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onUpdateFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onUpdateFail%3A%20x%5D%7D%20%20%0A%0A%0A'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "id", "asJSONString", "onAfterUpdate:done:", "onUpdateFail:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterRefresh_done_'),
smalltalk.method({
selector: unescape('onAfterRefresh%3Adone%3A'),
category: 'reactions',
fn: function (x, aBlock){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x])]);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelRefreshed || ModelRefreshed), "_for_", [self])]);
smalltalk.send(aBlock, "_value_", [self]);
return self;},
args: ["x", "aBlock"],
source: unescape('onAfterRefresh%3A%20x%20done%3A%20aBlock%0A%0A%09self%20syncWith%3A%20%28self%20class%20reify%3A%20x%29.%0A%09self%20announce%3A%20%28ModelRefreshed%20for%3A%20self%29.%0A%09aBlock%20value%3A%20self%0A'),
messageSends: ["syncWith:", "reify:", "class", "announce:", "for:", "value:"],
referencedClasses: ["ModelRefreshed"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterDelete_done_'),
smalltalk.method({
selector: unescape('onAfterDelete%3Adone%3A'),
category: 'reactions',
fn: function (x, aBlock){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelDeleted || ModelDeleted), "_for_", [self])]);
smalltalk.send(aBlock, "_value_", [self]);
return self;},
args: ["x", "aBlock"],
source: unescape('onAfterDelete%3A%20x%20done%3A%20aBlock%0A%09%0A%09self%20announce%3A%20%28ModelDeleted%20for%3A%20self%29.%0A%0A%09aBlock%20value%3A%20self%0A'),
messageSends: ["announce:", "for:", "value:"],
referencedClasses: ["ModelDeleted"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterUpdate_done_'),
smalltalk.method({
selector: unescape('onAfterUpdate%3Adone%3A'),
category: 'reactions',
fn: function (x, aBlock){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelUpdated || ModelUpdated), "_for_", [self])]);
smalltalk.send(aBlock, "_value_", [self]);
return self;},
args: ["x", "aBlock"],
source: unescape('onAfterUpdate%3A%20x%20done%3A%20aBlock%0A%09%0A%09self%20announce%3A%20%28ModelUpdated%20for%3A%20self%29.%0A%0A%09aBlock%20value%3A%20self'),
messageSends: ["announce:", "for:", "value:"],
referencedClasses: ["ModelUpdated"]
}),
smalltalk.PersistentModel);


smalltalk.addMethod(
unescape('_atId_'),
smalltalk.method({
selector: unescape('atId%3A'),
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.send(self, "_read_do_", [anId, (function(){return nil;})]);
return self;},
args: ["anId"],
source: unescape('atId%3A%20anId%0A%09%22Answers%20the%20instance%20of%20this%20model%20found%20at%20anId%20%28or%20nil%29%22%0A%20%0A%09%5E%20self%20read%3A%20anId%20do%3A%20%5Bnil%5D%0A'),
messageSends: ["read:do:"],
referencedClasses: []
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_read_'),
smalltalk.method({
selector: unescape('read%3A'),
category: 'actions',
fn: function (anId){
var self=this;
smalltalk.send(self, "_read_do_", [anId, (function(){return nil;})]);
return self;},
args: ["anId"],
source: unescape('read%3A%20anId%0A%0A%09self%20read%3A%20anId%20do%3A%20%5Bnil%5D'),
messageSends: ["read:do:"],
referencedClasses: []
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_create'),
smalltalk.method({
selector: unescape('create'),
category: 'actions',
fn: function (){
var self=this;
return smalltalk.send(self, "_createDo_", [(function(){return nil;})]);
return self;},
args: [],
source: unescape('create%0A%0A%09%5E%20self%20createDo%3A%20%5Bnil%5D'),
messageSends: ["createDo:"],
referencedClasses: []
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_reify_'),
smalltalk.method({
selector: unescape('reify%3A'),
category: 'actions',
fn: function (someJson){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_parse_", [someJson]);
return self;},
args: ["someJson"],
source: unescape('reify%3A%20someJson%0A%09%22Returns%20a%20simple%20javascript%20object%20with%0A%09the%20attributes%20meant%20for%20the%20matching%20instance%20variable%20content%20of%20this%20model.%22%0A%0A%09%5E%20JSON%20parse%3A%20someJson'),
messageSends: ["parse:"],
referencedClasses: ["JSON"]
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_fromJson_'),
smalltalk.method({
selector: unescape('fromJson%3A'),
category: 'actions',
fn: function (someJson){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_syncFrom_", [someJson]);
return self;},
args: ["someJson"],
source: unescape('fromJson%3A%20someJson%0A%09%22Answers%20a%20new%20instance%20of%20this%20model%20and%20returns%20it%0A%09in%20the%20state%20dictated%20by%20someJson.%22%0A%0A%09%5E%20self%20new%20syncFrom%3A%20someJson'),
messageSends: ["syncFrom:", "new"],
referencedClasses: []
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_fromReified_'),
smalltalk.method({
selector: unescape('fromReified%3A'),
category: 'actions',
fn: function (aReifiedJSON){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_syncWith_", [aReifiedJSON]);
return self;},
args: ["aReifiedJSON"],
source: unescape('%20fromReified%3A%20aReifiedJSON%0A%09%22Answers%20a%20new%20instance%20of%20this%20model%20and%20returns%20it%0A%09in%20sync%20with%20aReifiedJSON.%22%0A%0A%09%5E%20self%20new%20syncWith%3A%20aReifiedJSON'),
messageSends: ["syncWith:", "new"],
referencedClasses: []
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_createdOnFrom_'),
smalltalk.method({
selector: unescape('createdOnFrom%3A'),
category: 'actions',
fn: function (aReifiedJSON){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_fromString_", [aReifiedJSON]);
return self;},
args: ["aReifiedJSON"],
source: unescape('createdOnFrom%3A%20aReifiedJSON%0A%0A%09%5E%20Date%20fromString%3A%20aReifiedJSON'),
messageSends: ["fromString:"],
referencedClasses: ["Date"]
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_manyFromJson_'),
smalltalk.method({
selector: unescape('manyFromJson%3A'),
category: 'actions',
fn: function (someJson){
var self=this;
return smalltalk.send(smalltalk.send((smalltalk.JSON || JSON), "_parse_", [someJson]), "_collect_", [(function(each){return smalltalk.send(self, "_fromReified_", [each]);})]);
return self;},
args: ["someJson"],
source: unescape('manyFromJson%3A%20someJson%0A%0A%09%5E%20%28JSON%20parse%3A%20someJson%29%20collect%3A%5B%3Aeach%7C%0A%09%09%20self%20fromReified%3A%20each%20%5D'),
messageSends: ["collect:", "parse:", "fromReified:"],
referencedClasses: ["JSON"]
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_createDo_'),
smalltalk.method({
selector: unescape('createDo%3A'),
category: 'actions',
fn: function (aBlock){
var self=this;
var newInstance=nil;
(newInstance=smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(self, "_path", [])]),smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(newInstance, "_onAfterCreate_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelCreateError || ModelCreateError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not create ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelCreateError || ModelCreateError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not create ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})])])]);
return newInstance;
return self;},
args: ["aBlock"],
source: unescape('createDo%3A%20aBlock%0A%0A%09%7C%20newInstance%20%7C%0A%0A%09newInstance%20%3A%3D%20self%20basicNew%20initialize.%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20self%20path.%0A%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20newInstance%20onAfterCreate%3A%20x%20done%3A%20aBlock%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20ModelCreateError%20signal%3A%20%27Could%20not%20create%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20ModelCreateError%20signal%3A%20%27Could%20not%20create%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%5D%7D.%0A%0A%09%5E%20newInstance%0A'),
messageSends: ["initialize", "basicNew", "ajax:", unescape("-%3E"), "path", "onAfterCreate:done:", "signal:", unescape("%2C"), "name", "responseText"],
referencedClasses: ["ModelCreateError"]
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_read_do_'),
smalltalk.method({
selector: unescape('read%3Ado%3A'),
category: 'actions',
fn: function (anId, aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [anId])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("sucess", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRead_done_", [x, aBlock]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelReadError || ModelReadError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not read ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelReadError || ModelReadError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not read ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})])])]);
return self;},
args: ["anId", "aBlock"],
source: unescape('read%3A%20anId%20do%3A%20aBlock%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2CanId%29.%0A%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%27sucess%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterRead%3A%20x%20done%3A%20aBlock%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20ModelReadError%20signal%3A%20%27Could%20not%20read%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20ModelReadError%20signal%3A%20%27Could%20not%20read%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%5D%7D'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "onAfterRead:done:", "signal:", "name", "responseText"],
referencedClasses: ["ModelReadError"]
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_onAfterRead_done_'),
smalltalk.method({
selector: unescape('onAfterRead%3Adone%3A'),
category: 'reactions',
fn: function (someJson, aBlock){
var self=this;
smalltalk.send(self, "_reify_", [someJson]);
smalltalk.send(aBlock, "_value_", [self]);
return self;
return self;},
args: ["someJson", "aBlock"],
source: unescape('onAfterRead%3A%20someJson%20done%3A%20aBlock%0A%0A%09self%20reify%3A%20someJson.%0A%09aBlock%20value%3A%20self.%0A%09%5E%20self'),
messageSends: ["reify:", "value:"],
referencedClasses: []
}),
smalltalk.PersistentModel.klass);


smalltalk.addClass('JsonModel', smalltalk.Model, ['data'], 'Flow-Models');


