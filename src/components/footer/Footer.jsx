import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FaTwitterSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Future Workplace</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#expeirience'>Expeirience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.com"><GrInstagram/></a>
        <a href="https://twitter.com"><FaTwitterSquare/></a>
      </div>
  
      <div className="footer_copyright">
        <small>&copy; </small>
      </div>
    </footer>
  )
}

export default Footer