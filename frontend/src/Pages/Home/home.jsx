import React from 'react'
import SideNavbar from '../../Component/SideNavbar/sideNavbar' // Component folder name 'Component'
import HomePage from '../../Component/HomePage/homePage'       // Component folder name 'Component'
import "./home.css"
const Home = ({sideNavbar}) => {
  return (
    <div>
     
        <SideNavbar sideNavbar={sideNavbar}/>
        
        <HomePage sideNavbar={sideNavbar}/>
    </div>
  )
}

export default Home
