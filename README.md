# req-info
Grab request info from express req

##  Install
```sh
npm install req-info
```

##  Usage

```js
const reqInfo = require('req-info');

console.log(reqInfo.userId)               //  Out: Auth0 user_id: auth0|5b558b1155f1632b0bxxxxxx
console.log(reqInfo.user  )               //  Out: Auth0 user: object
console.log(reqInfo.url)                  //  Out: GET http://localhost:3000/api/users
console.log(reqInfo.body)                 //  Out: body object
console.log(reqInfo.headers.authorization)//  Out: Authorization: Bearer xxxxx
console.log(reqInfo.params)               //  Out: params object
console.log(reqInfo.query)                //  Out: query object

```