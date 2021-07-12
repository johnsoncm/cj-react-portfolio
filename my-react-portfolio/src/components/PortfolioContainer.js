import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NavTabs from './NavTabs';

export default function PortfolioContainer( ){
    const [currentPage , setCurrentpage] = useState('Home');

    const renderPage=() => {
        if(currentPage  === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
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

    </div>
    );
}