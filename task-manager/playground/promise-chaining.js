require('../src/db/mongoose')
const User = require('../src/model/user')

User.findByIdAndUpdate('62d2155325c662eb3ddf8246', {
    age: 1
}).then((user)=> {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result)=> {
    console.log(result)
}).catch((e)=> {
    console.log(e)
})