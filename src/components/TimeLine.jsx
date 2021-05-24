import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/components/TimeLine.scss';
import uco from '../assets/uco.png';
import clapfy from '../assets/clapfy.png';
import labora from '../assets/labora.png';

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
    timeline.to('.uco', {
      height: '40px',
      duration: 0.5,
    });
    timeline.to('.clapfy', {
      height: '40px',
      duration: 0.5,
    });
    timeline.to('.labora', {
      height: '40px',
      duration: 0.5,
    });
    timeline.to('.img', {
      opacity: 1,
      duration: 5,
      ease: 'Power1.easeOut'
    });
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
        </div>
        <div className="clapfy ybar">
          <img
            width="130px"
            height="130px"
            className="img"
            src={clapfy}
            alt="clapfy"
          />
        </div>
        <p className="labora ybar">
          <img
            width="140px"
            height="140px"
            className="img"
            src={labora}
            alt="labora"
          />
        </p>
      </div>
      <div className="line" />
    </div>
  );
};

export default TimeLine;
