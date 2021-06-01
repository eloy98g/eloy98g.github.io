// React
import React from 'react';

// Style
import '../styles/components/Knowledge.scss';

// Logos
import flutter from '../assets/techs/flutter.png';
import firebase from '../assets/techs/firebase.png';
import github from '../assets/techs/github.png';
import react from '../assets/techs/react.png';
import redux from '../assets/techs/redux.png';
import bash from '../assets/techs/bash.png';
import cpp from '../assets/techs/cpp.png';
import figma from '../assets/techs/figma.png';
import gsap from '../assets/techs/gsap.png';
import js from '../assets/techs/js.png';
import linux from '../assets/techs/linux.png';
import sass from '../assets/techs/sass.png';
import htmlcss from '../assets/techs/htmlcss.png';
import ingles from '../assets/techs/ingles.png';

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
  return (
    <div className="knowledge">
      <p className="knw_title">Conocimientos</p>
      <p className="subtitle">Lenguajes y librerías </p>
      <div className="content">
        <Item img={js} text="Javascript" />
        <Item img={sass} text="Sass" />
        <Item img={cpp} text="C++" />
        <Item img={gsap} text="GSAP" />
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
