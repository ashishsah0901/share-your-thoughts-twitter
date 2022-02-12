import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './tweetbox.css'
import { collection, addDoc, serverTimestamp } from '@firebase/firestore'
import db from '../../firebase';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const submitTweet = (e) => {
        e.preventDefault();
        if (tweetMessage.trim() !== '') {
            addDoc(collection(db, 'posts'), {
                displayName: 'Selena Gomez',
                image: tweetImage,
                message: tweetMessage,
                profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/191125_Selena_Gomez_at_the_2019_American_Music_Awards.png/220px-191125_Selena_Gomez_at_the_2019_American_Music_Awards.png',
                userName: 'selenagomez',
                timestamp: serverTimestamp()
            });
            setTweetImage('')
            setTweetMessage('')
        }
    }
    return (
        <div className='tweetbox'>
            <form>
                <div className="tweetbox_input">
                    <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/191125_Selena_Gomez_at_the_2019_American_Music_Awards.png/220px-191125_Selena_Gomez_at_the_2019_American_Music_Awards.png' />
                    <input value={tweetMessage} onChange={(e) => { setTweetMessage(e.target.value) }} type="text" placeholder="What's happening..." />
                </div>
                <input value={tweetImage} onChange={(e) => { setTweetImage(e.target.value) }} className='twetbox_imageInput' type="text" placeholder="Optional: Enter Image URL" />
                <Button onClick={submitTweet} className='tweetbox_tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
