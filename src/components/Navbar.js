import React from 'react'
import './stylesheets/Navbar.css'

export default function Navbar() {
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
                            <li className="nav-item px-3">
                                <a className="nav-link" href="/">Companies</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="/">Jobs</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href='/'>About Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className='signUp'>
                                Sign Up
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}
