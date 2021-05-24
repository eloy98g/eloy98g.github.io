import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TimeLine from '../components/TimeLine';
import '../styles/containers/Home.scss';
import ScrollDown from '../widgets/ScrollDown';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <TimeLine />
      <ScrollDown />
    </div>
  );
};

export default Home;