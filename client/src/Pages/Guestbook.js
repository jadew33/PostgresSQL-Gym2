import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Posting from '../Components/Guestbook/Posting';
import validator from 'validator';

function Guestbook() {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({
        name: "", message: "", email: ""
    })
    const [error, setError] = useState({
        showError: false, errorMessage: ""
    })

    // Fetch posts from MongoDB
    const fetchPosts = () => {
        Axios.get('/api/read').then((response) => {
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
        if (!validator.isEmpty(post.name) && !validator.isEmpty(post.message) && validator.isEmail(post.email)) {
            sendPost();
            setError({ showError: false, errorMessage: '' })
        } else if (!validator.isEmail(post.email)) {
            setError({ showError: true, errorMessage: 'Invalid email entered' })
        } else {
            setError({ showError: true, errorMessage: 'One or more fields empty' })
        }
    }

    const sendPost = () => {
        Axios.post('/api/insert', { post: post }).then(
            () => {
                setPost({
                    name: "", message: "", email: ""
                })
                fetchPosts();
            }
        ).catch(
            () => { console.log("Sorry, internal server error. Please try again soon") }
        );
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
            {
                error.showError && <label className="error-message main-error">{error.errorMessage}</label>
            }
            <button className="submit-button" type='submit'>SUBMIT</button>
        </form>
        <div className='Guestbook__posts'>
            {/* if current post has a parent, it's a reply, so don't include it in the posts */}
            {posts.length ? posts.map(post => post.parent === undefined
                ? <Posting post={post} key={post._id} fetchPosts={fetchPosts} />
                : null)
                : <h1 className='main-error'>Sorry, something went wrong and we cannot fetch past posts :( Please try again later</h1>}
        </div>
    </div>);
}

export default Guestbook;