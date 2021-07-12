import React from 'react';
// import NavTabs from '../NavTabs';
import parkImage from '../../assets/images/NPS_3.png'
import cadmiumImage from '../../assets/images/Berto_Chicago_install.png';
import pwGeneratorImage from '../../assets/images/PW_Generator_Image.png';
import teamImage from '../../assets/images/Team_Website.png';
import workImage from '../../assets/images/Work_schedular_2.png';
import fitnessImage from '../../assets/images/workout-tracker1.png';


//Projects go here

export default function Projects() {
    return (
        
        <div id="main">
        <section id="one" className="tiles">
            <article style={parkImage}>
                <header className="major">
                    <h3 style={{color: 'red'}}>National Park Finder</h3>
                    <p>A searchable map to find Historic Sites near you</p>
                </header>
                <a href="https://epurpur.github.io/NationalParkService/"></a>Repo Link<a className="link primary">
                </a>
                
            </article>
            <div style={cadmiumImage}>
                <header className="major">
                    <h3>Cadmium</h3>
                    <p>An Art Event Finder App for the City of Richmond, VA</p>
                </header>
                <a href="https://ancient-lowlands-14789.herokuapp.com/" target="_blank">

                </a>
                </div>
            <article style={workImage}>
                <header className="major">
                    <h3>Work Day Scheduler</h3>
                    <p>Track your daily tasks and save your progress</p>
                </header>
                <a href="https://johnsoncm.github.io/daily-planner/"></a><a className="link primary"></a>
            </article>
            <article style={pwGeneratorImage}>
                <header className="major">
                    <h3>Password Generator</h3>
                    <p>Generate a secure and randomized password quickly and easily</p>
                </header>
                <a href="https://johnsoncm.github.io/passwordgenerator/">
                    </a>
            </article>
            <article style={teamImage}>
                <header className="major">
                    <h3>Team Profile Generator</h3>
                    <p>A command-line app that builds team profiles for quick access to emails and github profiles</p>
                </header>
                <a href="https://drive.google.com/file/d/104mIjCfjrItyHMCc-p1ILFkLdlIZft8J/view"></a>
            </article>
            <article style={fitnessImage}>
                <header className="major">
                    <h3>Workout Tracker</h3>
                    <p>A fitness tracker app that allows users to create, view, and track daily workouts</p>
                </header>
                <a href="https://drive.google.com/file/d/104mIjCfjrItyHMCc-p1ILFkLdlIZft8J/view"></a>
            </article>
        </section>
        
    </div>

    )
}

// export default Projects;

// // function Projects () {
// //     const projects = [
// //         name: 
// //         image:
// //         link:
// //         github:
// //     ]
// // }