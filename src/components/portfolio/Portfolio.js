import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/teacup.webp';
import IMG2 from '../../assets/blogger.webp';
import IMG3 from '../../assets/weather.webp';
import IMG4 from '../../assets/team.webp';
import IMG5 from '../../assets/generate.webp';
import IMG6 from '../../assets/mongobackend.webp';
import IMG7 from '../../assets/moovyspace.png';
import SpringAnimation from '../Springin';

const projects = [
  {
    id: 7,
    image: IMG7,
    title: 'MoovySpace (MERN Stack Application)',
    github: 'https://github.com/jgault87/MoovySpace',
    demo: 'https://moovyspace.herokuapp.com/feed',
    description:
      "MoovySpace is a platform for cinephiles to log movies they've watched, star movies that they particularly liked, and see what movies other users have liked in a live feed.",
  },
  {
    id: 1,
    image: IMG1,
    title: 'Teacup Yorkies (Full-Stack Application)',
    github: 'https://github.com/jgault87/teacup-yorkies',
    demo: 'https://howler-forpets.herokuapp.com',
    description:
      "A pet-centric social media website where you can interact with other users, play games, and enjoy random cat facts/dog pics from pet APIS.",
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog Buster (Full-stack application)',
    github: 'https://github.com/jgault87/blog-buster',
    demo: 'https://mighty-savannah-09972.herokuapp.com/',
    description:
      'A barebones blog website built using mySQL and express',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather Machine',
    github: 'https://github.com/jgault87/weather-machine',
    demo: 'https://jgault87.github.io/weather-machine/',
    description:
      'Weather landing page using third-party OneCall Weather API and dynamically generated interface.',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Team Visualizer',
    github: 'https://github.com/jgault87/team_visualizer',
    description:
      'Node application for generating a static HTML file based on user input',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Generate readYou',
    github: 'https://github.com/jgault87/generateReadYou',
    description:
      'Node application for generating a readMe in Markdown language based on user input',
  },
  {
    id: 6,
    image: IMG6,
    title: 'MongoDB Social Network API',
    github: 'https://github.com/jgault87/mongolian-api',
    description:
      'REST API server using MongoDB (noSQL), Express and MongooseJS',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        {projects.map(({ id, image, title, github, demo, description }) => {
          return (
            <SpringAnimation>
              <article
                key={id}
                style={{ textAlign: 'center' }}
                className='portfolio__item'
              >
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4 style={{ marginBottom: '1.5rem' }}>{description}</h4>
                <div className='portfolio__item-cta'>
                  <a  href={github} className='btn'>
                    Github
                  </a>
                  {demo ? (
                    <a 
                      href={demo}
                      className='btn btn-primary'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            </SpringAnimation>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
