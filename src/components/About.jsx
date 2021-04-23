import React from 'react';
import '../styles/components/About.scss';
import video from '../assets/video.mp4';
// import image from "../styles/static/bird.png";

const About = () => {
  return (
    <section className="about-container">
      <div className="about">
        <video className="video" loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="content">
          <div className="descrition">
            <h1 className="hide">
              <span className="text">Hola!</span>
            </h1>
            <h1 className="hide">
              <span className="text">
                Soy ingeniero informático especializado
              </span>
            </h1>
            <h1 className="hide">
              <span className="text">en diseño y desarrollo de aplicaciones</span>
            </h1>
            <h1 className="hide">
              <span className="text">tanto para web como para móvil</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
