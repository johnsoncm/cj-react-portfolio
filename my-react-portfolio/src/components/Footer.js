import React from 'react';
import Github from '../assets/images/GitHub-Mark-64px.png'
import Email from '../assets/images/icons8-email-50.png'
import LinkedIn from '../assets/images/linkedin_black_logo_icon_147114.png'


function Footer() {
    <footer className="logos">
        <a href="johnsoncm3@gmail.com">
            <img src={Email} alt="icon of email" className="icon"/>
        </a>
        <a href="https://www.github.com/johnsoncm">
            <img src={Github} alt="icon of github" className="icon"/>
        </a>
        <a href="https://www.linkedin.com/in/casey-johnson-11336b4a/">
            <img src={LinkedIn} alt="icon of linkedin" className="icon"/>
        </a>



    </footer>
}

export default Footer;