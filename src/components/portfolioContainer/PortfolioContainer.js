import React, { useState } from 'react';
import Home from '../header/Header';
import About from '../about/About';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Nav from '../nav/Nav';
import SpringAnimation from '../Springin';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return ( 
      
        <SpringAnimation>

         <Home handlePageChange={handlePageChange} />

         </SpringAnimation>
      );
    }
    if (currentPage === 'About') {
      return (
        <>
        <SpringAnimation>
          <About handlePageChange={handlePageChange} />
        </SpringAnimation>
        </>
      );
    }
    if (currentPage === 'Experience') {
      return (
        <>
          <SpringAnimation>
          <Experience /> 
          </SpringAnimation>
          <Services />
        </>
      );
    }
    if (currentPage === 'Portfolio') {
      return (
        <> 
        <SpringAnimation>
          <Portfolio />
        </SpringAnimation>
        </>
      );
    } else if (currentPage === 'Contact') {
      return (
        <> 
        <SpringAnimation>
          <Contact />
        </SpringAnimation>
        </>
      );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
