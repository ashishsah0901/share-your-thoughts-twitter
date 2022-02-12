import React from 'react'
import './widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <SearchIcon className='widgets_searchIcon' />
                <input type="text" placeholder='Search Twitter' />
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1431043784373121027"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="selenagomez"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://github.com/ashishsah0901"}
                    options={{ text: "Great project dude.", via: "selenagomez" }}
                />
            </div>
        </div>
    )
}

export default Widgets
