// React
import React from 'react';

// Style
import '../styles/components/Contact.scss';

// Logos
import github from '../assets/logos/github.png';
import mail from '../assets/logos/mail.png';
import linkedin from '../assets/logos/linkedin.png';

const Contact = () => {
  return (
    <div className="contact">
      <p className="title">¿Quieres colaborar?</p>
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
        <a
          href="https://www.linkedin.com/in/eloy-gomez-garcia-464125201/"
          className="media"
          target="blank"
        >
          <img src={mail} alt="" title="Gmail" target="blank" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
