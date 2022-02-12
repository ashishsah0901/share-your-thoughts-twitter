import React from 'react'
import './sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from '../sidebaroptions/SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar_logo' />
            <SidebarOptions active Icon={HomeIcon} text='Home' />
            <SidebarOptions Icon={SearchIcon} text='Explore' />
            <SidebarOptions Icon={NotificationsNoneIcon} text='Notifications' />
            <SidebarOptions Icon={MailOutlinedIcon} text='Messages' />
            <SidebarOptions Icon={BookmarkBorderIcon} text='Bookmarks' />
            <SidebarOptions Icon={ListAltIcon} text='Lists' />
            <SidebarOptions Icon={PermIdentityIcon} text='Profile' />
            <SidebarOptions Icon={MoreHorizIcon} text='More' />
            <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
