const mongoose = require('../db/mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: true
    }
})

module.exports = Task