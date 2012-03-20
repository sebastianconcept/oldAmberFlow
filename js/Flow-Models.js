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


smalltalk.addClass('PersistentModel', smalltalk.Model, ['id', 'createdOn'], 'Flow-Models');
smalltalk.PersistentModel.comment=unescape('PersistentModels%20are%20objects%20that%20are%20manipulable%20here%20but%20they%27re%20also%20stored%20server%20side.')
smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@id']=aString);
return self;},
args: ["aString"],
source: unescape('id%3A%20aString%0A%0A%09id%20%3A%3D%20aString'),
messageSends: [],
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
return self['@id'];
return self;},
args: [],
source: unescape('id%0A%0A%09%5E%20id%20'),
messageSends: [],
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
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self['@id'], "_asString", [])]);
return self;},
args: [],
source: unescape('url%0A%0A%09%5E%20self%20path%2C%27/%27%2Cid%20asString%0A'),
messageSends: [unescape("%2C"), "path", "asString"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterCreate_'),
smalltalk.method({
selector: unescape('onAfterCreate%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x])]);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelCreated || ModelCreated), "_for_", [self])]);
return self;},
args: ["x"],
source: unescape('onAfterCreate%3A%20x%0A%0A%09self%20syncWith%3A%20%28self%20class%20reify%3A%20x%29.%0A%09self%20announce%3A%20%28ModelCreated%20for%3A%20self%29%0A'),
messageSends: ["syncWith:", "reify:", "class", "announce:", "for:"],
referencedClasses: ["ModelCreated"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self['@id'], "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterUpdate_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})])])]);
return self;},
args: [],
source: unescape('update%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cid%20asString%29.%0A%09%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%27data%27%20-%3E%20self%20asJSONString.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterUpdate%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onUpdateFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onUpdateFail%3A%20x%5D%7D%20%20%0A%0A%0A'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "asJSONString", "onAfterUpdate:", "onUpdateFail:"],
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
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self['@id'], "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["DELETE"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterDelete_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})])])]);
return self;},
args: [],
source: unescape('delete%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cid%20asString%29.%0A%09%09%27type%27%20-%3E%20%27DELETE%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterDelete%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onDeleteFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onDeleteFail%3A%20x%5D%7D%20%20%0A%0A'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "onAfterDelete:", "onDeleteFail:"],
referencedClasses: []
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_onAfterUpdate_'),
smalltalk.method({
selector: unescape('onAfterUpdate%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelUpdated || ModelUpdated), "_for_", [self])]);
return self;},
args: ["x"],
source: unescape('onAfterUpdate%3A%20x%0A%09%0A%09self%20announce%3A%20%28ModelUpdated%20for%3A%20self%29%0A'),
messageSends: ["announce:", "for:"],
referencedClasses: ["ModelUpdated"]
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
unescape('_onAfterDelete_'),
smalltalk.method({
selector: unescape('onAfterDelete%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelDeleted || ModelDeleted), "_for_", [self])]);
return self;},
args: ["x"],
source: unescape('onAfterDelete%3A%20x%0A%09%0A%09self%20announce%3A%20%28ModelDeleted%20for%3A%20self%29%0A%20'),
messageSends: ["announce:", "for:"],
referencedClasses: ["ModelDeleted"]
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
try{var instVarsToSync=nil;
var reifierMethod=nil;
(($receiver = aReifiedJSON) == nil || $receiver == undefined) ? (function(){return (function(){throw({name: 'stReturn', selector: '_syncWith_', fn: function(){return nil}})})();})() : $receiver;
(instVarsToSync=smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_allInstanceVariableNames", []), "_reject_", [(function(e){return smalltalk.send(smalltalk.send(smalltalk.send(self, "_class", []), "_jsonIgnoreInstanceVariables", []), "_includes_", [e]);})]));
smalltalk.send(instVarsToSync, "_do_", [(function(instVarName){var value=nil;
(value=smalltalk.send(aReifiedJSON, "_at_", [instVarName]));(reifierMethod=smalltalk.send(instVarName, "__comma", ["From:"]));((($receiver = smalltalk.send(smalltalk.send(self, "_class", []), "_respondsTo_", [reifierMethod])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (value=smalltalk.send(smalltalk.send(self, "_class", []), "_perform_withArguments_", [reifierMethod, smalltalk.send((smalltalk.Array || Array), "_with_", [value])]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (value=smalltalk.send(smalltalk.send(self, "_class", []), "_perform_withArguments_", [reifierMethod, smalltalk.send((smalltalk.Array || Array), "_with_", [value])]));})]));((($receiver = smalltalk.send(value, "_isKindOf_", [(smalltalk.JSObjectProxy || JSObjectProxy)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (value=smalltalk.send(smalltalk.send(self, "_class", []), "_reify_from_", [instVarName, value]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (value=smalltalk.send(smalltalk.send(self, "_class", []), "_reify_from_", [instVarName, value]));})]));((($receiver = smalltalk.send(smalltalk.send(value, "_isKindOf_", [(smalltalk.Collection || Collection)]), "_and_", [(function(){return smalltalk.send(smalltalk.send(value, "_isKindOf_", [(smalltalk.CharacterArray || CharacterArray)]), "_not", []);})])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (value=smalltalk.send(value, "_collect_", [(function(each){return smalltalk.send(smalltalk.send(self, "_class", []), "_reifyElementsOn_from_", [instVarName, each]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (value=smalltalk.send(value, "_collect_", [(function(each){return smalltalk.send(smalltalk.send(self, "_class", []), "_reifyElementsOn_from_", [instVarName, each]);})]));})]));return smalltalk.send(self, "_instVarAt_put_", [instVarName, value]);})]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_syncWith_'){return e.fn()} throw(e)}},
args: ["aReifiedJSON"],
source: unescape('syncWith%3A%20aReifiedJSON%0A%09%22Sync%20the%20current%20values%20in%20this%20model%20%0A%09with%20the%20ones%20coming%20in%20aReifiedJSON.%22%0A%09%7C%20instVarsToSync%20reifierMethod%20%7C%0A%0A%09aReifiedJSON%20ifNil%3A%5B%5Enil%5D.%0A%0A%09instVarsToSync%20%3A%3D%20self%20class%20allInstanceVariableNames%20reject%3A%5B%3Ae%7C%20self%20class%20jsonIgnoreInstanceVariables%20includes%3A%20e%5D.%0A%09instVarsToSync%20do%3A%5B%3AinstVarName%7C%20%7Cvalue%7C%0A%09%09value%20%3A%3D%20aReifiedJSON%20at%3A%20instVarName.%0A%09%09reifierMethod%20%3A%3D%20instVarName%2C%27From%3A%27.%0A%0A%09%09%22If%20there%20is%20a%20reifier%20method%20for%20that%20instVar%2C%20then%20it%20should%20be%20used%22%0A%09%09%28self%20class%20respondsTo%3A%20reifierMethod%29%20ifTrue%3A%5B%0A%09%09%09value%20%3A%3D%20self%20class%20perform%3A%20reifierMethod%20withArguments%3A%20%28Array%20with%3A%20value%29%5D.%0A%0A%09%09%22If%20the%20reified%20value%20looks%20like%20a%20model%2C%20we%20compose%20it.%22%0A%09%09%28value%20isKindOf%3A%20JSObjectProxy%29%20ifTrue%3A%5B%0A%09%09%09value%20%3A%3D%20self%20class%20reify%3A%20instVarName%20from%3A%20value%5D.%0A%0A%09%09%22If%20the%20reified%20value%20is%20a%20collection%2C%20we%20collect%20its%20reified%20elements.%22%0A%09%09%28%28value%20isKindOf%3A%20Collection%29%20and%3A%5B%0A%09%09%28value%20isKindOf%3A%20CharacterArray%29%20not%5D%29%20ifTrue%3A%5B%0A%09%09%09value%20%3A%3D%20value%20collect%3A%5B%3Aeach%7C%20self%20class%20reifyElementsOn%3A%20instVarName%20from%3A%20each%5D%5D.%0A%0A%09%09self%20%0A%09%09%09instVarAt%3A%20instVarName%20%0A%09%09%09put%3A%20value%5D.%0A'),
messageSends: ["ifNil:", "reject:", "allInstanceVariableNames", "class", "includes:", "jsonIgnoreInstanceVariables", "do:", "at:", unescape("%2C"), "ifTrue:", "respondsTo:", "perform:withArguments:", "with:", "isKindOf:", "reify:from:", "and:", "not", "collect:", "reifyElementsOn:from:", "instVarAt:put:"],
referencedClasses: ["Array", "JSObjectProxy", "Collection", "CharacterArray"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self['@id'], "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRefresh_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefeshFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefreshFail_", [x]);})])])]);
return self;},
args: [],
source: unescape('refresh%0A%09%22Re-read%20this%20model%27s%20state.%22%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cid%20asString%29.%0A%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterRefresh%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onRefeshFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onRefreshFail%3A%20x%5D%7D%09%09'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "onAfterRefresh:", "onRefeshFail:", "onRefreshFail:"],
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
unescape('_onAfterRefresh_'),
smalltalk.method({
selector: unescape('onAfterRefresh%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x])]);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelRefreshed || ModelRefreshed), "_for_", [self])]);
return self;},
args: ["x"],
source: unescape('onAfterRefresh%3A%20x%0A%0A%09self%20syncWith%3A%20%28self%20class%20reify%3A%20x%29.%0A%09self%20announce%3A%20%28ModelRefreshed%20for%3A%20self%29%0A'),
messageSends: ["syncWith:", "reify:", "class", "announce:", "for:"],
referencedClasses: ["ModelRefreshed"]
}),
smalltalk.PersistentModel);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
category: 'actions',
fn: function (){
var self=this;
return smalltalk.send(self, "_update", []);
return self;},
args: [],
source: unescape('save%0A%09%5E%20self%20update'),
messageSends: ["update"],
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
(self['@createdOn']=aDate);
return self;},
args: ["aDate"],
source: unescape('createdOn%3A%20aDate%0A%0A%09createdOn%20%3A%3D%20aDate'),
messageSends: [],
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
return self['@createdOn'];
return self;},
args: [],
source: unescape('createdOn%0A%0A%09%5E%20createdOn'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PersistentModel);


smalltalk.addMethod(
unescape('_atId_'),
smalltalk.method({
selector: unescape('atId%3A'),
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.send(self, "_read_", [anId]);
return self;},
args: ["anId"],
source: unescape('atId%3A%20anId%0A%09%22Answers%20the%20instance%20of%20this%20model%20found%20at%20anId%20%28or%20nil%29%22%0A%20%0A%09%5E%20self%20read%3A%20anId%0A'),
messageSends: ["read:"],
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
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [anId])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("sucess", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRead_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onReadFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onReadFail_", [x]);})])])]);
return self;},
args: ["anId"],
source: unescape('read%3A%20anId%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2CanId%29.%0A%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%27sucess%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterRead%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onReadFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onReadFail%3A%20x%5D%7D'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "onAfterRead:", "onReadFail:"],
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
var newInstance=nil;
(newInstance=smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(self, "_path", [])]),smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(newInstance, "_onAfterCreate_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onCreateFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onCreateFail_", [x]);})])])]);
return newInstance;
return self;},
args: [],
source: unescape('create%0A%0A%09%7C%20newInstance%20%7C%0A%0A%09newInstance%20%3A%3D%20self%20basicNew%20initialize.%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20self%20path.%0A%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20newInstance%20onAfterCreate%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onCreateFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onCreateFail%3A%20x%5D%7D.%0A%0A%09%5E%20newInstance%0A'),
messageSends: ["initialize", "basicNew", "ajax:", unescape("-%3E"), "path", "onAfterCreate:", "onCreateFail:"],
referencedClasses: []
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_onCreateFail_'),
smalltalk.method({
selector: unescape('onCreateFail%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelCreateError || ModelCreateError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not create ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);
return self;},
args: ["x"],
source: unescape('onCreateFail%3A%20x%0A%0A%09ModelCreateError%20signal%3A%20%27Could%20not%20create%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%0A'),
messageSends: ["signal:", unescape("%2C"), "name", "responseText"],
referencedClasses: ["ModelCreateError"]
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_onReadFail_'),
smalltalk.method({
selector: unescape('onReadFail%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send((smalltalk.ModelReadError || ModelReadError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not read ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);
return self;},
args: ["x"],
source: unescape('onReadFail%3A%20x%0A%0A%09ModelReadError%20signal%3A%20%27Could%20not%20read%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%0A'),
messageSends: ["signal:", unescape("%2C"), "name", "responseText"],
referencedClasses: ["ModelReadError"]
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_onAfterRead_'),
smalltalk.method({
selector: unescape('onAfterRead%3A'),
category: 'reactions',
fn: function (x){
var self=this;
return smalltalk.send(self, "_reify_", [x]);
return self;},
args: ["x"],
source: unescape('onAfterRead%3A%20x%0A%0A%09%5E%20self%20reify%3A%20x'),
messageSends: ["reify:"],
referencedClasses: []
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_reify_'),
smalltalk.method({
selector: unescape('reify%3A'),
category: 'actions',
fn: function (aJSONString){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_parse_", [aJSONString]);
return self;},
args: ["aJSONString"],
source: unescape('reify%3A%20aJSONString%0A%09%22Returns%20a%20simple%20javascript%20object%20with%0A%09the%20attributes%20meant%20for%20the%20matching%20instance%20%0A%09of%20this%20model.%22%0A%0A%09%5E%20JSON%20parse%3A%20aJSONString'),
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
unescape('_reify_from_'),
smalltalk.method({
selector: unescape('reify%3Afrom%3A'),
category: 'actions',
fn: function (instVarName, aReifiedJSON){
var self=this;
var reifierMethod=nil;
(reifierMethod=smalltalk.send(instVarName, "__comma", ["From:"]));
((($receiver = smalltalk.send(self, "_respondsTo_", [reifierMethod])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.MissingInstanceVariableReifier || MissingInstanceVariableReifier), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Please implement: ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%20class%3E%3E")]), "__comma", [reifierMethod]), "__comma", [" to properly reify that instance variable"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.MissingInstanceVariableReifier || MissingInstanceVariableReifier), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Please implement: ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%20class%3E%3E")]), "__comma", [reifierMethod]), "__comma", [" to properly reify that instance variable"])]);})]));
return smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(reifierMethod, "_asSymbol", []), smalltalk.send((smalltalk.Array || Array), "_with_", [aReifiedJSON])]);
return self;},
args: ["instVarName", "aReifiedJSON"],
source: unescape('%20reify%3A%20instVarName%20from%3A%20aReifiedJSON%0A%09%22Makes%20this%20class%20to%20answer%20a%20reified%20instance%20of%20its%20expected%20value%20at%20its%20instVar%20named%0A%09instVarName.%20All%20that%20based%20on%20aReifiedJSON.%0A%09Note%3A%20in%20order%20to%20work%2C%20this%20assumes%20you%20have%20implemented%20%28in%20the%20class%0A%09side%29%20methods%20looking%20like%20%5BvarName%5DFrom%3A%20%0A%09Example%3A%20%20User%20class%3E%3EpersonFrom%3A%20%0A%09that%20should%20return%20an%20Amber%27s%20first%20class%20citizen%20aPerson%20object.%22%0A%0A%09%7C%20reifierMethod%20%7C%0A%0A%09reifierMethod%20%3A%3D%20instVarName%2C%27From%3A%27.%0A%0A%09%28self%20respondsTo%3A%20reifierMethod%29%20ifFalse%3A%5B%0A%09%09MissingInstanceVariableReifier%20signal%3A%20%27Please%20implement%3A%20%27%2C%20self%20name%2C%27%20class%3E%3E%27%2C%20reifierMethod%2C%20%27%20to%20properly%20reify%20that%20instance%20variable%27.%5D.%0A%0A%09%5E%20self%20perform%3A%20reifierMethod%20asSymbol%20withArguments%3A%20%28Array%20with%3A%20aReifiedJSON%29'),
messageSends: [unescape("%2C"), "ifFalse:", "respondsTo:", "signal:", "name", "perform:withArguments:", "asSymbol", "with:"],
referencedClasses: ["MissingInstanceVariableReifier", "Array"]
}),
smalltalk.PersistentModel.klass);

