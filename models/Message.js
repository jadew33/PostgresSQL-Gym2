const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        default: Date.now()
    }
})

const GuestbookPosting = mongoose.model("Message", PostSchema);
module.exports = GuestbookPosting;