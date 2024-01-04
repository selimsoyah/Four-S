import React, { useState } from 'react';
import '../style/Email.css'
const ContactForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission, e.g., sending an email
    console.log('Email submitted:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <div className="contact-form">
     
      <form onSubmit={handleSubmit}>
      <h2>Contactez nous pour avoir plus <br/> d’informations</h2>
        <div className='input'>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Entrez votre e-mail"
          required
        />
        <button type="submit">Envoyer</button>

        </div>
      </form>
    </div>
  );
};

export default ContactForm;
