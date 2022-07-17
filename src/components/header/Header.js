import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/welcome0.webp'
import HeaderSocial from './HeaderSocials'
import SpringAnimation from '../Springin'


const Header = ({handlePageChange}) => {
  return (
    <>
    <header>
      <div className="container header__container">
      <SpringAnimation>
        <h5>hello I'm</h5>
        <h1>JJ Gault</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA handlePageChange={handlePageChange}/>
        <HeaderSocial />
        </SpringAnimation>

        <div className="me">
          <img src={ME} alt="me" />
          
          
        </div>

        {/* <a href="#contact" className="scroll__down">  use the navbar</a> */}
        

        
        </div>

        {/* <div className="container header__container-bottom">
        <h4>Welcome to my landing page</h4> 
        <h4>Use the navbar to take a look around</h4></div> */}
      </header>
      
      
      </>
  )
}

export default Header