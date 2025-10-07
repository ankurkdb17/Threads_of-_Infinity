import React,{useState} from 'react'
import './navbar.css'
import WidgetsIcon from '@mui/icons-material/Widgets';
// import CollectionsBookmarkSharpIcon from '@mui/icons-material/CollectionsBookmarkSharp';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Person4RoundedIcon from '@mui/icons-material/Person4Rounded';
import {Link,useNavigate} from 'react-router-dom';
import Login from '../Login/login';



const Navbar = ({setSideNavbarfunc,sideNavbar}) => {
    const[userPic,setUserPic]=useState("https://wallpapercave.com/avt/UnknownUser.png?v=4");
    const[navbarModal,setNavbarModal]=useState(false);
    const navigate=useNavigate();
    const[login,setLogin]=useState(false);
    const onclickOfPopUpOption=(button)=>{
        setNavbarModal(false);
        if(button=="login"){
setLogin(true);
        }else{

        }
    }
    const handleprofile=()=>{
        navigate('/user/9797');
        setNavbarModal(false)
    }
    const setloginmodel=()=>{
        setLogin(false);
    }
    const handleClick=()=>{
 setNavbarModal(prev=>!prev);
    }
    const sideNavbarfunc=()=>{
        setSideNavbarfunc(!sideNavbar);
    }
    return (
    <div className='navbar'>
        <div className="navbar-left">
            <div className="navbarmenu" onClick={sideNavbarfunc}>
                <WidgetsIcon sx={{color:"black"}}/>
            </div>
            <Link to={"/"}className="navbar_appicon">
                {/* <CollectionsBookmarkSharpIcon sx={{fontsize:"34px"}} className='navbar_appimage'/> */}
                <div className="navbar_title">ArtEcho</div>
            </Link>
        </div>
        <div className="navbar-middle">
            <div className="navbar_searchingine">
                <input type='text' placeholder= "Search" className='navbar_searchingineInput'/>
                <div className="navbar_searchIconBox"><SearchRoundedIcon sx={{ fontSize:"28px",color:"black"}} /></div>
            </div>
            <div className="navbar_mike">
                <KeyboardVoiceRoundedIcon/>
            </div>
        </div>
        <div className="navbar-right">
            <Link to={'/767/upload'} className="create">
                
 <img 
  src="https://img.icons8.com/?size=100&id=efXxtDBBjc22&format=png&color=000000" 
  className="image" 
  alt="icon"
/>
<div>
                    create
                </div>

            </Link>
            <div className="notification">
                <NotificationsRoundedIcon/>
            </div>
           

             <img onClick ={handleClick}src={userPic}className='navbar-right-logo' alt='Logo'/>

             {navbarModal && 
              <div className="navbar-modal">
                <div className="navbar-modal-option" onClick={handleprofile}>Profile</div>
                <div className="navbar-modal-option"onClick={()=>onclickOfPopUpOption("logout")}>Logout</div>
                <div className="navbar-modal-option" onClick={()=>onclickOfPopUpOption("login")}>Login</div>

             </div>}
             
        </div>
        {
            login &&<Login setloginmodel={setloginmodel}/>
        }


    </div>
  )
}

export default Navbar
