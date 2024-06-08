import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mqkrvoqb");
    if (state.succeeded) {
        // return <p>Thanks for joining!</p>;
        alert("Message send successfully !")
    }
    
  return (
    <form onSubmit={handleSubmit} className="contact-form">
         <label htmlFor="name">
      Name
    </label>
    <input
      id="name"
      type="name" 
      name="name"
      placeholder='name' required
    />
    <ValidationError 
      prefix="Name" 
      field="name"
      errors={state.errors}
    />
    <label htmlFor="email">
      Email Address
    </label>
    <input
      id="email"
      type="email" 
      name="email"
      placeholder='email' required
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <textarea
      id="message"
      name="message"
      placeholder='write here...'
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <button type="submit" disabled={state.submitting}>
      Submit
    </button>
  </form>

  )
}
