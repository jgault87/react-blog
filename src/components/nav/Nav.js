import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserAstronaut } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';


//use State hook to set change active classes onclick
//terinary operator for if else state

const Nav = ({currentPage, handlePageChange}) => {
  
  return (
    <nav>
      {/* <a href='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'active' : ''}>
        <AiOutlineHome />
      </a> */}
      <a href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active' : ''}>
        <FaUserAstronaut />
      </a>
      <a href='#experience' onClick={() => handlePageChange('Experience')} className={currentPage === 'Experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
