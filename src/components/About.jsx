import React from 'react';
import '../styles/components/About.scss';
// import video from "../styles/static/video.mp4";
// import image from "../styles/static/bird.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <video
          muted
          loop
          src="https://www.youtube.com/watch?v=rUWxSEwctFU&ab_channel=IanRushton"
          className="video"
          type="video/mp4"
        />
        {/* <img src={image} alt="sdkf" width="500px" height="600px" /> */}
      </div>
    </div>
  );
};

export default About;
