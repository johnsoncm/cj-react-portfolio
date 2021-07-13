import React from 'react';
import '../../src/App.css';

export default function Resume() {
    return (
      <div className="resume">
          <h2 className="resume-link">  <a className="resume-link2" href='../assets/images/Casey_Johnson_Resume_6.15.21.pdf'>Link to Resume</a> </h2>

          <h3 className="resume-heading">Front End Languages</h3>
          <ul className="lang-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
          </ul>
          <h3 className="resume-heading">Back End Languages</h3>
          <ul className="lang-list">
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Inquirer</li>
              <li>Jest</li>
              
          </ul>
          <h3 className="resume-heading">Additional Technologies</h3>
          <ul className="lang-list">
          <li>Bootstrap</li>
          <li>Sequelize</li>
          <li>Bycrypt</li>
          <li>Bulma</li>
          <li>Handlebars</li>
          <li>Google Fonts</li>
          <li>Font Awesome</li>
          </ul>

      </div>
    )
}