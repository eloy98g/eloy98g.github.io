/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
// React
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import emailJsConfig from '../../env';
import '../styles/widgets/ContactForm.scss';
import contactFormAnimation from '../animations/ContactFormAnimation';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = () => {
    if (name && email && message) {
      contactFormAnimation()
      try {
        const templateParams = {
          name,
          email,
          message,
        };
        emailjs.send(
          emailJsConfig.REACT_APP_SERVICE_ID,
          emailJsConfig.REACT_APP_TEMPLATE_ID,
          templateParams,
          emailJsConfig.REACT_APP_USER_ID
        );
        setName('');
        setEmail('');
        setMessage('');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <form className="contactform" autoComplete="off">
      <div className="container">
        <div className="form">
          <input
            value={name}
            className="text-input"
            type="text"
            autoComplete="off"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="name" className="sub-section-title">
            <span className="content-title">Nombre</span>
          </label>
        </div>
        <div className="form">
          <input
            value={email}
            className="text-input"
            type="text"
            autoComplete="off"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="sub-section-title">
            <span className="content-title">Email</span>
          </label>
        </div>
        <div className="form">
          <input
            value={message}
            className="text-input message"
            type="text"
            autoComplete="off"
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <label htmlFor="message" className="sub-section-title">
            <span className="content-title">Mensaje</span>
          </label>
        </div>
        <button className="submit" type="button" onClick={handleSubmit}>
          Enviar
          <p className="msg">&#x1f4e7;</p>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
