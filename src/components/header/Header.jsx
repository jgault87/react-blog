import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/welcome.jpg'
import HeaderSocial from './HeaderSocials'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>JJ Gault</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        
        <div className="me">
          <img src={ME} alt="me" />
          
        </div>

        <a href="#contact" className="scroll__down">  use the navbar</a>
       
      
        </div>
      
      </header>
  )
}

export default Header