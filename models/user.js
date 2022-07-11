const mongoose = require('mongoose')
// const { Schema } = mongoose
const { Schema, model } = mongoose
const SALT_ROUNDS = 6
const bcrypt = require('bcrypt')

// Make favorites schema
const favoritesSchema = new Schema({
    id: String,
    photos: [],
    name: String,
    breeds: {},
    age: String,
    size: String,
    gender: String,
    colors: {},
    description: String,
    contact: {},
    note: String
})

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    },
    favorites: [{ type: favoritesSchema }]
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret){
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})

const User = model("User", userSchema)

// module.exports = mongoose.model('User', userSchema)

module.exports = User
