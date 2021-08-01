import React from 'react';
import image from '../assets/images/Casey_portfolio_image.cropped.png';
import '../../src/App.css';

export default function About() {
    return (
        <section className="container">
                    <div className="about-image-container">
                    <img src={image} alt="casey" className="cj-image"/>
                </div>
            <h3 className="about-name">Casey Johnson Jamora</h3>
            <h3 className="about-title">Full Stack Developer</h3>
            <div className="about-me">
        
                <div className="about-text">
                    <p>
                    Full Stack Web Developer, with a keen interest in
                        front-end development.
                        My background in fundraising has instilled an astute attention to detail and a friendly
                        collaborative nature.
                        Well versed in HTML, CSS, Javascript, Node.js, and React to build user-friendly web applications,
                        and a drive
                        and enthusiasm to learn more development languages. A current student
                        of the University of Richmond’s Full Stack Coding Boot Camp, I have experience working
                        with a team demonstrating strong leadership and communication skills.  
                    </p>
                </div>
            </div>

        </section>
    )
}