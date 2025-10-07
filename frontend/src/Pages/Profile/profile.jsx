import React from 'react';
import './profile.css';
// FIX 1: Corrected case sensitivity in import path for SideNavbar.
import SideNavbar from '../../Component/SideNavbar/SideNavbar';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {Link} from 'react-router-dom';
// REMOVED: HomePage was unused (Issue 2).

const Profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
        <SideNavbar sideNavbar={sideNavbar}/>
        <div className={sideNavbar?"profile_page":"profile_pageinactive"}>
            <div className="profile_topsection">
                <div className="profile_topsectionprofile">
                    <img src="https://yt3.googleusercontent.com/ytc/AIdro_lxMmE1xkvJP-kL5p1D-09XwvA-O-5w2Fye3NazUalrG4Im5r3hTEBK6AzRrBXRHrcgVg=s160-c-k-c0x00ffffff-no-rj" className='topsectionimage' />
                </div>
                <div className='profile_topsectionabout'>
                <div className='profile_topsectionaboutname'>
                    Pictures_of_Nature
                </div>
                 <div className='profile_topsectioninfo'>
                    @user1 . 10 videos 
                </div>
                 <div className='profile_topsectioninfo'>
                   About us
                </div>


                </div>
            </div>
            <div className="profile_arts">
                <div className="profile_arts_title">Arts  <ArrowRightOutlinedIcon sx={{fontSize:"30px"}}/></div>
                <div className="profilearts">
                    <Link to='/view/988' className="profileart_block">
                        <div className="profileart_block_thumbnail">
                            <img src="https://yt3.googleusercontent.com/ytc/AIdro_lxMmE1xkvJP-kL5p1D-09XwvA-O-5w2Fye3NazUalrG4Im5r3hTEBK6AzRrBXRHrcgVg=s160-c-k-c0x00ffffff-no-rj" alt="" className='profileart_block_thumbnailimg'/>
                        </div>
                        <div className="profileart_block_detail">
                            <div className="profileart_block_detailname">
                                Playing
                            </div>
                            {/* FIX 3: Corrected class name typo from profilebart to profileart */}
                            <div className="profileart_block_detailabout">
                                create at 2025-10-06.
                            </div>
                        </div>
                    </Link>
                    
                    <Link to='/view/980' className="profileart_block">
                        <div className="profileart_block_thumbnail">
                            <img src="https://i.ytimg.com/vi/RlS8rqOXPDk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBr9Yej4gu8EUZJxsNvmth3_c4Wjg" alt="" className='profileart_block_thumbnailimg'/>
                        </div>
                        <div className="profileart_block_detail">
                            <div className="profileart_block_detailname">
                               Drawing Landscape
                            </div>
                            {/* FIX 3: Corrected class name typo from profilebart to profileart */}
                            <div className="profileart_block_detailabout">
                                create at 2025-10-06.
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Profile;
