import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react'
import './post.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef((props, ref) => {
    const { displayName, userName, verified, message, image, profile, timestamp } = props;
    return (
        <div className='post' ref={ref}>
            <div className="post_avatar">
                <Avatar src={profile} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post_headerSpecial">
                                {verified === true && <VerifiedUserIcon className="post_badge" />} @
                                {userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{message}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
    )
});

export default Post
