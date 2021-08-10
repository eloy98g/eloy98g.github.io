import React from 'react';


// Components
import Hero from '../components/Hero';
import About from '../components/About';
import TimeLine from '../components/TimeLine';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';
import Contact from '../components/Contact';

// Widget
import ScrollDown from '../widgets/ScrollDown';

// Styles
import '../styles/containers/Home.scss';


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <TimeLine />
      <Projects />
      <Knowledge />
      <Contact />
      <ScrollDown />
    </div>
  );
};

export default Home;
