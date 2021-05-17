import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/components/Hero.scss';

const Hero = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

  useEffect(() => {
    tl.to('.text', { y: '0%', duration: 1, stagger: 0.17 });
    tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5, display: "block"});
    tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
  });
  return (
    <section className="hero">
      <div className="landing">
        <div className="land-content">
          <h1 className="name">Eloy Gómez</h1>
          <h1 className="bullshit">Mobile & Web Developer</h1>
        </div>
      </div>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Aprende</span>
          </h1>
          <h1 className="hide">
            <span className="text">Imagina</span>
          </h1>
          <h1 className="hide">
            <span className="text">Crea</span>
          </h1>
        </div>
      </div>
      <div className="slider" />
      
    </section>
  );
};

export default Hero;
