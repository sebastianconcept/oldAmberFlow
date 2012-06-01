smalltalk.addPackage('Flow-Announcements', {});
smalltalk.addClass('Announcement', smalltalk.Object, ['subject', 'isBubbling'], 'Flow-Announcements');
smalltalk.addMethod(
unescape('_subject'),
smalltalk.method({
selector: unescape('subject'),
fn: function (){
var self=this;
return self['@subject'];
return self;}
}),
smalltalk.Announcement);

smalltalk.addMethod(
unescape('_subject_'),
smalltalk.method({
selector: unescape('subject%3A'),
fn: function (anObject){
var self=this;
(self['@subject']=anObject);
return self;}
}),
smalltalk.Announcement);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@isBubbling']=true);
return self;}
}),
smalltalk.Announcement);

smalltalk.addMethod(
unescape('_stop'),
smalltalk.method({
selector: unescape('stop'),
fn: function (){
var self=this;
(self['@isBubbling']=false);
return self;}
}),
smalltalk.Announcement);

smalltalk.addMethod(
unescape('_isBubbling'),
smalltalk.method({
selector: unescape('isBubbling'),
fn: function (){
var self=this;
return self['@isBubbling'];
return self;}
}),
smalltalk.Announcement);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
fn: function (anObject){
var self=this;
return (function($rec){smalltalk.send($rec, "_subject_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Announcement.klass);


smalltalk.addClass('AjaxSuccess', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ModelUpdated', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ModelCreated', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ModelDeleted', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ModelRefreshed', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ItemsLoaded', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('FeedbackRequest', smalltalk.Announcement, ['polarity'], 'Flow-Announcements');
smalltalk.addMethod(
unescape('_beNeutral'),
smalltalk.method({
selector: unescape('beNeutral'),
fn: function (){
var self=this;
(self['@polarity']="neutral");
return self;}
}),
smalltalk.FeedbackRequest);

smalltalk.addMethod(
unescape('_bePositive'),
smalltalk.method({
selector: unescape('bePositive'),
fn: function (){
var self=this;
(self['@polarity']="positive");
return self;}
}),
smalltalk.FeedbackRequest);

smalltalk.addMethod(
unescape('_beNegative'),
smalltalk.method({
selector: unescape('beNegative'),
fn: function (){
var self=this;
(self['@polarity']="negative");
return self;}
}),
smalltalk.FeedbackRequest);

smalltalk.addMethod(
unescape('_polarity'),
smalltalk.method({
selector: unescape('polarity'),
fn: function (){
var self=this;
return self['@polarity'];
return self;}
}),
smalltalk.FeedbackRequest);

smalltalk.addMethod(
unescape('_polarity_'),
smalltalk.method({
selector: unescape('polarity%3A'),
fn: function (aString){
var self=this;
(self['@polarity']=aString);
return self;}
}),
smalltalk.FeedbackRequest);



