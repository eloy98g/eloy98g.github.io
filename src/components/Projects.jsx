// React
import React, { useEffect } from 'react';

// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Style
import '../styles/components/Projects.scss';

// initialState
import initialState from '../hooks/initialState';

// Components
import ProjectItem from './ProjectItem';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.to('.pr_title', {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: '.pr_title',
        start: 'top 90%',
      },
    });
  });
  console.log('projects:',initialState.projects)
  return (
    <div className="projects">
      <p className="pr_title">Proyectos</p>
      <div className="content">
        {
          initialState.projects.map((e) => {
            return(
              <ProjectItem data={e} />
            )
          })
        }
      </div>
    </div>
  );
};

export default Projects;
