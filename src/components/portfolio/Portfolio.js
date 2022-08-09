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
      "This application is a collaboratively developed social media application using the full-stack MVC paradigm. The concept is a social media website for pet-oriented content and showcasing a user's pet with pictures, traits and personality. It's also a place for interacting with other pet owners. We like to think of it as a twitter-like website for our furry friends. Read more about the technologies used on Github and try it out on Heroku!",
  },
  {
    id: 1,
    image: IMG1,
    title: 'Teacup Yorkies (Full-Stack Application)',
    github: 'https://github.com/jgault87/teacup-yorkies',
    demo: 'https://howler-forpets.herokuapp.com',
    description:
      "This application is a collaboratively developed social media application using the full-stack MVC paradigm. The concept is a social media website for pet-oriented content and showcasing a user's pet with pictures, traits and personality. It's also a place for interacting with other pet owners. We like to think of it as a twitter-like website for our furry friends. Read more about the technologies used on Github and try it out on Heroku!",
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog Buster (Full-stack application)',
    github: 'https://github.com/jgault87/blog-buster',
    demo: 'https://mighty-savannah-09972.herokuapp.com/',
    description:
      'this project is my first endeavor into creating a full-stack application that makes use of front end, back end and database techs that culminate in a tech blog website that verifies user credentials, uses cookies and session data to handle user queries and UI is affected by user states. It uses bcrypt hooks to hash password data, handlebars webviews engine and Sequelize to hand the SQL database. Visit the Github page to learn what other technologies/languages were used and the deployed link to heroku!',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather Machine',
    github: 'https://github.com/jgault87/weather-machine',
    demo: 'https://jgault87.github.io/weather-machine/',
    description:
      'This project is a weather dashboard that calls the One Call open weather API and dynamically generates weather forecast, UVI index data, saves previous searches in local browser storage.',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Team Visualizer',
    github: 'https://github.com/jgault87/team_visualizer',
    demo: 'https://github.com/jgault87/team_visualizer',
    description:
      'This is a handy node application which makes use of inquirer prompts to capture user input and dynamically generate an HTML page with profile information of the following individual team member roles: Manager, Engineer and Intern. It extends javaScript classes to pass along inherited properties which will then parse the information to an HTML file which makes use of Materialize CSS framework so that all of the styling and script is included in the HTML file.',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Generate readYou',
    github: 'https://github.com/jgault87/generateReadYou',
    demo: 'https://github.com/jgault87/generateReadYou',
    description:
      'this application uses node.js and inquirer to capture responses in the terminal and then output them into a readme file with a traversable interface and organization. You can use this to generate a readme for any application using the markdown language.',
  },
  {
    id: 6,
    image: IMG6,
    title: 'MongoDB Social Network API',
    github: 'https://github.com/jgault87/mongolian-api',
    demo: 'https://github.com/jgault87/mongolian-api',
    description:
      'Clean framework for MongoDB backend using Express, MongoDB and MongooseJS',
  },

];

const Portfolio = () => {
  return (
    
    <section id='portfolio'>
      
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        {
        projects.map(({ id, image, title, github, demo }) => {
          return (
            
            <SpringAnimation>

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

            </SpringAnimation>
            
          );
        })}
      </div>
    </section>
   
  );
};

export default Portfolio;
