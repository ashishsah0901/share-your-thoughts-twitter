import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import TweetBox from '../tweetbox/TweetBox'
import './feed.css'
import db from '../../firebase';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
        onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []);
    return (
        <div className='feed'>
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <FlipMove >
                {posts.map(post => (
                    <Post key={post.id} verified={post.data.verified} profile={post.data.profile} displayName={post.data.displayName} message={post.data.message} image={post.data.image} userName={post.data.userName} timestamp={post.data.timestamp} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
