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
    },
    replies: {
        type: Array,
        default: []
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    }
})

const GuestbookPosting = mongoose.model("Message", PostSchema);
module.exports = GuestbookPosting;