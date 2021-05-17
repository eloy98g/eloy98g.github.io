import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import gsap from 'gsap';
import pp from '../assets/pp.png';
import '../styles/components/About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="content">
        <div className="title">
          <h1>Hola!</h1>
          <h1>Soy Eloy</h1>
        </div>
        <div className="content">
          <h3>Tengo 21 años. Soy ingeniero informático</h3>
          <h3>Especializado en diseño y desarrollo de apps</h3>
          <h3>tanto para web como para móvil</h3>
        </div>
        <div className="image">
          <img src={pp} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
