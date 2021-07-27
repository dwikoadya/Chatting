const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const User = require('../models/user');
const secret = 'sinlay'

router.get('./', (req, res) => {
    res.send('respond with a resource')
});

router.post('/register', (req, res) => {
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;
    let retype = req.body.retype

    let response = {
        message: '',
        data: {},
        token: ''
    }

    if (password !== retype) {
        return res.status(500).json({
            error: true,
            message: 'password does not match'
        })
    }

    User.findOne({ email }).then(result => {
        if (result) {
            response.message = 'Email Already Exist';
            return res.status(500).json(response)
        } else {
            var token = jwt.sign({ email: email }, secret);
            let user = new User({
                userName: userName,
                email: email,
                password: password,
                token: token
            })
            user.save().then(data => {
                console.log(data)
                response.message = 'Register Success',
                response.data.email = email
                response.token = token
                res.status(200).json(response)
            }).catch(err => {
                res.status(500).json({
                    error: err
                })
            })
        }
    }).catch(err => {
        res.status(500).json({
            error: err,
            message: 'Something Wrong'
        })
    })
})

module.exports = router;