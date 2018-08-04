# Team : 169 난쟁민
2018 4th Highton

## API Document

* POST /auth/signup : User register

> Params

    id : User's ID [String]

    passwd : User's passwd [String]

    name : User's name [String]

    phone : User's Phone_number [String]

> Response

    HTTP 200 : {message : "success!"}

    HTTP 412 : User duplicate

    HTTP 500 : {message : "ERR!"}

* POST /auth/signin : User register

> Params

    id : User's ID [String]

    passwd : User's passwd [String]

> Response

    HTTP 200 : User's info json

    HTTP 404 : {message : "User not found!"}
