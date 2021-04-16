import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="landing">
        <h1 className="name">Eloy Gómez</h1>
        <h2 className="bullshit">Moble & Web Developer</h2>
      </div>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Improve.</span>
          </h1>
          <h1 className="hide">
            <span className="text">Work.</span>
          </h1>
          <h1 className="hide">
            <span className="text">Passion.</span>
          </h1>
        </div>
      </div>
      <div className="slider" />
    </div>
  );
};

export default Hero;