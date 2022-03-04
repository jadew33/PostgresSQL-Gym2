const express = require('express');
const router = express.Router();
const GuestbookPostingModel = require('../models/Message');

// Routes prefixed with /api
router.post('/insert', async (req, res) => {
    const { message, name } = req.body.post;
    // console.log(req.body.post)
    const posting = new GuestbookPostingModel({ message: message, name: name, dateTime: new Date() });
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
    const { message, name } = req.body.reply;
    GuestbookPostingModel.findById(postId).then((posting) => {
        posting.replies.push({
            name: name,
            message: message,
            dateTime: new Date()
        });
        posting.save();
        res.send("reply saved");
    }).catch(error => {
        res.send(error)
    });
    // const posting = GuestbookPostingModel.findById(postId);
    // console.log(posting.replies)
    // try {
    //     posting.replies.push({
    //         name: name,
    //         message: message,
    //         dateTime: new Date()
    //     });
    //     await posting.save();
    //     res.send("reply saved");
    // } catch (err) {
    //     res.send(posting)
    // }
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