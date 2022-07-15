import React from 'react'
import './footer.css' 
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {HiOutlineMoon} from 'react-icons/hi'

const Footer = () => {
  return (
    <footer>
     

      <ul className="permalinks">
      
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jj-gault/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/jgault87" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="#home" ><HiOutlineMoon/></a>

      </div>

      <div className="footer__copyright">
        <small>Thanks for stopping by</small>
      </div>
    </footer>
  )
}

export default Footer