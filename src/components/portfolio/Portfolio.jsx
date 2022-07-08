import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/teacup.jpg';
import IMG2 from '../../assets/blogger.jpg';
import IMG3 from '../../assets/weather.jpg';
import IMG4 from '../../assets/team.jpg';
import IMG5 from '../../assets/generate.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Teacup Yorkies (Full-Stack Application)',
    github: 'https://github.com/jgault87/teacup-yorkies',
    demo: 'https://howler-forpets.herokuapp.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog Buster (Full-stack application)',
    github: 'https://github.com/jgault87/blog-buster',
    demo: 'https://mighty-savannah-09972.herokuapp.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather Machine',
    github: 'https://github.com/jgault87/weather-machine',
    demo: 'https://jgault87.github.io/weather-machine/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Team Visualizer',
    github: 'https://github.com/jgault87/team_visualizer',
    demo: 'https://github.com/jgault87/team_visualizer',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Generate readYou',
    github: 'https://github.com/jgault87/generateReadYou',
    demo: 'https://github.com/jgault87/generateReadYou',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
