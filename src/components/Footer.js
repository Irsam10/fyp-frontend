import React from 'react'
import './stylesheets/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-brandname' >
            <div>VIADUCT</div>
        </div>
        <div className='footer-terms-condition'>
            <div>Terms & Conditions</div>
        </div>
        <div className='footer-privacy-policy'>
            <div>Privacy Policy</div>
        </div>
        <div className='footer-logos'>
            <FontAwesomeIcon className='logo-facebook' icon={faFacebook} />
            <FontAwesomeIcon className='logo-instagram' icon={faInstagram} />        
        </div>
        <div className='footer-contactus'>
            <div>CONTACT US</div>
        </div>
    </div>
  )
}
