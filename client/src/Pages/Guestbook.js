import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function Guestbook() {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get('/api/read').then((response) => {
            console.log(response.data)
            setPosts(response.data);
        }).then(
            () => { console.log("data has been read") }
        ).catch(
            () => { console.log("Sorry, internal server error. Please try again soon") }
        );
    }, [])

    const handleClick = () => {
        Axios.post('/api/insert', { message: message, name: name }).then(
            () => {
                console.log("data has been saved");
                resetUserInputs();
            }

        ).catch(
            () => { console.log("Sorry, internal server error. Please try again soon") }
        );
    }

    const resetUserInputs = () => {
        setName('');
        setMessage('');
    }

    return (<div>
        <label>Leave a comment*</label>
        <input type="text" placeholder="Leave a comment!" value={message} onChange={(event) => {
            setMessage(event.target.value)
        }} />
        <label>Your name*</label>
        <input type="text" placeholder="Name" value={name} onChange={(event) => {
            setName(event.target.value)
        }} />
        <button onClick={handleClick}>SUBMIT</button>
        {posts.length ? posts.map(post => <div><h1>{post.name}</h1><p>{post.message}</p></div>) : "internal server error"}
    </div>);
}

export default Guestbook;