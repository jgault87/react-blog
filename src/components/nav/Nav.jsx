import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserAstronaut } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  return (
    <nav>
      <a href='#'>
        <AiOutlineHome />
      </a>
      <a href='#about'>
        <FaUserAstronaut />
      </a>
      <a href='#experience'>
        <BiBook />
      </a>
      <a href='#services'>
        <RiServiceLine />
      </a>
      <a href='#contact'>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
