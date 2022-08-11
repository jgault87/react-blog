import React from 'react';
import './about.css';
import ME from '../../assets/me.webp';
import { FaAward } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import SpringAnimation from '../Springin';
import CTA from '../../components/header/CTA';

const About = ({ handlePageChange }) => {
  return (
    <section id='about'>
      {/* <h5>Get To Know </h5> */}
      <h2>Hello, I'm JJ.</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='AboutImage' />
          </div>
        </div>

        <SpringAnimation>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>University of Denver</h5>
                <small>2022 Full Stack Bootcamp Alumni</small>
              </article>

              <article className='about__card'>
                <FaReact className='about__icon' />
                <h5>Full Stack </h5>
                <small>React and Node Developer</small>
              </article>

              <article
                href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className='about__card'
              >
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>View my recent projects</small>
              </article>
            </div>
            <p>
              <h4>Early-career developer with a passion for learning.</h4>I
              began my coding journey in February of 2022 and I have been
              obsessed ever since.
              <h4> Objective-Driven: </h4>
              Consistent problem solver, present a problem and I will find a
              solution.
              <h4> Proactive: </h4> First in-line volunteer to face new
              challenges and step out of the comfort zone.
            </p>
            <CTA handlePageChange={handlePageChange} />
            {/* <a
              href='#contact'
              onClick={() => handlePageChange('Contact')}
              className='btn btn-primary'
            >
              Let's Talk
            </a> */}
          </div>
        </SpringAnimation>
      </div>
    </section>
  );
};

export default About;
