import { useState, useRef, useEffect } from "react";
import { getFormattedDate } from "../../helpers/helpers";
import PostReply from "./PostReply";

function Posting({ post }) {
    const { name, message, dateTime, replies, _id } = post;
    const [showReplies] = useState(replies !== undefined);

    return (<div className="post" >
        <h1>{name}</h1>
        <p >{message}</p >
        <p className="date">{getFormattedDate(dateTime)}</p>
        <div>
            {showReplies && replies.map(reply => <PostReply reply={reply} key={_id}/>)}
        </div>
        {/* Unstyled but here so that you can set up on clicks */}
        <button style={{ backgroundColor: 'white' }}> Reply To message</button>

    </div>);
}

export default Posting;