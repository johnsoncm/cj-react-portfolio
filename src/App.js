// import React from 'react';
// import PortfolioContainer from "./components/PortfolioContainer";
// import './App.css'

// const App = () => <PortfolioContainer />;

//   export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import NavTabs from './components/NavTabs';
//import navbar
//import footerfun
//import contactform
//import css files

function App() {
    return (
        <div>
            <Router>
                <NavTabs />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/resume" exact component={Resume}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/contact" exact component={Contact}/>
                    
                </Switch>
            </Router>
        </div>
    )
}

export default App;