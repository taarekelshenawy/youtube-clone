import React from 'react';
import "./Navbar.css";
import menuicon from "../Images/menu.png";
import logo from "../Images/logo.png";
import search from "../Images/search.png";
import upload from "../Images/upload.png";
import more from "../Images/more.png";
import notification from "../Images/notification.png";
import profile_img from "../Images/profile.png";
import { Link } from 'react-router-dom';

export default function Navbar({isSidebaropen,setIsSidebaropen}) {

  return (
    <nav>
        <div className='nav-left'>
          <img src={menuicon} alt='menu-image'  className='menuicon' onClick={()=>setIsSidebaropen(!isSidebaropen)}></img>
           <Link to={"/"}><img src={logo} alt='nav-logo' width="100px"></img></Link> 
        </div>
        <div className='nav-middle'>
            <input type='text' placeholder='Search'></input>
            <img src={search} alt='search-icon'></img>

        </div>
        <div className='nav-right'>
            <img src={upload} alt='nav-upload'></img>
            <img src={more} alt='nav-more'></img>
            <img src={notification} alt='nav-notification'></img>
            <img src={profile_img} alt='user-profile' className='userprofile'></img>
        </div>
    </nav>
 
  )
}
