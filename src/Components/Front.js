
import React from 'react';
import "./FrontStyles.css";

const Front = () => {
  return (
    <div className='b-container'>
      <div className='heading'>
        <h2>Skills & Projects</h2>
        <div className='section'>
          <h3>Web Development</h3>
          <p>I am a fresher website developer. I have acquired skills through self-learning. Here are some projects I've worked on:</p>
          <ul>
            <li>E-Commerce Website</li>
            <li>Weather App</li>
            <li>Todo App</li>
          </ul>
        </div>
        <div className='section'>
          <h3>UI/UX Designer</h3>
          <p>I am a friendly UI/UX designer, self-learner of React Native UI/UX design.</p>
        </div>
      </div>
    </div>
  );
};

export default Front;


