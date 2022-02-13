const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
    }
})

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;