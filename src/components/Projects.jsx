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
    // const span = (text) => {
    //   const node = document.createElement('span');
    //   console.log('vars: ', text)
    //   node.textContent = text;
    //   node.classList.add('text_item');
    //   return node;
    // };

    // const byLetter = (text, name) => [...text].map(span);

    // // const byWord = (text, name) => text.split(' ').map(span(text, name));

    // const mcdoTargets = document
    //   .querySelectorAll('[split-by]');

    // console.log(mcdoTargets)
    // const laboraTargets = document
    //   .querySelectorAll('[split-by]');

    // mcdoTargets.forEach((node) => {
    //   const type = node.getAttribute('split-by');
    //   let nodes = null;
    //   if (type === 'letter') nodes = byLetter(node.innerText, node.classList[1]);
    //   // else if (type === 'word') nodes = byWord(node.innerText, node.classList[1]);

    //   if (nodes) node.firstChild.replaceWith(...nodes);
    // });

    // laboraTargets.forEach((node) => {
    //   const type = node.getAttribute('split-by');
    //   let nodes = null;

    //   if (type === 'letter') nodes = byLetter(node.innerText);
    //   // else if (type === 'word') nodes = byWord(node.innerText);

    //   if (nodes) node.firstChild.replaceWith(...nodes);
    // });

    gsap.to('.projects .content .title', {
      opacity: 1,
      duration: 3,
      ease: 'Power0.out',
      scrollTrigger: {
        trigger: '.projects .content .title',
        start: 'top 90%',
      },
    });

    // const items = document.getElementsByClassName('text_item');

    // gsap.to('.mcdoimg', {
    //   duration: 2,
    //   opacity: 1,
    //   transform: 'translateX(0)',
    //   ease: 'Power0.out',
    //   scrollTrigger: {
    //     trigger: '.mcdo.mainproject',
    //     start: 'top 90%',
    //     markers: true,
    //   },
    // });

    // gsap.to('.laboraimg', {
    //   duration: 2,
    //   opacity: 1,
    //   transform: 'translateX(0)',
    //   ease: 'Power0.out',
    //   scrollTrigger: {
    //     trigger: '.labora.mainproject',
    //     start: 'top 90%',
    //     markers: true,
    //   },
    // });

    // textTl.to(items, {
    //   opacity: 1,
    //   stagger: 0.02,
    //   transform: 'translateY(100%)',
    //   ease: 'Power0.out',
    // });
  });

  return (
    <div className="projects">
      <div className="content">
        <p className="title">Mejores Proyectos</p>
        <div className="projects_container">
          <div className="pr_content mcdo">
            <div className="image">
              <img src={mcdo} className="mcdoimg" alt="McDonald" />
            </div>
            <div className="text">
              <div className="project_text_container mcdotext">
                <p split-by="letter" className="prtitle mcdotext">
                  FUNDACIÓN INFANTIL RONALD MCDONALD
                </p>
                <p split-by="letter" className="subtitle mcdotext">
                  Frontend Developer
                </p>
                <p split-by="letter" className="link mcdotext">
                  Ver más
                </p>
              </div>
            </div>
          </div>
          <div className="pr_content labora">
            <div className="text">
              <div className="project_text_container">
                <p split-by="letter" className="prtitle laboratext">
                  LABORA
                </p>
                <p split-by="letter" className="subtitle laboratext">
                  Frontend Developer & design assistant
                </p>
                <p split-by="letter" className="link laboratext">
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
