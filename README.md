# fhdb Cloud App

This is a cloud app that interfaces with a seperate cloud app that maintains a MongoDB database

# Group Cloud App API

# list [/fhdb/list]

'list' endpoint.

## list [POST] 

'list' endpoint.

+ Request (application/json)
    + Body
            {}

+ Response 200 (application/json)
    + Body
            {
              msg: "{"msg":{"count":8,"list":[{"type":"fhdbExample","guid":"543e77d56d5fd8880d0001ed","fields":{"firstname":"jack","lastname":"smith","country":"dbland","phone":"987654"}},{"type":"fhdbExample","guid":"543e77d76d5fd8880d0001ee","fields":{"firstname":"jack","lastname":"smith","country":"dbland","phone":"987654"}},{"type":"fhdbExample","guid":"543e77d90f9f20870d000522","fields":{"firstname":"jack","lastname":"smith","country":"dbland","phone":"987654"}},{"type":"fhdbExample","guid":"543e77db6d5fd8880d0001ef","fields":{"firstname":"jack","lastname":"smith","country":"dbland","phone":"987654"}},{"type":"fhdbExample","guid":"543e77e76d5fd8880d0001f0","fields":{"firstname":"jim","lastname":"jones","country":"Ireland","phone":"123456"}},{"type":"fhdbExample","guid":"543e77e80f9f20870d000523","fields":{"firstname":"jim","lastname":"jones","country":"Ireland","phone":"123456"}},{"type":"fhdbExample","guid":"543e77ea6d5fd8880d0001f1","fields":{"firstname":"jim","lastname":"jones","country":"Ireland","phone":"123456"}},{"type":"fhdbExample","guid":"543e77ec0f9f20870d000524","fields":{"firstname":"jim","lastname":"jones","country":"Ireland","phone":"123456"}}]}}"
            }

# addMrJones [/fhdb/addMrJones]

'addMrJones' endpoint.

## addMrJones [POST] 

'addMrJones' endpoint.

+ Request (application/json)
    + Body
            { 
              "form" : { "firstname" : "jim", "lastname" : "jones", "country" : "Ireland", "phone" : "123456" } 
            }

+ Response 200 (application/json)
    + Body
            {
              msg: "{"msg":{"type":"fhdbExample","guid":"543e7a170f9f20870d000525","fields":{"firstname":"jim","lastname":"jones","country":"Ireland","phone":"123456"}}}"
            }

# addMrSmith [/fhdb/addMrSmith]

'addMrSmith' endpoint.

## addMrSmith [POST] 

'addMrSmith' endpoint.

+ Request (application/json)
    + Body
            {
              "form" : { "firstname" : "jack", "lastname" : "smith", "country" : "dbland", "phone" : "987654" }
            }

+ Response 200 (application/json)
    + Body
            {
              msg: "{"msg":{"type":"fhdbExample","guid":"543e60250f9f20870d000519","fields":{"firstname":"jack","lastname":"smith","country":"dbland","phone":"987654"}}}"
            }

# listLastName [/fhdb/listLastName]

'listLastName' endpoint.

## listLastName [POST] 

'listLastName' endpoint.

+ Request (application/json)
    + Body
            {}

+ Response 200 (application/json)
    + Body
            {
              msg: "{"msg":{"count":1,"list":[{"type":"fhdbExample","guid":"5436aace0f9f20870d000447","fields":{"firstname":"jack","lastname":"smith","country":"dbland","phone":"987654"}}]}}"
            }

# deleteall [/fhdb/deleteall]

'deleteall' endpoint.

## deleteall [POST] 

'deleteall' endpoint.

+ Request (application/json)
    + Body
            {}

+ Response 200 (application/json)
    + Body
            {
              msg: "{"msg":{"status":"ok","count":1}}"
            }
