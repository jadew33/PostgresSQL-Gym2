import { useState } from "react";
import { getFormattedDate } from "../../helpers/helpers";
import PostReply from "./PostReply";
import Axios from 'axios';
import validator from 'validator'

function Posting({ post, fetchPosts }) {
    const { name, message, dateTime, replies, _id } = post;
    const [showReplies] = useState(replies !== undefined);
    const [reply, setReply] = useState({
        name: "", message: "", email: ""
    });
    const [error, setError] = useState({
        showError: false, errorMessage: ""
    })
    const [showReplyForm, setShowReplyForm] = useState(false);

    const handleInputChange = (event) => {
        setReply((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validator.isEmpty(reply.name) && !validator.isEmpty(reply.message) && validator.isEmail(reply.email)) {
            sendReply();
            setError({ showError: false, errorMessage: '' })
        } else if (!validator.isEmail(reply.email)) {
            setError({ showError: true, errorMessage: 'Invalid email entered' })
        } else {
            setError({ showError: true, errorMessage: 'One or more fields empty' })
        }
    }

    const sendReply = () => {
        Axios.post('/api/addReply', { postId: _id, reply: reply }).then(
            () => {
                setReply({
                    name: "", message: "", email: ""
                })
                setShowReplyForm(false);
                fetchPosts();
            }
        ).catch(
            (err) => { console.log(err) }
        );
    }

    return (<div className="post" >
        <h1>{name}</h1>
        <p >{message}</p >
        <p className="date">{getFormattedDate(dateTime)}</p>
        <div>
            {showReplies && replies.map(reply => <PostReply reply={reply} key={_id} />)}
        </div>
        {
            showReplyForm
                ? <form onSubmit={handleSubmit} className="reply-form">
                    <textarea type="text" placeholder="Leave a reply!" name="message" value={reply.message} onChange={handleInputChange} />

                    <input type="text" placeholder="Name" name="name" value={reply.name} onChange={handleInputChange} />
                    <input type="text" placeholder="Email" name="email" value={reply.email} onChange={handleInputChange} />
                    {
                        error.showError && <label className="error-message">{error.errorMessage}</label>
                    }
                    <button type='submit' className="reply-to-message-button">Reply To message</button>
                </form>
                : <button className="reply-to-message-button" onClick={() => setShowReplyForm(!showReplyForm)}>Reply to Message</button>
        }
    </div>);
}

export default Posting;