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
          <HoverPopup />
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
          <HoverPopup />
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
          <HoverPopup />
        </p>
      </div>
      <div className="line" />
    </div>
  );
};

export default TimeLine;
