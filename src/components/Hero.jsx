import React, {useEffect} from 'react';
import gsap from 'gsap';
import '../styles/components/Hero.scss';

const Hero = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

  useEffect(() => {
    tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
    tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
    tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
  
    tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
  })
  return (
    <div className="hero">
      <div className="landing">
        <h1 className="name">Eloy Gómez</h1>
        <h1 className="bullshit">Mobile & Web Developer</h1>
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
