import React from 'react'
import './stylesheets/LandingPage.css'
import Navbar from './Navbar';
import Login from './Login';
import Team from './Team';
// import GetHiredSlider from './components/GetHiredSlider';
import FAQs from './FAQs';
import Footer from './Footer';
export default function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Login/>
        {/* <GetHiredSlider/> */}
        <FAQs/>
        <Team/>
        <Footer/>
    </div>
  )
}
