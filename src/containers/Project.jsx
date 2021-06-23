import React from 'react';

// initialState
import initialState from '../hooks/initialState';
import '../styles/components/Project.scss';

const Frame = ({ picture, text, reverse }) => {
  return (
    <div className={reverse ? 'frame reverse' : 'frame'}>
      <div className="copy" style={{ textAlign: 'center' }}>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

const Project = ({ match }) => {
  const { id } = match.params;

  const project = initialState.projects.find((p) => p.id === parseInt(id, 10));

  return (
    <div className="oneproject">
      <div className="content">
        <Frame
          picture={project.details.title.image}
          text={project.details.title.text}
          reverse={project.details.title.meta === 'reverse'}
        />
        {project.details.middle.map((e) => {
          return (
            <Frame
              picture={e.image}
              text={e.text}
              reverse={e.meta === 'reverse'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
