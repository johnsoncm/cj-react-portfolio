import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <PortfolioContainer />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/resume" exact component={Resume}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>

        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
