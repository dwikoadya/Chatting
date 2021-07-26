const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10

const userSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true},
    token: { type: String}
})

userSchema.pre('save', next => {
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) console.log(err)
        else {
            this.password = hash;
            next()
        }
    })
})

module.exports = mongoose.model('User', userSchema)