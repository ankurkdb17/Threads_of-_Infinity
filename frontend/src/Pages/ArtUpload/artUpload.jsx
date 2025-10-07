import {React,useState} from 'react'
import './artUpload.css'
import {Link} from 'react-router-dom'

const ArtUpload = () => {
    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoType": "", "thumbnail": "", "videoLink": "" })
    const handleOnchangeinput=(event,name)=>{
         setInputField(
            {
                ...inputField,[name]:event.target.value
            }
         )
    }
  return (
    <div className='artUpload'>
        <div className="uploadbox">
            <div className="uploadvideotitle">
                <div className="navbar_title">ArtEcho</div>
                Upload Arts
            </div>
            <div className="uploadForm">
                <input type="text" value={inputField.title} onChange={(e)=>handleOnchangeinput(e,"title")} placeholder="Title of Video" className='uploadFormInputs' />
                <input type="text"value={inputField.description} onChange={(e)=>handleOnchangeinput(e,"description")}placeholder="Description" className='uploadFormInputs' />
                <input type="text"value={inputField.videoType}onChange={(e)=>handleOnchangeinput(e,"videoType")} placeholder="Category" className='uploadFormInputs' />
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
