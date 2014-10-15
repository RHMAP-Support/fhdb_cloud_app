# fhdb Cloud App

This is a cloud app that interfaces with a seperate cloud app that maintains a MongoDB database

# Group Cloud App API

# list [/fhdb/list]

'list' endpoint.

## list [POST] 

'list' endpoint.

+ Request (application/json)
    + Body
            {

            }

+ Response 200 (application/json)
    + Body
            { "msg" : " {
                            "msg":{"count":1,
                                    "list":[
                                            {
                                                "type":"fhdbExample",
                                                "guid":"5436aacc0f9f20870d000446",
                                                "fields":{
                                                            "firstname":"jim",
                                                            "lastname":"jones",
                                                            "country":"Ireland",
                                                            "phone":"123456"
                                                          }
                                            },
                                    }
                        }" 
            }

# addMrJones [/fhdb/addMrJones]

'addMrJones' endpoint.

## addMrJones [POST] 

'addMrJones' endpoint.

+ Request (application/json)
    + Body
            {

            }

+ Response 200 (application/json)
    + Body
            {
              msg: "{"msg":{"type":"fhdbExample","guid":"543e5f760f9f20870d000517","fields":{"firstname":"jim","lastname":"jones","country":"Ireland","phone":"123456"}}}"
            }

# addMrSmith [/fhdb/addMrSmith]

'addMrSmith' endpoint.

## addMrSmith [POST] 

'addMrSmith' endpoint.

+ Request (application/json)
    + Body
            {

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
            {

            }

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
            {

            }

+ Response 200 (application/json)
    + Body
            {
              msg: "{"msg":{"status":"ok","count":1}}"
            }
