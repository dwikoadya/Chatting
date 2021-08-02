var express = require('express');
var router = express.Router();
var Chat = require('../models/chat');

/* GET users listing. */
router.get('/', (req, res) => {
  Chat.find({}, (err, chats) => {
    if (err) return res.status(500).json({err})
    res.status(200).json(chats)
  })
});

router.post('/', (req, res,) => {
  Chat.create({
    id: req.body.id,
    name: req.body.name,
    message: req.body.message
  }).then(chatItem => {
    res.status(201).json({
      chatAdded: chatItem
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Something Wrong while addding data"
    })
  })
})

router.put('/:id', (req, res) => {
  Chat.findOneAndUpdate({id: parseInt(re.params.id)}, { name: req.body.name, message: req.body.message})
  .then(chatItem => {
    res.status(201).json({
      chatEdited: chatItem
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Something wrong while editing data"
    })
  })
})

router.delete('/:id', (req, res) => {
  Chat.findOneAndRemove({id: parseInt(req.params.id)})
  .then(chatItem => {
    res.status(201).json({
      chatDeleted: chatItem
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Something wrong while deleting data"
    })
  })
})

module.exports = router;