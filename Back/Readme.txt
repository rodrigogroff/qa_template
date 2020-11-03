
// 
// This is how the template is organized for backend
// 
// For automations, use 'BuildApi' program
//

--------------------
DDD
--------------------

Domain driven design
	Single responsability
	Isolation of code
	Features tight
	Better search for bugs

--------------------
SOA
--------------------

Service Oriented Archictecture
	Better contract (input/output)	infra
	Each service = one purpose
	Versioning
	Repository interface for production, unit and integration testing 
		without changing a line of code
	Inherits methods
	Loose decoupling, use it anywhere

--------------------
Directories 
--------------------

Domains			
	[Domain 1]			// User
		[Feature 1]		// Register
			[v1]
			[v2]		
		[Feature 2]		// Login
			[v1]

--------------------
Master Api
--------------------

Controller
Data
Infra
Repository
Service

--------------------
Master - Controller
--------------------

Controller
	Domains
		[Domain 1]					// User
			[Feature 1]				// Register
				[v1]
					[Public]		// Endpoint public
					[Tokenized]		// Endpoint safe

--------------------
Master - Data
--------------------

Data
	Domains
		[Domain 1]		// User
			Database	// Tables used in this domain
			DTO			// Serialized information from services

--------------------
Master - Infra
--------------------

Infra
	[*]	.net core project files all here
	[*] configuration files all here

--------------------
Master - Repository
--------------------

Repository
	Domains
		[Domain 1]		// User
			[*]			// POCO classes from database tables
