import React from 'react'
import HomeHeader from './HomeHeader'
import HomeSideBar from './HomeSideBar'

import './stylesheets/HomePage.css'
export default function HomePage() {
  return (
    <div>
        <HomeHeader/>
        {/* AppBody */}
        <div className="Appbody">
            <HomeSideBar/>
            {/* Feed */}
            {/* RightBar */}
        </div>
        
        
        
    </div>
  )
}
