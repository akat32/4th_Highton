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

    HTTP 412 : {message:"already exist"} // 유저 중복

    HTTP 500 : {message : "ERR!"}

* POST /auth/signin : User register

> Params

    id : User's ID [String]

    passwd : User's passwd [String]

> Response

    HTTP 200 : {token : 'User's token'}

    HTTP 404 : {message : "User not found!"}

* GET /auth/auto/:token : User register

> Params

    token : User's token

    ex:) /auth/auto/D5qS3kxBAavQiaNrdZav1au
> Response

    HTTP 200 : User's info json

    HTTP 404 : {message : "User not found!"}

* POST /item/input

> Params

    img : Item's img file

    name : Item's name,

    price : Item's price,

    size : Item's size,

    company : company's name,

    season : 원하는 옷의 계절

> Response

    HTTP 200 : {message : "success!"}

    HTTP 500 : {message : "ERR!"}

* POST /item/list

> Params

    season : 원하는 옷의 계절

> Response

    HTTP 200 : [{ 옷 리스트 }]

    HTTP 404 : {message : "Item not found!"}

* POST /buy/bucket/add

> Params

    itemToken : Item's token

    userToken : User's token

> Response

    HTTP 200 : {message : "success!"}

    HTTP 404 : {message : "Item not found!"}

    HTTP 500 : {message : "ERR!"}
