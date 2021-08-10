// React
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Style
import '../styles/components/Projects.scss';

import labora from '../assets/laboramain.png';
import mcdo from '../assets/mcdomain.png';

import projectsAnimation from '../animations/ProjectsAnimation';

const Projects = () => {

  useEffect(() => {
    projectsAnimation()
  });

  return (
    <div className="projects">
      <div className="content">
        <p className="sectitle">Mejores Proyectos</p>
        <div className="projects_container">
          <div className="pr_content mcdo">
            <div className="image">
              <img src={mcdo} className="mcdoimg" alt="McDonald" />
            </div>
            <div className="text">
              <div className="project_text_container mcdotext">
                <p split-by="letter" className="prtitle">
                  FUNDACIÓN INFANTIL RONALD MCDONALD
                </p>
                <p split-by="letter" className="subtitle">
                  Frontend Developer
                </p>
                <Link to='./project/vbG6rLT4UKhS4z3u' split-by="letter" className="link">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
          <div className="pr_content labora">
            <div className="text">
              <div className="project_text_container laboratext">
                <p split-by="letter" className="prtitle">
                  LABORA
                </p>
                <p split-by="letter" className="subtitle">
                  Frontend Developer & design assistant
                </p>
                <Link to='./project/4KG5SWu7cCnfnupH' split-by="letter" className="link">
                  Ver más
                </Link>
              </div>
            </div>
            <div className="image">
              <img src={labora} className="laboraimg" alt="Labora" />
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
