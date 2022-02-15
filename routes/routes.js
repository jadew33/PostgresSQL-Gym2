const express = require('express');
const router = express.Router();
const GuestbookPostingModel = require('../models/Message');

// Routes prefixed with /api
router.post('/insert', async (req, res) => {
    const message = req.body.message;
    const name = req.body.name;
    const posting = new GuestbookPostingModel({ message: message, name: name });
    try {
        await posting.save();
        res.send("message saved");
    } catch (err) {
        res.status(500).json({ msg: 'Sorry, internal server errors' })
    }
})

router.get('/read', async (req, res) => {
    GuestbookPostingModel.find({}, (err, result) => {
        if (err)
            res.send(err)
        // res.json(result);
        res.send(result);
        // console.log(result)
        console.log("we sent result back")
    })
})

module.exports = router;