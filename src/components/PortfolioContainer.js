import React, { useState } from 'react';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import NavTabs from './NavTabs';
import Footer from './Footer';

export default function PortfolioContainer( ){
    const [currentPage , setCurrentpage] = useState('Home');

    const renderPage=() => {
        if(currentPage  === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentpage(page);

    return (
        <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
        
    </div>

    )
  }