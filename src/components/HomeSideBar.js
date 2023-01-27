import React from 'react'
import HomeSideBarRow from './HomeSideBarRow'
import './stylesheets/HomeSideBar.css'
export default function HomeSideBar() {
  return (
    <div>
        <div className='col homeSideBar-list-container'>
            <div className="row">
                <HomeSideBarRow imagesrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" name="" rank=""/>
            </div>
            <div className='row'>
                <HomeSideBarRow name={"Irsam"} rank={"1"}/>
            </div>
            <div className='row'>
                <HomeSideBarRow name={"Irsam"} rank={"1"}/>
            </div>
        </div>
        
    </div>
  )
}
