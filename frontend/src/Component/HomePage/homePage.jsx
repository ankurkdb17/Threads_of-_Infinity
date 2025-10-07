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
          
             <div className="art_collection">
              <div className="coverpage">
                <img src="https://i.ytimg.com/vi/yyw_GTNzXFc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaqJhlg6cJd6KQPc3J5pqRNlxleQ" alt="Coverpage" className="coverpagepic" />
                <div className="timing_thumbnail">
                  5:02
                </div>
              </div>
              
            </div>
            
        </div>

    </div>
  )
}

export default HomePage
