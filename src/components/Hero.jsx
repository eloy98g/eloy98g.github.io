import React, { useEffect } from 'react';
import '../styles/components/Hero.scss';
import heroAnimation from '../animations/HeroAnimation'

let hasPlayed = false;

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (hasPlayed) {
      document.getElementById('intro').style.display = 'none';
      document.getElementById('content').style.display = 'block';
      document.getElementById('scroll').style.display = 'block';
    } else {
      heroAnimation()
      hasPlayed = true;
    }
  });

  return (
    <section className="hero">
      <div className="content">
        <div className="landing">
          <div className="land-content" id='content'>
            <h1 className="name">Eloy Gómez</h1>
            <h1 className="bullshit">Mobile & Web Developer</h1>
          </div>
        </div>
        <div className="intro" id='intro'>
          <div className="intro-content">
            <h1 className="hide">
              <span className="text">Si puede imaginarse,</span>
            </h1>
            <h1 className="hide">
              <span className="text">Puede ser creado</span>
            </h1>
          </div>
        </div>
        <div className="slider" />
      </div>
    </section>
  );
};

export default Hero;
