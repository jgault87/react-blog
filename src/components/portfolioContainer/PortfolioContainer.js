import React, { useState } from 'react';
import Home from '../header/Header';
import About from '../about/About';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Nav from '../nav/Nav';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'About') {
      return <About handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'Experience') {
      return (
        <>
          <Experience />
          <Services />
        </>
      );
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    } else if (currentPage === 'Contact') {
      return <Contact />;
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
