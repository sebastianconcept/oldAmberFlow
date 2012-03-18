smalltalk.addPackage('Flow-Examples', {});
smalltalk.addClass('ToDoList', smalltalk.PersistentModel, ['toDos'], 'Flow-Examples');
smalltalk.addMethod(
unescape('_toDos'),
smalltalk.method({
selector: unescape('toDos'),
fn: function (){
var self=this;
return (($receiver = self['@toDos']) == nil || $receiver == undefined) ? (function(){return smalltalk.send(self, "_initializeToDos", []);})() : $receiver;
return self;}
}),
smalltalk.ToDoList);

smalltalk.addMethod(
unescape('_initializeToDos'),
smalltalk.method({
selector: unescape('initializeToDos'),
fn: function (){
var self=this;
return (self['@toDos']=smalltalk.send((smalltalk.Array || Array), "_new", []));
return self;}
}),
smalltalk.ToDoList);



smalltalk.addClass('ToDo', smalltalk.PersistentModel, ['name', 'description'], 'Flow-Examples');
smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.ToDo);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return self['@description'];
return self;}
}),
smalltalk.ToDo);

smalltalk.addMethod(
unescape('_description_'),
smalltalk.method({
selector: unescape('description%3A'),
fn: function (aString){
var self=this;
(self['@description']=aString);
return self;}
}),
smalltalk.ToDo);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
fn: function (aString){
var self=this;
(self['@name']=aString);
return self;}
}),
smalltalk.ToDo);