smalltalk.addMethod(
unescape('_reifyElementsOn_from_'),
smalltalk.method({
selector: unescape('reifyElementsOn%3Afrom%3A'),
category: 'actions',
fn: function (instVarName, aReifiedJSON){
var self=this;
var reifierMethod=nil;
(reifierMethod=smalltalk.send(smalltalk.send("oneOf", "__comma", [smalltalk.send(instVarName, "_capitalized", [])]), "__comma", ["From:"]));
((($receiver = smalltalk.send(self, "_respondsTo_", [reifierMethod])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.MissingInstanceVariableReifier || MissingInstanceVariableReifier), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Please implement: ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%20class%3E%3E")]), "__comma", [reifierMethod]), "__comma", [" to properly reify that instance variable"])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.MissingInstanceVariableReifier || MissingInstanceVariableReifier), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("Please implement: ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [unescape("%20class%3E%3E")]), "__comma", [reifierMethod]), "__comma", [" to properly reify that instance variable"])]);})]));
return smalltalk.send(self, "_perform_withArguments_", [smalltalk.send(reifierMethod, "_asSymbol", []), smalltalk.send((smalltalk.Array || Array), "_with_", [aReifiedJSON])]);
return self;},
args: ["instVarName", "aReifiedJSON"],
source: unescape('reifyElementsOn%3A%20instVarName%20from%3A%20aReifiedJSON%0A%20%09%22Makes%20this%20class%20to%20answer%20a%20reified%20instance%2C%20one%20of%20the%20collection%20of%20elements%20stored%20at%20instVarName.%20%0A%09The%20source%20for%20that%20is%20aReifiedJSON.%0A%09Note%3A%20in%20order%20to%20work%2C%20this%20assumes%20you%20have%20implemented%20%28in%20the%20class%0A%09side%29%20methods%20looking%20like%20oneOf%5BvarName%5DFrom%3A%20%0A%09Example%3A%20%20ToDoList%20class%3E%3EoneOfToDosFrom%3A%20%0A%09that%20should%20return%20an%20Amber%27s%20first%20class%20citizen%20aToDo%20object.%22%0A%0A%09%7C%20reifierMethod%20%7C%0A%0A%09reifierMethod%20%3A%3D%20%27oneOf%27%2CinstVarName%20capitalized%2C%27From%3A%27.%0A%09%28self%20respondsTo%3A%20reifierMethod%29%20ifFalse%3A%5B%0A%09%09MissingInstanceVariableReifier%20signal%3A%20%27Please%20implement%3A%20%27%2C%20self%20name%2C%27%20class%3E%3E%27%2C%20reifierMethod%2C%20%27%20to%20properly%20reify%20that%20instance%20variable%27.%5D.%0A%0A%09%5E%20self%20perform%3A%20reifierMethod%20asSymbol%20withArguments%3A%20%28Array%20with%3A%20aReifiedJSON%29'),
messageSends: [unescape("%2C"), "capitalized", "ifFalse:", "respondsTo:", "signal:", "name", "perform:withArguments:", "asSymbol", "with:"],
referencedClasses: ["MissingInstanceVariableReifier", "Array"]
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


