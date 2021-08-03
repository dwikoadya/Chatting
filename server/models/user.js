const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: String
})

userSchema.pre('save', function (next){
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) console.log(err)
        else {
            this.password = hash;
            next()
        }
    })
})

module.exports = mongoose.model('User', userSchema)