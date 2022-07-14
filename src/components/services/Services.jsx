import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { AnimateKeyframes } from "react-simple-animate";

const Services = () => {
  return (
    <AnimateKeyframes
    play
    duration={0.7}
    keyframes={['opacity: 0', 'opacity: 1']}
    iterationCount='1'
  >
    <section id='services'>
      <h5>what I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
          <li>
            <BiCheck className='services__list-icon'/>
            <p>Responsive mobile design</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p> Functional applications that are intuitive and fun to use</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>CSS animations, transitions and uniform design concepts</p>
            </li>
          </ul>
          {/* {end of UI/UX} */}
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
          {/* {end of Web Development*/}
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li> 
            <BiCheck className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
         {/* {end of content creation} */}
      </div>
    </section>
    </AnimateKeyframes>
  )
}

export default Services