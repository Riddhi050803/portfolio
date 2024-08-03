import React from 'react';
import './App.css';
import About from './Components/About';
import Project from './Components/Project';
import Introduction from './Components/Introduction';
import PhoneMenu from './Components/PhoneMenu';
import HorizontalBox from './Components/HorizontalBox';
import AutoLayoutExample from './Components/AutoLayoutExample';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCogs, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CgEnter } from 'react-icons/cg';

function App() {
  return (
    <div className="App">
      <div className="components-container">
        <div className="about-container">
          <About />
        </div>
        <div className="introduction-container">
          <Introduction />
        </div>
        <div>
          <PhoneMenu />
        </div>
        
      </div>
    </div>
  );
}

export default App;
