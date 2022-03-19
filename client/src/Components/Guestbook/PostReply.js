import { getFormattedDate } from "../../helpers/helpers";

function PostReply({ reply }) {
    const { name, message, dateTime } = reply;
    return (<div className="reply">
        <h1>{name}</h1>
        <p>{message}</p>
        <p className="date">{getFormattedDate(dateTime)}</p>
    </div>);
}

export default PostReply;