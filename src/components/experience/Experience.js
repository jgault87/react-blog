import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import SpringAnimation from '../Springin';

const Experience = () => {
  return (
    <SpringAnimation>
      <section id='experience'>
        <h2>Full Stack React & Node Developer</h2>

        <div className='container experience__container'>
          

          {/* end of frontend */}

          
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Node</h4>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>GraphQL</h4>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>REST</h4>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>noSQL</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>SQL</h4>
                </div>
              </article>
            </div>
          
        </div>
      </section>
    </SpringAnimation>
  );
};

export default Experience;
