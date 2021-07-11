import React from 'react';
import PortfolioContainer from "./components/PortfolioContainer";
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Projects from './components/pages/Projects';
// import Contact from './components/pages/Contact';
// import NavTabs from './components/NavTabs';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => <PortfolioContainer />;

// function App() {
//     const tabs = ['About', 'Projects', 'Contact', 'Home'];
//     const [currentTab, setCurrentTab] =useState(tabs[0]);
//     const renderPage = React.useCallback(() => {
//       switch (currentTab) {
//         case 'Projects':
//           return <Projects />;
//         case 'Home':
//           return <Home />;
//         case 'Contact':
//           return <Contact />;
//         default:
//           return <About />
//       }
//     }, [currentTab])
//     return (
//       <div>
//         <NavTabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
//         <main className="main">
//           {renderPage()}
//         </main>
//          </div>
//     );
//   }
  export default App;