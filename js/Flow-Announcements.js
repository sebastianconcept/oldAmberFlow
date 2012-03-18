smalltalk.addPackage('Flow-Announcements', {});
smalltalk.addClass('Announcement', smalltalk.Object, ['subject', 'isBubbling'], 'Flow-Announcements');
smalltalk.addMethod(
unescape('_subject'),
smalltalk.method({
selector: unescape('subject'),
category: 'accessing',
fn: function () {
var self=this;
return self['@subject'];
return self;},
args: [],
source: unescape('subject%0A%0A%09%5E%20subject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Announcement);

smalltalk.addMethod(
unescape('_subject_'),
smalltalk.method({
selector: unescape('subject%3A'),
category: 'accessing',
fn: function (anObject) {
var self=this;
(self['@subject']=anObject);
return self;},
args: ["anObject"],
source: unescape('subject%3A%20anObject%0A%0A%09subject%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Announcement);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function () {
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
(self['@isBubbling']=true);
return self;},
args: [],
source: unescape('initialize%0A%0A%09super%20initialize.%0A%09%0A%09isBubbling%20%3A%3D%20true'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Announcement);

smalltalk.addMethod(
unescape('_stop'),
smalltalk.method({
selector: unescape('stop'),
category: 'actions',
fn: function () {
var self=this;
(self['@isBubbling']=false);
return self;},
args: [],
source: unescape('stop%0A%09%0A%09isBubbling%20%3A%3D%20false'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Announcement);

smalltalk.addMethod(
unescape('_isBubbling'),
smalltalk.method({
selector: unescape('isBubbling'),
category: 'testing',
fn: function () {
var self=this;
return self['@isBubbling'];
return self;},
args: [],
source: unescape('isBubbling%0A%09%0A%09%5E%20isBubbling%20'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Announcement);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
category: 'not yet classified',
fn: function (anObject) {
var self=this;
return (function($rec){smalltalk.send($rec, "_subject_", [anObject]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["anObject"],
source: unescape('for%3A%20anObject%0A%0A%09%5E%20self%20new%0A%09%09subject%3A%20anObject%3B%0A%09%09yourself'),
messageSends: ["subject:", "yourself", "new"],
referencedClasses: []
}),
smalltalk.Announcement.klass);


smalltalk.addClass('AjaxSuccess', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ModelUpdated', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ModelCreated', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ModelDeleted', smalltalk.Announcement, [], 'Flow-Announcements');


smalltalk.addClass('ModelRefreshed', smalltalk.Announcement, [], 'Flow-Announcements');


