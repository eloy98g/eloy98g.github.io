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
    gsap.to('.tl_title', {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top 90%',
      },
    })
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.tl_title',
        markers: true,
        start: 'top 50%',
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
      '-=4'
    );
    timeline.to('.img', {
      pointerEvents: 'auto',
      stagger: 0.5,
      ease: 'Power1.easeOut',
    });
  });

  return (
    <div className="timeline">
      <p className="tl_title">El recorrido</p>
      <div className="trigger">
        <div className="uco ybar">
          <a href="http://www.uco.es/" className='link' target="_blanck">
            <img
              width="70px"
              height="100px"
              className="img"
              src={uco}
              alt="uco"
            />
          </a>
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
          <a href="https://clapfy.es/" className='link' target="_blanck">
            <img
              width="100px"
              height="100px"
              className="img"
              src={clapfy}
              alt="clapfy"
            />
          </a>
          <p className="text">Oct 20 - Abr 21</p>
          <HoverPopup
            title="Clapfy"
            description="Madrid. Empresa de consultoría b2b"
            resume="Tras una fase de formación frontend a nivel profesional, trabajé con un equipo en el que apliqué metodologías ágiles tanto en diseño como en desarrollo de proyectos en producción"
            trigger="clapfy"
          />
        </div>
        <p className="labora ybar">
          <a href="https://www.labora.app/" className='link' target="_blanck">
            <img
              width="100px"
              height="100px"
              className="img"
              src={labora}
              alt="labora"
            />
          </a>
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
