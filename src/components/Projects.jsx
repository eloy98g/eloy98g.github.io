import React from 'react';
import '../styles/components/Projects.scss';

// Images
import mobile1 from '../assets/projects/mcdo/1.png';
import mobile2 from '../assets/projects/mcdo/2.png';
import mobile3 from '../assets/projects/mcdo/3.png';

// Logos
import flutter from '../assets/techs/flutter.png';
import firebase from '../assets/techs/firebase.png';
import android from '../assets/techs/android.png';
import ios from '../assets/techs/ios.png';
import github from '../assets/techs/github.png';
import react from '../assets/techs/react.png';
import web from '../assets/techs/web.png';
import redux from '../assets/techs/redux.png';

const Projects = () => {
  return (
    <div className="projects">
      <p className="pr_title">Proyectos</p>
      <div className="content">
        <div className="project">
          <div className="description">
            <div className="header">
              <p className="title">Ronald Mcdonald</p>
              <p className="subtitle">Mobile App</p>
            </div>
            <div className="details">
              <p className='desc'>
                App móvil de información para las familias que hacen uso de los
                servicios de la Fundación Ronald McDonald
              </p>
              <div className="team">
                <p>Resto del equipo: </p>
                <a
                  href="https://github.com/jesusrp98"
                  className="user"
                  target="blank"
                >
                  <img src={github} alt="" title="Jesús Rodríguez" />
                </a>
                <a
                  href="https://github.com/veves"
                  className="user"
                  target="blank"
                >
                  <img src={github} alt="" title="Veves" />
                </a>
              </div>
            </div>
            <div className="tech">
              <img src={flutter} alt="" className="logo" title="Flutter" />
              <img src={firebase} alt="" className="logo" title="Firebase" />
              <img src={android} alt="" className="logo" title="Android" />
              <img src={ios} alt="" className="logo" title="iOS" />
            </div>
          </div>
          <div className="images">
            <img src={mobile1} alt="" />
            <img src={mobile2} alt="" />
            <img src={mobile3} alt="" />
          </div>
        </div>

        <div className="project">
          <div className="description">
            <div className="header">
              <p className="title">Ronald Mcdonald</p>
              <p className="subtitle">Dashboard web</p>
            </div>
            <div className="details">
              <p className='desc'>
                Panel de control web de gestión de la Fundación Ronald McDonald
              </p>
              <div className="team">
                <p>Resto del equipo: </p>
                <a
                  href="https://github.com/jesusrp98"
                  className="user"
                  target="blank"
                >
                  <img src={github} alt="" title="Jesús Rodríguez" />
                </a>
                <a
                  href="https://github.com/veves"
                  className="user"
                  target="blank"
                >
                  <img src={github} alt="" title="Veves" />
                </a>
              </div>
            </div>
            <div className="tech">
              <img src={flutter} alt="" className="logo" title="Flutter" />
              <img src={firebase} alt="" className="logo" title="Firebase" />
              <img src={web} alt="" className="logo" title="Web" />
            </div>
          </div>
          <div className="images">
            <img src={mobile1} alt="" />
            <img src={mobile2} alt="" />
            <img src={mobile3} alt="" />
          </div>
        </div>

        <div className="project">
          <div className="description">
            <div className="header">
              <p className="title">Labora</p>
              <p className="subtitle">Workers App</p>
            </div>
            <div className="details">
              <p className='desc'>
                App de búsqueda de trabajos temporales
              </p>
              <div className="team">
                <p>Resto del equipo: </p>
                <a
                  href="https://github.com/peralson"
                  className="user"
                  target="blank"
                >
                  <img src={github} alt="" title="Jesús Rodríguez" />
                </a>
              </div>
            </div>
            <div className="tech">
              <img src={react} alt="" className="logo" title="React Native" />
              <img src={redux} alt="" className="logo" title="React Redux" />
              <img src={android} alt="" className="logo" title="Android" />
              <img src={ios} alt="" className="logo" title="iOS" />
            </div>
          </div>
          <div className="images">
            <img src={mobile1} alt="" />
            <img src={mobile2} alt="" />
            <img src={mobile3} alt="" />
          </div>
        </div>

        <div className="project">
          <div className="description">
            <div className="header">
              <p className="title">Labora</p>
              <p className="subtitle">Dashboard web</p>
            </div>
            <div className="details">
              <p className='desc'>
                App de búsqueda de trabajos temporales
              </p>
              <div className="team">
                <p>Resto del equipo: </p>
                <a
                  href="https://github.com/peralson"
                  className="user"
                  target="blank"
                >
                  <img src={github} alt="" title="Pablo Peralta" />
                </a>
              </div>
            </div>
            <div className="tech">
              <img src={react} alt="" className="logo" title="React" />
              <img src={redux} alt="" className="logo" title="React Redux" />
              <img src={android} alt="" className="logo" title="Android" />
              <img src={ios} alt="" className="logo" title="iOS" />
            </div>
          </div>
          <div className="images">
            <img src={mobile1} alt="" />
            <img src={mobile2} alt="" />
            <img src={mobile3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
