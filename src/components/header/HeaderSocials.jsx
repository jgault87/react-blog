import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {HiOutlineMoon} from 'react-icons/hi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jj-gault/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/jgault87" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="#home" ><HiOutlineMoon/></a>
        
    </div>
  )
}

export default HeaderSocials