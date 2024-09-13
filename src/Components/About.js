import React from 'react';
import './About.css'; 
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  const handleResumeClick = () => {
    // Replace 'resume.pdf' with the actual path or link to your resume
    const resumeLink = 'https://drive.google.com/file/d/1VN-_Rqw0Y6Z3k__eyA4p_LCSo1lT57u8/view?usp=sharing';
    window.open(resumeLink, '_blank');
  };
 

  return (
    <div className="phone">
      <div className="screen">
        <h2>Riddhi Rustagi</h2>
        <img src="Profile.jpg" alt="Your Name" className="profile-photo" />
        <div className="introduction">
          <p>Engineering student by day, </p>
          <p>code wizard by night</p>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/ridd.hii_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/riddhi-rustagi-9a1976257/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Riddhi050803" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
        <button className="contact-button" onClick={handleResumeClick}>View Resume</button>
      </div>
    </div>
  );
};

export default About;

