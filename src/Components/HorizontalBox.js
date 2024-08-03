import React from 'react';
import './HorizontalBox.css';

const HorizontalBox = ({ icon: Icon, text }) => {
  return (
    <div className="horizontal-box">
      <Icon className="logo"/>
      <span className="text">{text}</span>
    </div>
  );
};

export default HorizontalBox;
