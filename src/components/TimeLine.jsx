import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/components/TimeLine.scss';

gsap.registerPlugin(ScrollTrigger);

const TimeLine = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top 60%',
      },
    });
    timeline.to('.timeline .line', {
      left: '0%',
      duration: 1.5,
    });
    timeline.to(
      '.uco',
      {
        height: '30px',
        duration: 1,
      },
      '3'
    );
  });

  return (
    <div className="timeline">
      <div className="trigger">
        <div className="uco">uco</div>
        <div className="clapfy">clapfy</div>
        <p className="labora">labora</p>
      </div>
      <div className="line" />
    </div>
  );
};

export default TimeLine;
