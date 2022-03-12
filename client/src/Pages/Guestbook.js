import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Posting from '../Components/Guestbook/Posting';

function Guestbook() {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        name: "", message: "", email: ""
    })

    // Fetch posts from MongoDB
    const fetchPosts = () => {
        Axios.get('/api/read').then((response) => {
            console.log(response.data)
            setPosts(response.data);
        }).then(
            () => { console.log("data has been read") }
        ).catch(
            () => { console.log("error reading data"); setPosts([]); }
        );
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendPost();
    }

    const sendPost = () => {
        Axios.post('/api/insert', { post: post }).then(
            () => {
                console.log("data has been saved");
                resetUserInputs();
                fetchPosts();
            }
        ).catch(
            () => { console.log("Sorry, internal server error. Please try again soon") }
        );
    }

    const resetUserInputs = () => {
        setPost({
            name: "", message: "", email: ""
        })
    }

    const handleInputChange = (event) => {
        setPost((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    return (<div className='Guestbook'>
        <form className='Guestbook__form' onSubmit={handleSubmit}>
            <h1>Sign the guestbook</h1>

            <label>Leave a message!*</label>
            <textarea type="text" placeholder="Leave a message!" name="message" value={post.message} onChange={handleInputChange} />

            <label>Your name*</label>
            <input type="text" placeholder="Name" name="name" value={post.name} onChange={handleInputChange} />

            <label htmlFor='email'>Your email* (This information will not be publicly displayed)</label>
            <input type="text" placeholder="Email" name="email" value={post.email} onChange={handleInputChange} />

            <button type='submit'>SUBMIT</button>
        </form>
        <div className='Guestbook__posts'>
            {posts.length ? posts.map(post => <Posting post={post} fetchPosts={fetchPosts} key={post._id}/>)
                : <h1>Sorry, something went wrong and we cannot fetch past posts :( Please try again later</h1>}
        </div>
    </div>);
}

export default Guestbook;