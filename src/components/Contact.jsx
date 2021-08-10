import React, { useEffect } from 'react';
import '../styles/components/Contact.scss';
import github from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';
import ContactForm from '../widgets/ContactForm';
import contactAnimation from '../animations/ContactAnimation';

const Contact = () => {
  useEffect(() => {
    contactAnimation()
  }, []);
  
  return (
    <div className="contact">
      <div className="content">
        <p className="title">¿Colaboramos?</p>
        <div className="contact-container">
          <div className="media_container">
            <a
              href="https://github.com/eloy98g"
              className="media"
              target="blank"
            >
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
    </div>
  );
};

export default Contact;
