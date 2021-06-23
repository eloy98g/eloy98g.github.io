// React
import React, { useEffect } from 'react';

// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Style
import '../styles/components/Projects.scss';

import mcdomain from '../assets/mocks/mcdomain.png';
import laborageneral from '../assets/mocks/laborageneral.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.to('.title_container .title', {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 90%',
      },
    });
  });

  return (
    <div className="projects">
      <div className="title_container">
        <p className="title">Mejores Proyectos</p>
      </div>
      <div className="mcdo mainproject">
        <div className="content">
          <div className="text">
            <div className="text_container">
              <p className="title">FUNDACIÓN INFANTIL RONALD MCDONALD</p>
              <p className="subtitle">Frontend Developer</p>
              <p className="link">Ver más</p>
            </div>
          </div>
          <div className="image">
            <img src={mcdomain} alt="McDonald" />
          </div>
        </div>
      </div>
      <div className="labora mainproject">
        <div className="content">
          <div className="image">
            <img src={laborageneral} alt="McDonald" />
          </div>
          <div className="text">
            <div className="text_container">
              <p className="title">LABORA</p>
              <p className="subtitle">Frontend Developer & design assistant</p>
              <p className="link">Ver más</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
