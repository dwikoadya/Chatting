"use strict";

const chai = require("chai");
const chaiHTTP = require("chai-http");

const server = require("../app");
const Chat = require("../models/chat");

const should = chai.should();
chai.use(chaiHTTP);

describe("chats", function () {
  Chat.collection.drop();

  beforeEach((done) => {
    let chat = new Chat({
      id: 1,
      name: "Dwiko",
      message: "Belajar TDD",
    });
    chat.save((err) => {
      if (err) console.log(err);
      done();
    });
  });

  afterEach((done) => {
    Chat.collection.drop();
    done();
  });

  it("seharusnya mendapatkan semua daftar pesan yang ada di table CHAT dengan metode GET", (done) => {
    chai
      .request(server)
      .get("/api/chats")
      .end((err, res) => {
        if (err) console.log(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        res.body[0].should.have.property("_id");
        res.body[0].should.have.property('name');
        res.body[0].should.have.property("message");
        res.body[0].name.should.equal("Dwiko");
        res.body[0].message.should.equal("Belajar TDD");
        done();
      });
  });

  it("seharusnya dapat menambahkan satu data dengan metode POST", (done) => {
    chai
      .request(server)
      .post("/api/chats")
      .send({ id: Date.now(), name: "Dwiko", message: "Belajar TDD" })
      .end((err, res) => {
        if (err) console.log(err);
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body.should.have.property('name');
        res.body.should.have.property("message");
        res.body.name.should.equal("Dwiko");
        res.body.message.should.equal("Belajar TDD");
        done();
      });
  });

  it("seharusnya dapat menghapus satu data dengan metode DELETE", (done) => {
    chai
      .request(server)
      .get("/api/chats")
      .end((err, res) => {
        if (err) console.log(err);
        chai
          .request(server)
          .delete("/api/chats/" + res.body[0]._id)
          .end((error, response) => {
            if (error) throw error;
            response.should.have.status(201);
            response.should.be.json;
            response.should.be.a("object");
            response.body.should.have.property("name");
            response.body.should.have.property("message");
            response.body.should.have.property("_id");
            response.body.name.should.equal("Dwiko");
            done();
          });
      });
  });
});
