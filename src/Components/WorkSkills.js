// skills.js

import React from 'react';
import html from "../Components/html.png";
import css from "../Components/css.png";
import javascript from "../Components/javascript.png";
import react from "../Components/react.png";
import next from "../Components/next.png";
import "./WorkSkillsStyles.css";

const WorkSkills = () => {
  return (
    <div>
      <div className='inner'>
        <div className='header'>
          <h2>My Skills</h2>
         </div>
        <div className='container'>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='image'>
                <img src={html}  alt="HTML" />
              </div>
              <h3>HTML</h3>
              <h6>90%</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum cum molestiae maxime consequatur rerum! Qui, itaque?</p>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='image'>
                <img src={css} alt="CSS" />
              </div>
              <h3>CSS</h3>
              <h6>85%</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum cum molestiae maxime consequatur rerum! Qui, itaque?</p>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='image'>
                <img src={javascript} alt="JavaScript" />
              </div>
              <h3>JAVASCRIPT</h3>
              <h6>80%</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum cum molestiae maxime consequatur rerum! Qui, itaque?</p>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='image'>
                <img src={react} alt="React.js" />
              </div>
              <h3>REACT.JS</h3>
              <h6>70%</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum cum molestiae maxime consequatur rerum! Qui, itaque?</p>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='image'>
                <img src={next} alt="Next.js" />
              </div>
              <h3>NEXT.JS</h3>
              <h6>50%</h6>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illum cum molestiae maxime consequatur rerum! Qui, itaque?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSkills;














    
  







