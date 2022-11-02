require('../src/db/mongoose')
const Task = require('../src/model/task')

Task.findByIdAndRemove('62d2019e792ca80223b3679b').then((task)=> {
    console.log(task, 'deleted')
    return Task.countDocuments({completed: false})
}).then((result)=> {
    console.log(result)
}).catch((e)=> {
    console.log(e)
})