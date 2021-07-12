import React from 'react';
import image from '../assets/images/Casey_portfolio_image.cropped.png';

export default function About() {
    return (
        <section className="container">
            <h3 className="about-title">Casey Johnson - Full Stack Developer</h3>
            <div className="about-me">
                <div className="about-image-container">
                    <img src={image} alt="photo of casey" className="cj-image"/>
                </div>
                <div className="about-text">
                    <p>
                    Full Stack Web Developer in training, with a keen interest in
                        back-end development.
                        My background in fundraising has instilled an astute attention to detail and a friendly
                        collaborative nature.
                        Well versed in HTML, CSS, Javascript, Node.js, and React to build user-friendly web applications,
                        and a drive
                        and enthusiasm to learn more software development languages. A current student
                        of the University of Richmond’s Full Stack Coding Boot Camp, I have experience working
                        with a team demonstrating strong leadership and communication skills.  
                    </p>
                </div>
            </div>

        </section>
    )
}