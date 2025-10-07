import {React,useState} from 'react'
import './art.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {Link} from 'react-router-dom';
const Arts = () => {
    const[message,setMessage]=useState("");
  return (
    <div className='art'>
        <div className="videopost_section">
            <div className="video_art">
                <video width="400" controls autoPlay className='video_art_video'>
                    <source src={"https://s17.aconvert.com/convert/p3r68-cdx67/no8eq-c2xkl.mp4"} type="video/mp4"/>
                    <source src={"https://s17.aconvert.com/convert/p3r68-cdx67/no8eq-c2xkl.mp4"} type="video/webm"/>

                    your browser doesnot support the video tag.
                </video>
            </div>
 <div className="art_about">
    <div className="upper">
 <div className="art_title">
                {"Most wonderful Indian Classical Dance "}

            </div>
      <div className="likeblock">
        <BookmarkBorderOutlinedIcon/>
        </div>      
    </div>
           
            <div className="profileblock">
                <div className="profileblockleft">
                    <Link to={'/user/988'}className="profileblockleftimage">
<img src="https://yt3.ggpht.com/ytc/AIdro_mMmcS-ifIvImQRNW2wETB6YcoyxcOo4P6RMgQm30Vhbas=s88-c-k-c0x00ffffff-no-rj" className="profileleftimage"/>
                </Link>
                <div className="profileviews">
                    <div className="profilename">{"user1"}</div>
                    <div className="profiledate">{"2025-10-06"}</div>
                </div>
                <div className="subscribebutton">
                    Subscribe
                </div>
                    </div>
                    
                 <div className="likeblock">
                    <div className="likeoption">
                         <FavoriteBorderOutlinedIcon/>
                         <div className="likescount">{100}</div>
                    </div>
                    
                    </div>   
                    
            </div>
            <div className="artabout">
                    <div>This a decorates ancient egypt
                </div>
            </div>
        </div>
        <div className="comment-section">
            <div className="commentsectiontitle">
                5 comments
            </div>
            <div className="selfcomment">
                <img src="https://wallpapercave.com/avt/UnknownUser.png?v=4" className='selfcommentimage' />
                <div className="addcomment">
                    <input type="text" className='addcommentInput' placeholder='add a comment'value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                   <div className="cancel">
                    <div className="cancelcomment">
                        Cancel
                    </div>
                    <div className="cancelcomment">
                        Comment
                    </div>
                   </div>
                
                </div>
            </div>
            <div className="othercomment">
                <div className="selfcomment">
                    <img src="https://yt3.ggpht.com/ytc/AIdro_mMmcS-ifIvImQRNW2wETB6YcoyxcOo4P6RMgQm30Vhbas=s88-c-k-c0x00ffffff-no-rj" className='selfcommentimage' />
                <div className="others_commentsection">
                    <div className="othercomment_section_header">
                        <div className="channel_name">Username</div>
                        <div className="timingsothers">2025-10-06</div>
                    </div>
                    <div className="othsrcommentsection_comment">
                        Wow! So beautiful.
                    </div>
                </div>

                </div>
                <div className="selfcomment">
                    <img src="https://yt3.ggpht.com/ytc/AIdro_mMmcS-ifIvImQRNW2wETB6YcoyxcOo4P6RMgQm30Vhbas=s88-c-k-c0x00ffffff-no-rj" className='selfcommentimage' />
                <div className="others_commentsection">
                    <div className="othercomment_section_header">
                        <div className="channel_name">Username</div>
                        <div className="timingsothers">2025-10-06</div>
                    </div>
                    <div className="othsrcommentsection_comment">
                        Wow! So beautiful.
                    </div>
                </div>

                </div>
                <div className="selfcomment">
                    <img src="https://yt3.ggpht.com/ytc/AIdro_mMmcS-ifIvImQRNW2wETB6YcoyxcOo4P6RMgQm30Vhbas=s88-c-k-c0x00ffffff-no-rj" className='selfcommentimage' />
                <div className="others_commentsection">
                    <div className="othercomment_section_header">
                        <div className="channel_name">Username</div>
                        <div className="timingsothers">2025-10-06</div>
                    </div>
                    <div className="othsrcommentsection_comment">
                        Wow! So beautiful.
                    </div>
                </div>

                </div>
            </div>
        </div>
        </div>
       
        <div className="artsuggestions">
       <div className="artsuggestions_block">
        <div className="artsuggestion_thumbnail">
            <img src="https://i.ytimg.com/vi/yyw_GTNzXFc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaqJhlg6cJd6KQPc3J5pqRNlxleQ" className='artsuggestionthumbnailimage'/>
        </div>
        <div className="artsuggestion_about">
            <div className="artsuggestion_about_title">
                I ate Lunches at every country
            </div>
            <div className="artsuggestion_about_profile">
                Nick Digiovanni
            </div>
            <div className="artsuggestion_about_profile">
               100k views .1 day ago
            </div>
        </div>
       </div>
       <div className="artsuggestions_block">
        <div className="artsuggestion_thumbnail">
            <img src="https://i.ytimg.com/vi/yyw_GTNzXFc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaqJhlg6cJd6KQPc3J5pqRNlxleQ" className='artsuggestionthumbnailimage'/>
        </div>
        <div className="artsuggestion_about">
            <div className="artsuggestion_about_title">
                I ate Lunches at every country
            </div>
            <div className="artsuggestion_about_profile">
                Nick Digiovanni
            </div>
            <div className="artsuggestion_about_profile">
               100k views .1 day ago
            </div>
        </div>
       </div>
       <div className="artsuggestions_block">
        <div className="artsuggestion_thumbnail">
            <img src="https://i.ytimg.com/vi/yyw_GTNzXFc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDaqJhlg6cJd6KQPc3J5pqRNlxleQ" className='artsuggestionthumbnailimage'/>
        </div>
        <div className="artsuggestion_about">
            <div className="artsuggestion_about_title">
                I ate Lunches at every country
            </div>
            <div className="artsuggestion_about_profile">
                Nick Digiovanni
            </div>
            <div className="artsuggestion_about_profile">
               100k views .1 day ago
            </div>
        </div>
       </div>
       
        </div>
    </div>
  )
}

export default Arts
