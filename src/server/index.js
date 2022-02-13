const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;


const MessageModel = require('./models/Message');

app.use(express.json());
app.use(cors());

mongoose.connect( process.env.MONGODB_URI || 'mongodb+srv://jadew33:jade@vanthemanguestbook.5wlis.mongodb.net/guestbook?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.post('/insert', async (req, res) => {
    const message = req.body.message;
    const name = req.body.name;
    const posting = new MessageModel({ message: message, name: name });
    try {
        await posting.save();
        console.log("message saved!")
    } catch (err) {
        console.log(err)
    }
})

app.get('/read', async (req, res) => {
    MessageModel.find({}, (err, result) => {
        if (err)
            res.send(err)
        res.send(result)
    })
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})