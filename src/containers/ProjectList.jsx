// React
import React from 'react';
import { Link } from 'react-router-dom';
// Style
import '../styles/components/ProjectList.scss';

import mcdomain from '../assets/mocks/mcdomain.png';
import laborageneral from '../assets/mocks/laborageneral.png';

const ProjectList = () => {
  return (
    <div className="projectlist">
      <Link to="/" className="back">
        <p>Volver</p>
      </Link>
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

export default ProjectList;
