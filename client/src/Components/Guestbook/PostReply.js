import { getFormattedDate } from "../../helpers/helpers";
import { useState, useRef, useEffect } from "react";
import Axios from 'axios';

function PostReply({ reply }) {
    const { name, message, dateTime, replies, _id } = reply;
    const [showReplies] = useState(replies !== undefined);
    const [childReply, setReply] = useState({
        name: "", message: "", email: ""
    });

    const handleInputChange = (event) => {
        setReply((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendReply();
    }

    const sendReply = () => {
        Axios.post('/api/addReply', { postId: _id, reply: childReply }).then(
            () => {
                console.log("data has been saved");
                resetUserInputs();
            }
        ).catch(
            (err) => { console.log(err) }
        );
    }

    
    const resetUserInputs = () => {
        setReply({
            name: "", message: "", email: ""
        })
    }

    return (<div className="reply" >
    <h1>{name}</h1>
    <p >{message}</p >
    <p className="date">{getFormattedDate(dateTime)}</p>
    <div>
        {showReplies && replies.map(reply => <PostReply reply={reply} key={_id}/>)}
    </div>

    <form className='Guestbook__comment' onSubmit={handleSubmit}>
        <textarea type="text" placeholder="Leave a reply!" name="message" value={childReply.message} onChange={handleInputChange} />

        <input type="text" placeholder="Name" name="name" value={childReply.name} onChange={handleInputChange} />

        <input type="text" placeholder="Email" name="email" value={childReply.email} onChange={handleInputChange} />
        {/* Unstyled but here so that you can set up on clicks */}
        <button type='submit' style={{ backgroundColor: 'white' }}>Reply To reply</button>
    </form>
    
    </div>);
}

export default PostReply;