import React, { useState } from 'react';
import './Project.css'; // Import CSS for styling

const Project = ({ title, imageSrc, description, demoLink, githubLink }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="project">
      <img src={imageSrc} alt={title} onClick={toggleDescription} />
      <div className={`description ${showDescription ? 'visible' : ''}`}>
        <p>{description}</p>
      </div>
      <div className="options">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Project;
