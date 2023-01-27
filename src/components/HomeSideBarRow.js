import React from 'react'
import './stylesheets/HomeSideBarRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function HomeSideBarRow({imagesrc,name,rank}) {
  return (
    <div>
        <div className='sideBarRow-container'>
            {imagesrc ? (
                <div>
                    <img className='user-profile' src={imagesrc} alt="A user's profile pic" />
                </div>
            ):(
                <div>
                    <FontAwesomeIcon className='user-icon' icon={faUser}/>
                </div>    
            )}
            {name ? (
                <div className='user-name'>
                    <p>{name}</p>
                </div>
            ):(
                <div className='user-name'>
                    <p>User Name</p>
                </div>    
            )}
            {rank ? (
                <div className='user-rank'>
                    <p>#{rank}</p>
                </div>
            ):(
                <div className='user-rank'>
                    <p>#0</p>
                </div>    
            )}
        </div>
        
        
    </div>
  )
}
