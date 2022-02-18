import { getFormattedDate } from "../../helpers/helpers";

function PostReply({ reply }) {
    const { name, message, dateTime } = reply;
    return (<div className="reply">
        <h1>{name}</h1>
        <p>{message}</p>
        <p className="date">{getFormattedDate(dateTime)}</p>
        {/* Unstyled but here so that you can set up on clicks */}
        <button style={{ backgroundColor: 'white' }}> Reply To reply</button>
    </div>);
}

export default PostReply;