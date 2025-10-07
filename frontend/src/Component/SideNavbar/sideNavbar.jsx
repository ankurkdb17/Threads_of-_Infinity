import React from 'react';
import './sideNavbar.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import HistoryIcon from '@mui/icons-material/History'
import CollectionsIcon from '@mui/icons-material/Collections'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
const SideNavbar = ({sideNavbar}) => {
  return (
    <div className={sideNavbar?"home-sideNavbar": "home-sideNavbarHide"}>
        <div className="sideNavbartop">

        <div className="sideNavbar_topOption" >
            <HomeRoundedIcon/>
            <div className="home_sideNavbarToptitle">Home</div>
            

        </div>
         <div className="sideNavbar_topOption" >
            <img 
  src="https://img.icons8.com/?size=100&id=13369&format=png&color=000000" 
  className="sideNavbar_icon" 
  alt="icon"
/>

            <div className="home_sideNavbarToptitle">Arts</div>
            

        </div>
        <div className="sideNavbar_topOption" >
            <SubscriptionsIcon/>
            <div className="home_sideNavbarToptitle">Subscription</div>
            

        </div>
        </div>
        <div className="home_sideNavbarmiddle">
            <div className="sideNavbar_topOption" >
                <div className="home_sideNavbarToptitle">You</div>
            <KeyboardArrowRightIcon/>
        </div>
        <div className="sideNavbar_topOption" >
            <RecentActorsIcon/>
            <div className="home_sideNavbarToptitle">Your Creation</div>
            

        </div>
        <div className="sideNavbar_topOption" >
            <HistoryIcon/>
            <div className="home_sideNavbarToptitle">History</div>
            

        </div>
        <div className="sideNavbar_topOption" >
            <CollectionsIcon/>
            <div className="home_sideNavbarToptitle">Collections</div>
            

        </div>
        
          <div className="sideNavbar_topOption" >
            <img 
  src="https://img.icons8.com/?size=100&id=40314&format=png&color=000000" 
  className="sideNavbar_icon" 
  alt="icon"
/>
            
            <div className="home_sideNavbarToptitle">Your Arts</div>
            

        </div>
         <div className="sideNavbar_topOption" >
            <img 
  src="https://img.icons8.com/?size=100&id=10247&format=png&color=000000" 
  className="sideNavbar_icon" 
  alt="icon"
/>
            
            <div className="home_sideNavbarToptitle">View Later</div>
            

        </div>
        <div className="sideNavbar_topOption" >
            <ThumbUpOffAltIcon/>
            <div className="home_sideNavbarToptitle">Liked Arts</div>
            

        </div>
        <div className="sideNavbar_topOption" >
            <BookmarksIcon/>
            <div className="home_sideNavbarToptitle">Bookmarked</div>
            

        </div>
        </div>
        <div className="home_sideNavbarmiddle">
            <div className="sideNavbar_topOption" >
           
            <div className="home_sideNavbarToptitleHeader">Subsription</div>
            

        </div>


        </div>

    </div>
  )
}

export default SideNavbar
