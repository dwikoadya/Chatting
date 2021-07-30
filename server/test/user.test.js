"use strict";

const chai = require("chai");
const chaiHTTP = require("chai-http");

const server = require("../app");
const User = require("../models/user");

const should = chai.should();

chai.use(chaiHTTP);

describe("users", function () {
  beforeEach((done) => {
    let user = new User({
      userName: "dam",
      email: "dwiko@adya.com",
      password: "maulana",
    });
    user.save((err) => {
      if (err) console.log(err);
      done();
    });
  });

  afterEach((done) => {
    User.collection.drop();
    done();
  });

  it("seharusnya dapat menambahkan satu data dengan metode POST", (done) => {
    chai
      .request(server)
      .post("/api/users/register")
      .send({
        userName: "dam",
        email: "dwiko@adya.com",
        password: "maulana",
      })
      .end((err, res) => {
        if (err) console.log(err);
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property("userName");
        res.body.should.have.property("email");
        res.body.should.have.property("password");
        res.body.userName.should.equal("dam");
        res.body.email.should.equal("dwiko@adya.com");
        res.body.password.should.equal("maulana");
        done();
      });
  });
});
