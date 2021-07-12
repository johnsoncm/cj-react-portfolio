import React from 'react';
// import NavTabs from '../NavTabs';


//Projects go here

export default function Projects() {
    return (
        
        <div id="main">
        <section id="one" className="tiles">
            <article style={{backgroundImage: './'}}>
                <header className="major">
                    <h3>National Park Finder</h3>
                    <p>A searchable map to find Historic Sites near you</p>
                </header>
                <a href="https://epurpur.github.io/NationalParkService/"></a>Repo Link<a className="link primary">
                </a>
                
            </article>
            <div style={{backgroundImage: `url('/static/images/Berto_Chicago_install.png')`}}>
                <header className="major">
                    <h3>Cadmium</h3>
                    <p>An Art Event Finder App for the City of Richmond, VA</p>
                </header>
                <a href="https://ancient-lowlands-14789.herokuapp.com/" target="_blank">

                </a>
                </div>
            <article style={{backgroundImage: `url('/static/images/Work_schedular_2.png')`}}>
                <header className="major">
                    <h3>Work Day Scheduler</h3>
                    <p>Track your daily tasks and save your progress</p>
                </header>
                <a href="https://johnsoncm.github.io/daily-planner/"></a><a className="link primary"></a>
            </article>
            <article style={{backgroundImage: `url('/static/images/PW_Generator_Image.png')`}}>
                <header className="major">
                    <h3>Password Generator</h3>
                    <p>Generate a secure and randomized password quickly and easily</p>
                </header>
                <a href="https://johnsoncm.github.io/passwordgenerator/">
                    </a>
            </article>
            <article style={{backgroundImage: `url('/static/images/Team_Website.png')`}}>
                <header className="major">
                    <h3>Team Profile Generator</h3>
                    <p>A command-line app that builds team profiles for quick access to emails and github profiles</p>
                </header>
                <a href="https://drive.google.com/file/d/104mIjCfjrItyHMCc-p1ILFkLdlIZft8J/view"></a>
            </article>
            <article style={{backgroundImage: `url('/static/images/workout-tracker2.png')`}}>
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