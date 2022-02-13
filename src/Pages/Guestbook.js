import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function Guestbook() {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/read').then((response) => {
            // console.log(response)
            setPosts(response.data);
        })

    }, [])

    const handleClick = () => {
        Axios.post('http://localhost:3001/insert', { message: message, name: name })
    }

    return (<div>
        <label>Leave a comment*</label>
        <input type="text" placeholder="Leave a comment!" onChange={(event) => {
            setMessage(event.target.value)
        }} />
        <label>Your name*</label>
        <input type="text" placeholder="Name" onChange={(event) => {
            setName(event.target.value)
        }} />
        <button onClick={handleClick}>SUBMIT</button>
        {/* <div>{posts.map</div> */}
    </div>);
}

export default Guestbook;