import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jj-gault/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jgault87" target="_blank"><FaGithub/></a>
        <a href="https://linkedin.com" target="_blank"><FiDribbble/></a>
        
    </div>
  )
}

export default HeaderSocials