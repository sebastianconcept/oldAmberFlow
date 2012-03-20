Smalltalk current createPackage: 'Flow-Announcements' properties: #{}!
Object subclass: #Announcement
	instanceVariableNames: 'subject isBubbling'
	category: 'Flow-Announcements'!

!Announcement methodsFor: 'accessing'!

subject

	^ subject
!

subject: anObject

	subject := anObject
! !

!Announcement methodsFor: 'actions'!

stop
	
	isBubbling := false
! !

!Announcement methodsFor: 'initialization'!

initialize

	super initialize.
	
	isBubbling := true
! !

!Announcement methodsFor: 'testing'!

isBubbling
	
	^ isBubbling
! !

!Announcement class methodsFor: 'not yet classified'!

for: anObject

	^ self new
		subject: anObject;
		yourself
! !

Announcement subclass: #AjaxSuccess
	instanceVariableNames: ''
	category: 'Flow-Announcements'!

Announcement subclass: #ModelUpdated
	instanceVariableNames: ''
	category: 'Flow-Announcements'!

Announcement subclass: #ModelCreated
	instanceVariableNames: ''
	category: 'Flow-Announcements'!

Announcement subclass: #ModelDeleted
	instanceVariableNames: ''
	category: 'Flow-Announcements'!

Announcement subclass: #ModelRefreshed
	instanceVariableNames: ''
	category: 'Flow-Announcements'!

Announcement subclass: #ItemsLoaded
	instanceVariableNames: ''
	category: 'Flow-Announcements'!

