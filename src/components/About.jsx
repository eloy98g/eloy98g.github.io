import React, { useEffect } from 'react';
import gsap from 'gsap';
import pp from '../assets/pp.png';

import '../styles/components/About.scss';

const About = () => {
  const tl = gsap.timeline({ defauls: { ease: 'power1.out' } });

  // useEffect(() => {
  //   tl.to('.top-slider', { y: '0%', duration: 1 });
  // });

  return (
    <section className="about">
      <div className="content">
        <div className="title">
          <h1>Hola! &#x1F44B;</h1>
          <h1>Soy Eloy</h1>
        </div>
        <div className="copy">
          <div className="phrases">
            <h3 className="line">
              <span className="text">
                Tengo 21 años. Soy ingeniero informático
              </span>
            </h3>
            <h3 className="line1">
              <span className="text">Especializado en diseño y desarrollo</span>
              <div className="underline" />
            </h3>
            <h3 className="line">
              <span className="text">De aplicaciones móvil y web</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="right-image">
        <img className="image" src={pp} alt="" />
      </div>
      <div className="top-slider" />
      <div className="bottom-slider" />
    </section>
  );
};

export default About;