smalltalk.addClass('JsonPersistentModel', smalltalk.Model, ['data'], 'Flow-Models');
smalltalk.addMethod(
unescape('_id_'),
smalltalk.method({
selector: unescape('id%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
smalltalk.send(self['@data'], "_id_", [aString]);
return self;},
args: ["aString"],
source: unescape('id%3A%20aString%0A%0A%09data%20id%3A%20aString'),
messageSends: ["id:"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_id'),
smalltalk.method({
selector: unescape('id'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(self['@data'], "_id", []);
return self;},
args: [],
source: unescape('id%0A%0A%09%5E%20data%20id%20'),
messageSends: ["id"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send((typeof id == 'undefined' ? nil : id), "_asString", [])]);
return self;},
args: [],
source: unescape('url%0A%0A%09%5E%20self%20path%2C%27/%27%2Cid%20asString%0A'),
messageSends: [unescape("%2C"), "path", "asString"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAfterCreate_'),
smalltalk.method({
selector: unescape('onAfterCreate%3A'),
category: 'reactions',
fn: function (x){
var self=this;
(self['@data']=smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x]));
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelCreated || ModelCreated), "_for_", [self])]);
return self;},
args: ["x"],
source: unescape('onAfterCreate%3A%20x%0A%0A%09data%20%3A%3D%20self%20class%20reify%3A%20x.%0A%0A%09self%20announce%3A%20%28ModelCreated%20for%3A%20self%29%0A'),
messageSends: ["reify:", "class", "announce:", "for:"],
referencedClasses: ["ModelCreated"]
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_update'),
smalltalk.method({
selector: unescape('update'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send((typeof id == 'undefined' ? nil : id), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [smalltalk.send(self, "_asJSONString", [])]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterUpdate_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onUpdateFail_", [x]);})])])]);
return self;},
args: [],
source: unescape('update%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cid%20asString%29.%0A%09%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%27data%27%20-%3E%20self%20asJSONString.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterUpdate%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onUpdateFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onUpdateFail%3A%20x%5D%7D%20%20%0A%0A%0A'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "asJSONString", "onAfterUpdate:", "onUpdateFail:"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_delete'),
smalltalk.method({
selector: unescape('delete'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send((typeof id == 'undefined' ? nil : id), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["DELETE"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterDelete_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onDeleteFail_", [x]);})])])]);
return self;},
args: [],
source: unescape('delete%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cid%20asString%29.%0A%09%09%27type%27%20-%3E%20%27DELETE%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterDelete%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onDeleteFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onDeleteFail%3A%20x%5D%7D%20%20%0A%0A'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "onAfterDelete:", "onDeleteFail:"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAfterUpdate_'),
smalltalk.method({
selector: unescape('onAfterUpdate%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelUpdated || ModelUpdated), "_for_", [self])]);
return self;},
args: ["x"],
source: unescape('onAfterUpdate%3A%20x%0A%09%0A%09self%20announce%3A%20%28ModelUpdated%20for%3A%20self%29%0A'),
messageSends: ["announce:", "for:"],
referencedClasses: ["ModelUpdated"]
}),
smalltalk.JsonPersistentModel);

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
smalltalk.JsonPersistentModel);

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
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAfterDelete_'),
smalltalk.method({
selector: unescape('onAfterDelete%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelDeleted || ModelDeleted), "_for_", [self])]);
return self;},
args: ["x"],
source: unescape('onAfterDelete%3A%20x%0A%09%0A%09self%20announce%3A%20%28ModelDeleted%20for%3A%20self%29%0A%20'),
messageSends: ["announce:", "for:"],
referencedClasses: ["ModelDeleted"]
}),
smalltalk.JsonPersistentModel);

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
smalltalk.JsonPersistentModel);

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
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_refresh'),
smalltalk.method({
selector: unescape('refresh'),
category: 'actions',
fn: function (){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send((typeof id == 'undefined' ? nil : id), "_asString", [])])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRefresh_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefeshFail_", [x]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send(self, "_onRefreshFail_", [x]);})])])]);
return self;},
args: [],
source: unescape('refresh%0A%09%22Re-read%20this%20model%27s%20state.%22%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2Cid%20asString%29.%0A%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterRefresh%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20self%20onRefeshFail%3A%20x%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20self%20onRefreshFail%3A%20x%5D%7D%09%09'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "asString", "onAfterRefresh:", "onRefeshFail:", "onRefreshFail:"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

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
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_onAfterRefresh_'),
smalltalk.method({
selector: unescape('onAfterRefresh%3A'),
category: 'reactions',
fn: function (x){
var self=this;
smalltalk.send(self, "_syncWith_", [smalltalk.send(smalltalk.send(self, "_class", []), "_reify_", [x])]);
smalltalk.send(self, "_announce_", [smalltalk.send((smalltalk.ModelRefreshed || ModelRefreshed), "_for_", [self])]);
return self;},
args: ["x"],
source: unescape('onAfterRefresh%3A%20x%0A%0A%09self%20syncWith%3A%20%28self%20class%20reify%3A%20x%29.%0A%09self%20announce%3A%20%28ModelRefreshed%20for%3A%20self%29%0A'),
messageSends: ["syncWith:", "reify:", "class", "announce:", "for:"],
referencedClasses: ["ModelRefreshed"]
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_save'),
smalltalk.method({
selector: unescape('save'),
category: 'actions',
fn: function (){
var self=this;
return smalltalk.send(self, "_update", []);
return self;},
args: [],
source: unescape('save%0A%09%5E%20self%20update'),
messageSends: ["update"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

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
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_createdOn_'),
smalltalk.method({
selector: unescape('createdOn%3A'),
category: 'accessing',
fn: function (aDate){
var self=this;
(createdOn=aDate);
return self;},
args: ["aDate"],
source: unescape('createdOn%3A%20aDate%0A%0A%09createdOn%20%3A%3D%20aDate'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_createdOn'),
smalltalk.method({
selector: unescape('createdOn'),
category: 'accessing',
fn: function (){
var self=this;
return (typeof createdOn == 'undefined' ? nil : createdOn);
return self;},
args: [],
source: unescape('createdOn%0A%0A%09%5E%20createdOn'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JsonPersistentModel);

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
smalltalk.JsonPersistentModel);

smalltalk.addMethod(
unescape('_asJSONString'),
smalltalk.method({
selector: unescape('asJSONString'),
category: 'actions',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.JSON || JSON), "_stringify_", [self['@data']]);
return self;},
args: [],
source: unescape('asJSONString%0A%0A%09%5E%20JSON%20stringify%3A%20data'),
messageSends: ["stringify:"],
referencedClasses: ["JSON"]
}),
smalltalk.JsonPersistentModel);


smalltalk.addMethod(
unescape('_atId_'),
smalltalk.method({
selector: unescape('atId%3A'),
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.send(self, "_read_", [anId]);
return self;},
args: ["anId"],
source: unescape('atId%3A%20anId%0A%09%22Answers%20the%20instance%20of%20this%20model%20found%20at%20anId%20%28or%20nil%29%22%0A%20%0A%09%5E%20self%20read%3A%20anId%0A'),
messageSends: ["read:"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_read_'),
smalltalk.method({
selector: unescape('read%3A'),
category: 'actions',
fn: function (anId){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_path", []), "__comma", [unescape("/")]), "__comma", [anId])]),smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("sucess", "__minus_gt", [(function(x){return smalltalk.send(self, "_onAfterRead_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelReadError || ModelReadError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not read ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelReadError || ModelReadError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not read ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})])])]);
return self;},
args: ["anId"],
source: unescape('read%3A%20anId%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20%28self%20path%2C%20%27/%27%2CanId%29.%0A%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%27sucess%27%20-%3E%20%5B%3Ax%7C%20self%20onAfterRead%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20ModelReadError%20signal%3A%20%27Could%20not%20read%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20ModelReadError%20signal%3A%20%27Could%20not%20read%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%5D%7D'),
messageSends: ["ajax:", unescape("-%3E"), unescape("%2C"), "path", "onAfterRead:", "signal:", "name", "responseText"],
referencedClasses: ["ModelReadError"]
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_create'),
smalltalk.method({
selector: unescape('create'),
category: 'actions',
fn: function (){
var self=this;
var newInstance=nil;
(newInstance=smalltalk.send(smalltalk.send(self, "_basicNew", []), "_initialize", []));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_", [smalltalk.HashedCollection._fromPairs_([smalltalk.send("url", "__minus_gt", [smalltalk.send(self, "_path", [])]),smalltalk.send("type", "__minus_gt", ["POST"]),smalltalk.send("success", "__minus_gt", [(function(x){return smalltalk.send(newInstance, "_onAfterCreate_", [x]);})]),smalltalk.send("fail", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelCreateError || ModelCreateError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not create ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})]),smalltalk.send("error", "__minus_gt", [(function(x){return smalltalk.send((smalltalk.ModelCreateError || ModelCreateError), "_signal_", [smalltalk.send(smalltalk.send(smalltalk.send("Could not create ", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [":  "]), "__comma", [smalltalk.send(x, "_responseText", [])])]);})])])]);
return newInstance;
return self;},
args: [],
source: unescape('create%0A%0A%09%7C%20newInstance%20%7C%0A%0A%09newInstance%20%3A%3D%20self%20basicNew%20initialize.%0A%0A%09jQuery%20ajax%3A%20%23%7B%20%0A%09%09%27url%27%20-%3E%20self%20path.%0A%09%09%27type%27%20-%3E%20%27POST%27.%0A%09%09%27success%27%20-%3E%20%5B%3Ax%7C%20newInstance%20onAfterCreate%3A%20x%5D.%0A%09%09%27fail%27%20-%3E%20%5B%3Ax%7C%20ModelCreateError%20signal%3A%20%27Could%20not%20create%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%5D.%0A%09%09%27error%27%20-%3E%20%5B%3Ax%7C%20ModelCreateError%20signal%3A%20%27Could%20not%20create%20%27%2C%20self%20name%2C%27%3A%20%20%27%2C%20x%20responseText%5D%7D.%0A%0A%09%5E%20newInstance%0A'),
messageSends: ["initialize", "basicNew", "ajax:", unescape("-%3E"), "path", "onAfterCreate:", "signal:", unescape("%2C"), "name", "responseText"],
referencedClasses: ["ModelCreateError"]
}),
smalltalk.JsonPersistentModel.klass);

smalltalk.addMethod(
unescape('_onAfterRead_'),
smalltalk.method({
selector: unescape('onAfterRead%3A'),
category: 'reactions',
fn: function (someJson){
var self=this;
return smalltalk.send(self, "_reify_", [someJson]);
return self;},
args: ["someJson"],
source: unescape('onAfterRead%3A%20someJson%0A%0A%09%5E%20self%20reify%3A%20someJson'),
messageSends: ["reify:"],
referencedClasses: []
}),
smalltalk.JsonPersistentModel.klass);

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
smalltalk.JsonPersistentModel.klass);

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
smalltalk.JsonPersistentModel.klass);

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
smalltalk.JsonPersistentModel.klass);

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
smalltalk.JsonPersistentModel.klass);

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
smalltalk.JsonPersistentModel.klass);


