import {React,useState} from 'react'
import './signUp.css';
import{Link} from 'react-router-dom'


const SignUp = () => {
   const [signUpField,setSignUpField]=useState({"channelName":"","userName":"","password":"","about":"","profilePic":""});
   const [upload_image_url,setUpload_image_url]=useState("https://tse2.mm.bing.net/th/id/OIP._Yy_UBjdT84dGcp7vMVj3gHaHa?pid=Api&P=0&h=180")
     const handleOnchangeinput=(event,name)=>{
       setSignUpField(
         {
           ...signUpField,[name]:event.target.value
         }
       )
   
     }
  return (
    <div className='signUp'>
        <div className="signup_card">
            <div className="signup_title">
                <div className="navbar_title">ArtEcho</div>
                SignUp
            </div>
            <div className="signUp_Inputs">
                <input type="text" className='signUp_Inputs_inp'value={signUpField.channelName} onChange={(e)=>handleOnchangeinput(e,"channelName")} placeholder='Channel Name'/>
                <input type="text" className='signUp_Inputs_inp'value={signUpField.userName}onChange={(e)=>handleOnchangeinput(e,"userName")} placeholder='User Name'/>
                <input type="text" className='signUp_Inputs_inp'value={signUpField.password}onChange={(e)=>handleOnchangeinput(e,"password")} placeholder='Password'/>
                <input type="text" className='signUp_Inputs_inp'value={signUpField.about}onChange={(e)=>handleOnchangeinput(e,"about")} placeholder='About your channel'/>
                <div className="image_upload_signup">
                    <input type="file"  placeholder='ProfilePic'/>
                    <div className="image_upload_signup_div">
                        <img src={upload_image_url} className='image_default_signUp' />
                    </div>
                </div>
                <div className="signUpBtns">
                    <div className="signUpBtn">
                         SignUp
                    </div>
                     <Link to={'/'} className="signUpBtn">
                        Home Page
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
