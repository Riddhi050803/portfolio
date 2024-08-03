import React from 'react';
import './PhoneMenu.css';
import { FaHome, FaUser, FaCogs, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const PhoneMenu = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="phone-menu">
        <div className="icon-container" onClick={() => scrollToSection('home')}>
          <FaHome className="icon" />
          <span className="icon-label">Home</span>
        </div>
        <div className="icon-container" onClick={() => scrollToSection('about')}>
          <FaUser className="icon" />
          <span className="icon-label">About</span>
        </div>
        <div className="icon-container" onClick={() => scrollToSection('skills')}>
          <FaCogs className="icon" />
          <span className="icon-label">Skills</span>
        </div>
        <div className="icon-container" onClick={() => scrollToSection('projects')}>
          <FaProjectDiagram className="icon" />
          <span className="icon-label">Projects</span>
        </div>
        <div className="icon-container" onClick={() => scrollToSection('contact')}>
          <FaEnvelope className="icon" />
          <span className="icon-label">Contact</span>
        </div>
      </div>
    </>
  );
};

export default PhoneMenu;
