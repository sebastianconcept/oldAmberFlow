smalltalk.addPackage('Flow-Examples', {});
smalltalk.addClass('ToDoList', smalltalk.PersistentModel, ['toDos'], 'Flow-Examples');
smalltalk.addMethod(
unescape('_toDos'),
smalltalk.method({
selector: unescape('toDos'),
category: 'accessing',
fn: function (){
var self=this;
return (($receiver = self['@toDos']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeToDos", []);})() : $receiver;
return self;},
args: [],
source: unescape('toDos%0A%0A%09%5E%20toDos%20ifNil%3A%5Bself%20initializeToDos%5D'),
messageSends: ["ifNil:", "initializeToDos"],
referencedClasses: []
}),
smalltalk.ToDoList);

smalltalk.addMethod(
unescape('_initializeToDos'),
smalltalk.method({
selector: unescape('initializeToDos'),
category: 'initialization',
fn: function (){
var self=this;
return (self['@toDos']=smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;},
args: [],
source: unescape('initializeToDos%0A%0A%09%5E%20toDos%20%3A%3D%20Array%20new'),
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.ToDoList);



smalltalk.addClass('ToDo', smalltalk.PersistentModel, ['name', 'description'], 'Flow-Examples');
smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'accessing',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: unescape('name%0A%0A%09%5E%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToDo);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'accessing',
fn: function (){
var self=this;
return self['@description'];
return self;},
args: [],
source: unescape('description%0A%0A%09%5E%20description'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToDo);

smalltalk.addMethod(
unescape('_description_'),
smalltalk.method({
selector: unescape('description%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@description']=aString);
return self;},
args: ["aString"],
source: unescape('description%3A%20aString%0A%0A%09description%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToDo);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@name']=aString);
return self;},
args: ["aString"],
source: unescape('name%3A%20aString%0A%0A%09name%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToDo);



