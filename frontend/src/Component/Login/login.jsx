import React,{useState} from 'react'
import './login.css';
import {Link} from 'react-router-dom'


const Login = ({setloginmodel}) => {
  const [loginField,setLoginField]=useState({"userName":"","password":""});
  const handleOnchangeinput=(event,name)=>{
    setLoginField(
      {
        ...loginField,[name]:event.target.value
      }
    )

  }
  
  return (
    <div className='login'>
        <div className="login_card">
            <div className="title_card">
              <div className="navbar_title">ArtEcho</div>
              Login
            </div>
            <div className="login_credential">
              <div className="username_login">
                <input className="username_loginusername" value={loginField.userName}  onChange={(e)=>handleOnchangeinput(e,"userName")} placeholder="username" type="text" />
              </div>
               <div className="username_login">
                <input className="username_loginusername" value={loginField.password} onChange={(e)=>handleOnchangeinput(e,"password")} placeholder="Password" type="text" />
              </div>
              
            </div>
            <div className="login_buttons">
              <div className="loginbtn">
                   Login
              </div>
               <Link to={'/signup/9974'} onClick={()=>setloginmodel()} className="loginbtn">
                  SignUp
              </Link>
               <div className="loginbtn" onClick={()=>setloginmodel()}>
                  Cancel
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login
