import React from 'react'
import './homePage.css'
import {Link} from 'react-router-dom'

const HomePage = ({sideNavbar}) => {
    const options=["All","Photography","Writings","Music","Paintings","Dance","Textile-Arts","Videos"];
  return (
    <div className={sideNavbar?'homePage':"homePagechange"}>
        <div className="homePage_options">
           {
            options.map((item,index)=>{
                 return(
                    <div key={index}className="homePage_option">
                {item}
            </div>
                 )
            })
           }
           
        </div>
        <div className={sideNavbar?"home_mainPage":"home_mainPagenew"}>
          
            <Link to={'/view/9897'} className="art_collection">
              <div className="coverpage">
                <img src="https://i.ytimg.com/vi/yyw_GTNzXFc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaqJhlg6cJd6KQPc3J5pqRNlxleQ"  className="coverpagepic" />
              </div>
              <div className="artcreator">
                <div className="profile">
            <img src="https://yt3.ggpht.com/CofMW7AEzKvJogOyUg6_k_H0_jlaa4y2yC0mm-cbjvEpAv_IdOTxttHMIDFM3bD_pM6BBzS4Y44=s68-c-k-c0x00ffffff-no-rj"  className="art_profile" />
                </div>
                <div className="titlebox">
                    <div className="art_title">
                        Art of mahadev
                    </div>
                    <div className="usename">
                        @User1
                    </div>
                    <div className="art_views">
                        300 Likes
                    </div>
                </div>
              </div>
            </Link>
             <div className="art_collection">
              <div className="coverpage">
                <img src="https://i.ytimg.com/vi/yyw_GTNzXFc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaqJhlg6cJd6KQPc3J5pqRNlxleQ" className="coverpagepic" />
              </div>
              <div className="artcreator">
                <div className="profile">
            <img src="https://yt3.ggpht.com/CofMW7AEzKvJogOyUg6_k_H0_jlaa4y2yC0mm-cbjvEpAv_IdOTxttHMIDFM3bD_pM6BBzS4Y44=s68-c-k-c0x00ffffff-no-rj"  className="art_profile" />
                </div>
                <div className="titlebox">
                    <div className="art_title">
                        Art of mahadev
                    </div>
                    <div className="usename">
                        @User1
                    </div>
                    <div className="art_views">
                        300 Likes
                    </div>
                </div>
              </div>
            </div>
            
        </div>

    </div>
  )
}

export default HomePage
