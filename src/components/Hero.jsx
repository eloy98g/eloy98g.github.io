import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/components/Hero.scss';

const Hero = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

  useEffect(() => {
    window.scrollTo(0, 0);
    tl.set('body', { overflow: 'hidden' });
    tl.to('.text', { y: '0%', duration: 1 });
    tl.to('body', { overflow: 'visible', duration: '0' });
    tl.to('.slider', {
      y: '-100%',
      duration: 2,
      delay: 0.5,
      display: 'block',
    });
    tl.to('.intro', { y: '-100%', duration: 1 }, '-=1.5');
    tl.to('.land-content', { display: 'block' }, '-=1.5');
    tl.to('.scroll-down', { display: 'block', duration: '1' }, '-=1.5');
  });

  return (
    <section className="hero">
      <div className="landing">
        <div className="land-content">
          <h1 className="name">Eloy Gómez</h1>
          <h1 className="bullshit">Mobile & Web Developer</h1>
        </div>

        {/* <div className="button">Launch it!</div> */}
      </div>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Si puede imaginarse,</span>
          </h1>
          <h1 className="hide">
            <span className="text">Puede ser creado</span>
          </h1>
        </div>
      </div>
      <div className="slider" />
    </section>
  );
};

export default Hero;
