// React
import React, { useEffect } from 'react';

// Animation
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Style
import '../styles/components/Contact.scss';

// Logos
import github from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';

// Widgets
import ContactForm from '../widgets/ContactForm';

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {

  useEffect(() => {
    gsap.to('.scroll-down', {
      display: 'none',
      scrollTrigger: {
        trigger: '.media_container',
        start: 'top 100%',
      },
    })
  }, [])
  return (
    <div className="contact">
      <p className="title">¿Colaboramos?</p>
      <div className="content">
        <div className="media_container">
          <a href="https://github.com/eloy98g" className="media" target="blank">
            <img src={github} alt="" title="Github" target="blank" />
          </a>
          <a
            href="https://www.linkedin.com/in/eloy-gomez-garcia-464125201/"
            className="media"
            target="blank"
          >
            <img src={linkedin} alt="" title="Linkedin" target="blank" />
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
