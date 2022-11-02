const User = require('../model/user')
const Task = require('../model/task')

const me = new User({
    name: 'Dilek',
    age: 29,
    email: 'DILEKOTURAK@YOPMAIL.COM',
    password: 'Dilek123'
})
me.save().then((res)=> {
    console.log(res)
}).catch((err)=> {
    console.log(err)
})

const myTask = new Task({
    description: 'Study Node.js'
})

myTask.save().then((res)=> {
    console.log(res)
}).catch((err)=> {
    console.log(err)
})