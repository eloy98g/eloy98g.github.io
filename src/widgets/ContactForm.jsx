import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import emailJsConfig from '../../env';
import '../styles/widgets/ContactForm.scss';
import contactFormAnimation from '../animations/ContactFormAnimation';
import Input from './Input'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name && email && message) {
      contactFormAnimation();
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
        <Input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          title="Nombre"
        />
        <Input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          title="Email"
        />
        <Input
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          title="Mensaje"
        />
        <button className="submit" type="button" onClick={handleSubmit}>
          Enviar
          <p className="msg">&#x1f4e7;</p>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
