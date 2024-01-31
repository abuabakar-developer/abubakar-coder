import React from 'react';
import "./HeroImageStyles.css";
import hero from "../Components/hero.jpg";
import { Link } from 'react-router-dom'; 

const HeroImage = () => {
  return (
    <div className='Hero'>
      <div className='mask'>
        <img className='hero-img' src={hero} alt='HeroImg' /> 
      </div>  
      <div className='content'>
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link> 
          <Link to="/contact" className="btn btn-light">Contact</Link> 
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
