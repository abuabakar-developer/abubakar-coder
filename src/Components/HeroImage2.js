import React, { Component } from 'react';
import "./HeroImage2Styles.css";

class HeroImage2 extends Component {
  render() {
  return (
    <div className="hero-img2">
      <div className="heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}
}
export default HeroImage2;
