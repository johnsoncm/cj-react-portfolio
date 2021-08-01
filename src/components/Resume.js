import React from 'react';
import '../../src/App.css';

const mystyle = {
    fontFamily: "Monofett",
    color: 'black',
    textDecorationLine: "none",
    textAlign: "center",
    fontSize: "70px"
  }

export default function Resume() {
    return (
      <div className="resume">
          <h2 className="resume-link" style={{mystyle}}>  <a className="resume-link2" href='https://docs.google.com/document/d/14GvVpICNFA57CjI-vVkUK2SdInycxTJgnKr2ophEw48/edit?usp=sharing' target="_blank" rel="noreferrer">Link to Resume</a> </h2>

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
          <h3 className="resume-heading">Other Technologies</h3>
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