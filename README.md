Seq-process
=
An utility to execute a bunch of functions sequentially.


Interface
-
* **ctor**
* **process** (fn -> Promise)
    1. fn: a function will be called sequentially, same order as 'process' being called, must return a promise
    2. returns: a promise will be resolved once function succeeds, or be rejected once it fails
