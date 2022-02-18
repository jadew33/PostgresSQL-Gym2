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
        type: Date,
        required: true
    }
})

const GuestbookPosting = mongoose.model("Message", PostSchema);
module.exports = GuestbookPosting;