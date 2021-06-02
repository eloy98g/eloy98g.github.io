// React
import React, { useEffect } from 'react';

// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Style
import '../styles/components/Knowledge.scss';

// Logos
import flutter from '../assets/logos/flutter.png';
import firebase from '../assets/logos/firebase.png';
import github from '../assets/logos/github.png';
import react from '../assets/logos/react.png';
import redux from '../assets/logos/redux.png';
import bash from '../assets/logos/bash.png';
import cpp from '../assets/logos/cpp.png';
import figma from '../assets/logos/figma.png';
import gsaplogo from '../assets/logos/gsap.png';
import js from '../assets/logos/js.png';
import linux from '../assets/logos/linux.png';
import sass from '../assets/logos/sass.png';
import htmlcss from '../assets/logos/htmlcss.png';
import ingles from '../assets/logos/ingles.png';

gsap.registerPlugin(ScrollTrigger);

const Item = ({ img, text }) => {
  return (
    <div className="item">
      <div className="container">
        <img src={img} alt="" className="image" />
      </div>
      <p className="text">{text}</p>
    </div>
  );
};

const Knowledge = () => {

  useEffect(() => {
    gsap.to('.knowledge .content .item', {
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.knowledge .content .item',
        start: 'top 90%',
      },
    });
  });

  return (
    <div className="knowledge">
      <p className="knw_title">Conocimientos</p>
      <p className="subtitle">Lenguajes y librerías </p>
      <div className="content">
        <Item img={js} text="Javascript" />
        <Item img={sass} text="Sass" />
        <Item img={cpp} text="C++" />
        <Item img={gsaplogo} text="GSAP" />
        <Item img={flutter} text="Flutter" />
        <Item img={htmlcss} text="Responsive design" />
        <Item img={react} text="React JS" />
        <Item img={react} text="React Native" />
        <Item img={redux} text="React Redux" />
      </div>
      <p className="subtitle">Herramientas y otros</p>
      <div className="content">
        <Item img={linux} text="Linux" />
        <Item img={bash} text="Bash" />
        <Item img={github} text="Github" />
        <Item img={figma} text="Figma" />
        <Item img={firebase} text="Firebase" />
        <Item img={ingles} text="Inglés B2" />
      </div>
    </div>
  );
};

export default Knowledge;
