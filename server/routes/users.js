const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require("../models/user");
const secret = "sinlay";


router.get('/register', (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.status(500).json({err})
    res.status(200).json(users)
  })
})

router.post("/register", (req, res) => {
  let userName = req.body.userName;
  let email = req.body.email;
  let password = req.body.password;
  let retype = req.body.retype;

  let response = {
    message: "",
    data: {},
    token: "",
  };

  if (password !== retype) {
      res.status(500).json({
      error: true,
      message: "password does not match",
    });
  }

  User.findOne({ email })
    .then((result) => {
      if (result) {
        response.message = "Email Already Exist";
        res.status(500).json(response);
      } else {
        var token = jwt.sign({ email: email }, secret);
        let user = new User({
          userName: userName,
          email: email,
          password: password,
          token: token,
        });
        user
          .save()
          .then((data) => {
            console.log(data)
            (response.message = "Register Success"),
              (response.data.email = email,
                response.data.userName = userName,
                response.data.password = password);
            response.token = token;
            res.status(200).json(response);
          })
          .catch((err) => {
            res.status(500).json({
              error: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        message: "Something Wrong",
      });
    });
});

router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let response = {
    message: "",
    data: {},
    token: "",
  };

  User.findOne({ email })
  .then((data) => {
    bcrypt.compare(password, data.password)
    .then((check) => {
      if (check) {
        if (data.token) {
          response.token = data.token;
          response.data.email = email;
          response.message = "Login Success";
          res.status(201).json(response);
        } else {
          const newToken = jwt.sign({ email: data.email }, secret);
          user
            .updateOne({ email: data.email }, { token: newToken })
            .then(() => {
              response.token = newToken;
              response.data.email = data.email;
              response.message = "Login Success";
              res.status(201).json(response);
            });
        }
      } else {
        response.message = "Login Failed"
        res.status(500).json(response)
      }
    }).catch(err => {
      console.log(err)
      response.message = "Login Failed"
      res.status(500).json(response)
    })
  }).catch(err => {
    console.log(err)
    response.message = "Email Doesn't Exist"
    res.status(500).json(response)
  })
});

module.exports = router;