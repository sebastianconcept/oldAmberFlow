Smalltalk current createPackage: 'Flow-Examples' properties: #{}!
PersistentModel subclass: #ToDoList
	instanceVariableNames: 'toDos'
	category: 'Flow-Examples'!

!ToDoList methodsFor: 'accessing'!

toDos

	^ toDos ifNil:[self initializeToDos]
! !

!ToDoList methodsFor: 'initialization'!

initializeToDos

	^ toDos := Array new
! !

PersistentModel subclass: #ToDo
	instanceVariableNames: 'name description'
	category: 'Flow-Examples'!

!ToDo methodsFor: 'accessing'!

name

	^ name
!

description

	^ description
!

description: aString

	description := aString
!

name: aString

	name := aString
! !

