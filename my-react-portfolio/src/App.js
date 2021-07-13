// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Projects from './components/Projects';
// import About from './components/About';
// // import Resume from './components/Resume';
// import Contact from './components/Contact';
// import NavTabs from './components/NavTabs';

// function App() {
//   return (
//     <div>
//       <Router>
//         <NavTabs />
//         <Switch>
//           <Route path="/" exact component={Home}/>
//           <Route path="/projects" exact component={Projects}/>
//           {/* <Route path="/resume" exact component={Resume}/> */}
//           <Route path="/about" exact component={About}/>
//           <Route path="/contact" exact component={Contact}/>

//         </Switch>
//       </Router>
 
//     </div>
//   );
// }

// export default App;

import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import './App.css';
 
const App = () => <PortfolioContainer />;

export default App;