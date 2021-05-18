import React, { useEffect } from 'react';
import gsap from 'gsap';
import pp from '../assets/pp.png';
import '../styles/components/About.scss';

const About = () => {
  const tl = gsap.timeline({ defauls: { delay: 0.3, ease: 'power1.out' } });

  useEffect(() => {
    tl.to(
      '.underline',
      {
        top: '53%',
        duration: 2,
        scrollTrigger: {
          trigger: '.line1',
          start: 'top: 90%',
          end: 'bottom 60%',
          markers: true
        },
      },
    );
  });

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
                Tengo 22 años. Soy ingeniero informático
              </span>
            </h3>
            <h3 className="line1">
              <span className="text">Especializado en diseño y desarrollo</span>
              <div className="underline" />
              <div className="hide" />
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
    </section>
  );
};

export default About;
