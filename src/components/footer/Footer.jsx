import React from 'react'
import './footer.css' 
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
     

      <ul className="permalinks">
      
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jj-gault/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/jgault87" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiDribbble/></a>

      </div>

      <div className="footer__copyright">
        <small>Thanks for stopping by</small>
      </div>
    </footer>
  )
}

export default Footer