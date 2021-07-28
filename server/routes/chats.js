var express = require('express');
var router = express.Router();
var Chat = require('../models/chat');

/* GET users listing. */
router.get('/', (req, res) => {
  Chat.find({}).then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json({err})
  })
});

router.post('/', (req, res,) => {
  Chat.create({
    id: req.body.id,
    name: req.body.name,
    message: req.body.message
  }).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.json({err})
  })
})

router.put('/:id', (req, res) => {
  Chat.findByIdAndUpdate(req.params.id, {
    id: req.body.id,
    name: req.body.name,
    message: req.body.message
  }, {
    new: true
  }).then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json({err})
  })
})

router.delete('/:id', (req, res) => {
  Chat.findOneAndRemove(req.params.id)
  .then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.json({err})
  })
})

module.exports = router;