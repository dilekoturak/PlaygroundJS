const mongoose = require('../db/mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age is invalid')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if (value === 'password') {
                throw new Error('Password is invalid')
            }
        }
    }
})

userSchema.pre('save', async function (next) {
    const user = this
    console.log('just before saving!')

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    return next()
})

const User = mongoose.model('User', userSchema)

module.exports = User