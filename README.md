Seq-process
=
An utility to execute a bunch of functions sequentially.


Interface
-
* **ctor**
* **process** (fn -> Promise)
	fn: a function will be called sequentially, same order as 'process' being called, must return a promise
	returns: a promise will be resolved once function succeeds, or be rejected once it fails
