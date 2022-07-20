import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    
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
            <h3>Software Development</h3>
          </div>
          <ul className="service__list">
            
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Pure Functions and modular code implementation</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Solid Design Principles</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Adaptable programming ideology</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Follows Agile development workflows </p>
            </li>
          </ul>
          {/* {end of Web Development*/}
        </article>
        <article className="service">
          <div className="service__head">
            <h3>API deployment</h3>
          </div>
          <ul className="service__list">
            <li> 
            <BiCheck className='services__list-icon'/>
            <p>mySQL, noSQL (MongoDB) and GraphQL API implementation</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Object Relational Mapping with REST APIs</p>
            </li>
            <li>
            <BiCheck className='services__list-icon'/>
            <p>Secure endpoints with encryption and JWST</p>
            </li>
          </ul>
        </article>
         {/* {end of content creation} */}
      </div>
    </section>
   
  )
}

export default Services