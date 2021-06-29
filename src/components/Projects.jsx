// React
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Style
import '../styles/components/Projects.scss';

import labora from '../assets/laboramain.png';
import mcdo from '../assets/mcdomain.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // const textTl = gsap.timeline();

  useEffect(() => {
    const span = (text) => {
      const node = document.createElement('span');
      node.textContent = text;
      node.classList.add('text_item');
      return node;
    };

    const byLetter = (text) => [...text].map(span);

    const targetList = document.querySelectorAll('[split-by]');

    targetList.forEach((node) => {
      const type = node.getAttribute('split-by');
      let nodes = null;

      if (type === 'letter') {
        nodes = byLetter(node.innerText);
      }

      if (nodes) node.firstChild.replaceWith(...nodes);
    });

    gsap.to('.projects .content .sectitle', {
      opacity: 1,
      duration: 2,
      ease: 'Power0.out',
      scrollTrigger: {
        trigger: '.projects .content .sectitle',
        start: 'top 90%',
      },
    });

    gsap.to('.mcdoimg', {
      duration: 3,
      opacity: 1,
      transform: 'translateY(0)',
      ease: 'Elastic.easeOut(0.75, 0.5)',
      scrollTrigger: {
        trigger: '.mcdotext',
        start: 'top 90%',
      },
    });

    gsap.to('.laboraimg', {
      duration: 3,
      opacity: 1,
      transform: 'translateX(0)',
      ease: 'Elastic.easeOut(0.75, 0.5)',
      scrollTrigger: {
        trigger: '.laboratext',
        start: 'top 90%',
      },
    });

    gsap.to('.mcdotext .text_item', {
      opacity: 1,
      stagger: 0.02,
      ease: 'Sine.easeout',
      scrollTrigger: {
        trigger: '.mcdotext',
        start: 'top 90%',
      },
    });

    gsap.to('.laboratext .text_item', {
      opacity: 1,
      transform: 'translateX(0)',
      stagger: 0.02,
      ease: 'Sine.easeout',
      scrollTrigger: {
        trigger: '.laboratext',
        start: 'top 90%',
      },
    });
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
                <p split-by="letter" className="link">
                  Ver más
                </p>
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
                <p split-by="letter" className="link">
                  Ver más
                </p>
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
