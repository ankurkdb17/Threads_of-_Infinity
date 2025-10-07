// App.jsx

import './App.css'
import Navbar from './Component/Navbar/navbar'
import Arts from './Pages/Arts/art'
import Home from './Pages/Home/home'
import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Profile from './Pages/Profile/profile'
import ArtUpload from './Pages/ArtUpload/artUpload'
import SignUp from './Pages/SignUp/signUp'

function App() {
  const[sideNavbar,setSideNavbar]=useState(true)

  const setSideNavbarfunc=(value)=>{
      setSideNavbar(value);
  }
  return (
    <div className="App">
    <Navbar setSideNavbarfunc={setSideNavbarfunc} sideNavbar={sideNavbar}/>
     
   <Routes>
    {/* ADD THE 'path' PROP HERE */}
    <Route path="/" element={<Home sideNavbar={sideNavbar}/>}/>
    <Route path='/view/:id' element={<Arts/>}/>
    <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar}/>}/>
    <Route path='/:id/upload' element={<ArtUpload/>}/>
    <Route path='/signup/:id' element={<SignUp/>} />
   </Routes>

    </div>
  );
}

export default App;
