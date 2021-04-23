import React from 'react';
import '../styles/components/About.scss';
import video from "../assets/video.mp4";
// import image from "../styles/static/bird.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <video className="video" loop autoPlay muted>
          <source
            src={video}
            type="video/mp4"
          />
        </video>
        <div className="content">
          <p>ola</p>
        </div>
      </div>
    </div>
  );
};

export default About;
