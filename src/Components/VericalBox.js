import React from 'react';
import './VerticalBox.css';
const VerticalBox = ({ logoSrc, title }) => {
  return (
    <div className="vertical-box">
      <img style={{height:'90px',width:'125px'}}  src={logoSrc} alt="Logo" className="logo1" />
      <p className="title">{title}</p>
    </div>
  );
};

export default VerticalBox;
