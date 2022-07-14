import React from 'react';
import './about.css';
import ME from '../../assets/me.webp';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { AnimateKeyframes } from "react-simple-animate";

const About = ({handlePageChange}) => {
  return (
    <AnimateKeyframes
    play
    duration={0.7}
    keyframes={['opacity: 0', 'opacity: 1']}
    iterationCount='1'
  >
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='AboutImage' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>University of Denver</h5>
              <small>Current Full-Stack web development student</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Placeholder</small>
            </article>

            
            <article href='#portfolio' onClick={() => handlePageChange('Portfolio')} className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>View my recent projects</small>
            </article>
            

          </div>
          <p>
          Full-Stack software developer with big aspirations.
            Eagerly transitioning from a successful insurance claim career into an industry I am truly passionate about and am determined to continue building my skill-set as a developer.

            Objective-Driven
            Consistent problem solver, present a problem and I will find a solution.

            Proactive
            First in-line volunteer to face new challenges and step out of the comfort zone.
          </p>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
    </AnimateKeyframes>
  );
};

export default About;
