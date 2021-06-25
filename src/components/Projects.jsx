// React
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Style
import '../styles/components/Projects.scss';

import labora from '../assets/laboramain.png';
import mcdo from '../assets/mcdomain.png';

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
      <div className="content">
        <p className="title">Mejores Proyectos</p>
        <div className="projects_container">
          <div className="mcdo mainproject">
            <div className="content">
              <div className="image">
                <img src={mcdo} alt="McDonald" />
              </div>
              <div className="text">
                <div className="text_container">
                  <p className="title">FUNDACIÓN INFANTIL RONALD MCDONALD</p>
                  <p className="subtitle">Frontend Developer</p>
                  <p className="link">Ver más</p>
                </div>
              </div>
            </div>
          </div>
          <div className="labora mainproject">
            <div className="content">
              <div className="text">
                <div className="text_container">
                  <p className="title">LABORA</p>
                  <p className="subtitle">
                    Frontend Developer & design assistant
                  </p>
                  <p className="link">Ver más</p>
                </div>
              </div>
              <div className="image">
                <img src={labora} alt="Labora" />
              </div>
            </div>
          </div>
        </div>
        {/* <Link to="/projects" className="viewall">
          <p>Ver Todos</p>
        </Link> */}
      </div>
    </div>
  );
};

export default Projects;
