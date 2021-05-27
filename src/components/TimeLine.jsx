import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/components/TimeLine.scss';
import uco from '../assets/uco.png';
import clapfy from '../assets/clapfy.png';
import labora from '../assets/labora.png';
import HoverPopup from '../widgets/HoverPopup';

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top 60%',
      },
      ease: 'Power0.easeNone',
    });
    timeline.to('.timeline .line', {
      left: '0%',
      duration: 1.5,
    });
    timeline.to('.ybar', {
      height: '40px',
      duration: 0.5,
      stagger: 0.5,
    });
    timeline.to(
      '.img',
      {
        opacity: 1,
        stagger: 0.5,
        ease: 'Power1.easeOut',
      },
      '-=1.5'
    );
    timeline.to(
      '.text',
      {
        opacity: 1,
        stagger: 0.5,
        ease: 'Power1.easeOut',
      },
      '-=3'
    );
    timeline.to(
      '.img',
      {
        pointerEvents: 'auto',
        stagger: 0.5,
        ease: 'Power1.easeOut',
      },
    );
  });

  return (
    <div className="timeline">
      <div className="trigger">
        <div className="uco ybar">
          <img
            width="70px"
            height="100px"
            className="img"
            src={uco}
            alt="uco"
          />
          <p className="text">2016</p>
          <HoverPopup
            vertical
            title="UCO"
            description="Universidad de Córdoba"
            resume="Ingeniería informática en la UCO con mención en computadores"
            trigger="uco"
          />
        </div>
        <div className="clapfy ybar">
          <img
            width="100px"
            height="100px"
            className="img"
            src={clapfy}
            alt="clapfy"
          />
          <p className="text">Oct 20 / Abr 21</p>
          <HoverPopup
            title="Clapfy"
            description="Madrid. Empresa de consultoría b2b"
            resume="Tras una fase de formación frontend a nivel profesional, trabajé con un equipo en el que apliqué metodologías ágiles tanto en diseño como en desarrollo de proyectos en producción"
            trigger="clapfy"
          />
        </div>
        <p className="labora ybar">
          <img
            width="100px"
            height="100px"
            className="img"
            src={labora}
            alt="labora"
          />
          <p className="text">Abr 21 - now</p>
          <HoverPopup
            title="Labora"
            description="Madrid. Startup"
            resume="Junto al equipo de Clapfy, comenzamos a desarrollar un producto propio destinado a facilitar al máximo las contrataciones de las empresas"
            trigger="labora"
          />
        </p>
      </div>
      <div className="line" />
    </div>
  );
};

export default TimeLine;
