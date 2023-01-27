import React from 'react'
import './stylesheets/HomeHeader.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faBell} from '@fortawesome/free-solid-svg-icons'
export default function HomeHeader() {
  return (
    <div className='nav-container'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <div className='brand-name'>VIADUCT</div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item px-3 list-item">
                            <a className="nav-link" href="/">Companies</a>
                        </li>
                        <li className="nav-item px-3 list-item">
                            <a className="nav-link" href="/">Jobs</a>
                        </li>
                    </ul>
                    <form className="flex" >
                        <div className='header-options'>
                            <FontAwesomeIcon className='bell-icon' icon={faBell}/>
                            <button className='upload-project-btn'>Upload Project</button>
                        </div>
                </form>
                </div>
                
            </div>
        </nav>
            
    </div>
  )
}
