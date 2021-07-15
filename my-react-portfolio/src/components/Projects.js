import React from 'react';
import parkImage from '../assets/images/NPS_3.png';
import cadmiumImage from '../assets/images/Berto_Chicago_install.png';
import pwGeneratorImage from '../assets/images/PW_Generator_Image.png';
import budgetImage from '../assets/images/Budget-Tracker.png';
// import teamImage from '../assets/images/Team_Website.png';
import workImage from '../assets/images/Work-day-scheduler.png';
import fitnessImage from '../assets/images/Workout-Tracker.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    cardStyle: {
        width: '55rem',
        backgroundColor: 'transparent',
        borderColor: 'black',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto',
        gridGap: '5rem',
     margin: '15%',

    },



}

function Projects() {
    return (

        <div className="responsive-cards">
                 <h3 className="portfolio-title">Portfolio</h3>
            <div style={styles.cardStyle}>
           
                <div className="row">
                    <div className="border-card-style">
                        <img className="card-img-top" src={cadmiumImage} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Cadmium</h5>
                            <p className="card-text">An art event finding app for the city of Richmond, VA</p>
                            <a href="https://github.com/johnsoncm/cadmium" className="btn btn-primary">Github Link</a>
                            <a href="https://ancient-lowlands-14789.herokuapp.com/" className="btn btn-primary link-hover-style">App Link</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div >
                        <img className="card-img-top" src={parkImage} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">National Park Service Finder</h5>
                            <p className="card-text">A searchable map to find Historic Sites near you</p>
                            <a href="https://github.com/epurpur/Project1_NationalParkService" className="btn btn-primary">Github Link</a>
                            <a href="https://epurpur.github.io/NationalParkService/" className="btn btn-primary link-hover-style">App Link</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div >
                        <img className="card-img-top" src={pwGeneratorImage} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">Generate a secure random password quickly and easily</p>
                            <a href="https://github.com/johnsoncm/passwordgenerator" className="btn btn-primary">Github Link</a>
                            <a href="https://johnsoncm.github.io/passwordgenerator/" className="btn btn-primary link-hover-style">App Link</a>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div >
                        <img className="card-img-top" src={budgetImage} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Budget Tracker</h5>
                            <p className="card-text">Keep track of your finances both on and offline</p>
                            <a href="https://github.com/johnsoncm/pwa-budget-tracker" className="btn btn-primary">Github Link</a>
                            <a href="https://damp-woodland-46122.herokuapp.com/" className="btn btn-primary link-hover-style">App Link</a>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div >
                        <img className="card-img-top" src={workImage} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Work Day Scheduler</h5>
                            <p className="card-text">Keep track of your daily tasks</p>
                            <a href="https://github.com/johnsoncm/daily-planner" className="btn btn-primary">Github Link</a>
                            <a href="https://johnsoncm.github.io/daily-planner/" className="btn btn-primary link-hover-style">App Link</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div >
                        <img className="card-img-top" src={fitnessImage} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Workout Tracker</h5>
                            <p className="card-text">Create, view, and track your workouts</p>
                            <a href="https://github.com/johnsoncm/workout-tracker" className="btn btn-primary">Github Link</a>
                            <a href="https://lit-lake-33755.herokuapp.com/" className="btn btn-primary link-hover-style">App Link</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Projects;





// export default function Projects() {
//     return (

//         <div id="main">
//         <section id="one" className="tiles">
//             <article style={parkImage} alt="national park">
//                 <header className="major">
//                     <h3 style={{color: 'red'}}>National Park Finder</h3>
//                     <p>A searchable map to find Historic Sites near you</p>
//                 </header>
//                 <a href="https://epurpur.github.io/NationalParkService/"></a>Repo Link<a className="link primary">
//                 </a>

//             </article>
//             <div style={cadmiumImage} alt="art gallery">
//                 <header className="major">
//                     <h3>Cadmium</h3>
//                     <p>An Art Event Finder App for the City of Richmond, VA</p>
//                 </header>
//                 <a href="https://ancient-lowlands-14789.herokuapp.com/" target="_blank">

//                 </a>
//                 </div>
//             <article style={workImage} alt="daily planner">
//                 <header className="major">
//                     <h3>Work Day Scheduler</h3>
//                     <p>Track your daily tasks and save your progress</p>
//                 </header>
//                 <a href="https://johnsoncm.github.io/daily-planner/"></a><a className="link primary"></a>
//             </article>
//             <article style={pwGeneratorImage} alt="password generator">
//                 <header className="major">
//                     <h3>Password Generator</h3>
//                     <p>Generate a secure and randomized password quickly and easily</p>
//                 </header>
//                 <a href="https://johnsoncm.github.io/passwordgenerator/">
//                     </a>
//             </article>
//             <article style={teamImage} alt="team builder">
//                 <header className="major">
//                     <h3>Team Profile Generator</h3>
//                     <p>A command-line app that builds team profiles for quick access to emails and github profiles</p>
//                 </header>
//                 <a href="https://drive.google.com/file/d/104mIjCfjrItyHMCc-p1ILFkLdlIZft8J/view"></a>
//             </article>
//             <article style={fitnessImage}alt="fitness tracker">
//                 <header className="major">
//                     <h3>Workout Tracker</h3>
//                     <p>A fitness tracker app that allows users to create, view, and track daily workouts</p>
//                 </header>
//                 <a href="https://drive.google.com/file/d/104mIjCfjrItyHMCc-p1ILFkLdlIZft8J/view"></a>
//             </article>
//         </section>

//     </div>

//     )
// }
