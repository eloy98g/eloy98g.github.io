import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pp from '../assets/pp.png';
import UnderlinedText from '../widgets/UnderlinedText';
import '../styles/components/About.scss';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.to('.copy', {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.copy',
        toggleActions: 'restart',
      },
    });
    gsap.to('.first', {
      width: '100%',
      duration: 1,
      scrollTrigger: {
        trigger: '.first',
        toggleActions: 'restart',
      },
    });
    gsap.to(
      '.second',
      {
        width: '100%',
        duration: 1,
        scrollTrigger: {
          trigger: '.second',
          toggleActions: 'restart',
        },
      },
      '-=0.3'
    );
    gsap.to('.title', {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.title',
        toggleActions: 'restart',
      },
    });
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
            <h3 className="line">
              <span className="text">Dedicado al&nbsp;</span>
              <UnderlinedText controller="first" text="diseño y desarrollo" />
            </h3>
            <h3 className="line">
              <span className="text">De aplicaciones&nbsp;</span>
              <UnderlinedText
                controller="second"
                text="movil y web"
                style={{ backgroundColor: 'rgba(237, 72, 72, 0.4)' }}
              />
            </h3>
          </div>
        </div>
      </div>
      <div className="right-image">
        <div className="shape" />
        <img className="image" src={pp} alt="" />
      </div>
    </section>
  );
};

export default About;
