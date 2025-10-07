import React from 'react'
import './artUpload.css'
import {Link} from 'react-router-dom'

const ArtUpload = () => {
  return (
    <div className='artUpload'>
        <div className="uploadbox">
            <div className="uploadvideotitle">
                <div className="navbar_title">ArtEcho</div>
                Upload Arts
            </div>
            <div className="uploadForm">
                <input type="text" placeholder="Title of Video" className='uploadFormInputs' />
                <input type="text" placeholder="Description" className='uploadFormInputs' />
                <input type="text" placeholder="Category" className='uploadFormInputs' />
                <div>Thumbnail<input type='file' accept="image/*"/></div>
                <div>Video <input type='file' accept="video/mp4,video/webm,video/*"/></div>
            </div>
            <div className="uploadbutton">
                <div className="uploadbuttonform">
                    Upload
                </div>
                <Link to={'/'} className="uploadbuttonform">
                    Home
                </Link>
            </div>
        </div>
        </div>
  )
}

export default ArtUpload
