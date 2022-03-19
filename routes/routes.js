const express = require('express');
const router = express.Router();
const GuestbookPostingModel = require('../models/Message');
const validator = require('validator');

// Routes prefixed with /api
router.post('/insert', async (req, res) => {
    const { message, name, email } = req.body.post;
    if (!validator.isEmail(email) || validator.isEmpty(name) || validator.isEmpty(message)) {
        res.status(422).json({ msg: 'Invalid input submitted, please try again' })
    }
    const posting = new GuestbookPostingModel({ message: message, name: name, email: email, dateTime: new Date() });
    console.log(posting)
    try {
        await posting.save();
        res.send("message saved");
    } catch (err) {
        res.status(500).json({ msg: 'Sorry, internal server errors' })
    }
})

router.post('/addReply', async (req, res) => {
    const postId = req.body.postId;
    const { message, name, email } = req.body.reply;
    if (!validator.isEmail(email) || validator.isEmpty(name) || validator.isEmpty(message)) {
        res.status(422).json({ msg: 'Invalid input submitted, please try again' })
    }
    GuestbookPostingModel.findById(postId).then((posting) => {
        posting.replies.push({
            name: name,
            message: message,
            email: email,
            dateTime: new Date()
        });
        posting.save();
        res.send("reply saved");
    }).catch(error => {
        res.send(error)
    });
})

router.get('/read', async (req, res) => {
    GuestbookPostingModel.find({}).sort({ dateTime: -1 })
        .then((result) => {
            res.json(result)
        })
        .catch(error => {
            console.log(error)
            res.send(err)
        })
})

module.exports = router;