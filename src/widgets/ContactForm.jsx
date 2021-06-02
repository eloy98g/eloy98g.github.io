/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';

import emailjs from 'emailjs-com';
import emailJsConfig from '../../env';

import '../styles/widgets/ContactForm.scss';

const ContactForm = () => {
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    try {
      const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };
      emailjs.send(
        emailJsConfig.REACT_APP_SERVICE_ID,
        emailJsConfig.REACT_APP_TEMPLATE_ID,
        templateParams,
        emailJsConfig.REACT_APP_USER_ID
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="contactform" ref={form} autoComplete="off">
      <div className="container">
        <div className="form">
          <input
            tabIndex="-1"
            className="text-input"
            type="text"
            autoComplete="off"
            name="name"
            required
          />
          <label htmlFor="name" className="sub-section-title">
            <span className="content-title">Nombre</span>
          </label>
        </div>
        <div className="form">
          <input
            tabIndex="-1"
            className="text-input"
            type="text"
            autoComplete="off"
            name="email"
            required
          />
          <label htmlFor="email" className="sub-section-title">
            <span className="content-title">Email</span>
          </label>
        </div>
        <div className="form">
          <input
            tabIndex="-1"
            className="text-input message"
            type="text"
            autoComplete="off"
            name="message"
            required
          />
          <label htmlFor="message" className="sub-section-title">
            <span className="content-title">Mensaje</span>
          </label>
        </div>
        <button className="submit" type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
