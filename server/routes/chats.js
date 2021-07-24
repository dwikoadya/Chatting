var express = require('express');
var Chat = require('../models/chat');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  Chat.find({}).then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json({err})
  })
});

router.post('/', (req, res, next) => {
  Chat.create({
    name: req.body.name,
    message: req.body.message
  }).then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json({err})
  })
})

router.put('/:id', (req, res, next) => {
  Chat.findByIdAndUpdate(req.params.id, {
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

router.delete('/:id', (req, res, next) => {
  Chat.findOneAndRemove(req.params.id)
  .then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json({err})
  })
})

module.exports = router;
