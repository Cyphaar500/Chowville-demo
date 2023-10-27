'use client'
import { useState } from 'react';
import { StyledContact, StyledContactForm } from './Contact.styled';

const Contact = () => {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [num, setNum] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
      e.preventDefault()

      if (!text) {
          alert('Please send us a message')
          return
      }

      if (!email) {
          alert('Please input a valid mail address')
          return
      }

      setText('')
      setEmail('')
      setNum('')
      setMessage('')
  }

  return (
    <StyledContact>
        <h1>Contact</h1>
        <h2>Reach out to our customer service representatives.</h2>
        <StyledContactForm onSubmit={onSubmit}>
          <label htmlFor="Name"></label>
          <input
              type="text"
              placeholder="Name"
              value={text} 
              onChange={(e) => setText(e.target.value)}
              className='form-inputs' 
          />
          <label htmlFor="Phone Number"></label>
          <input
              type="text"
              placeholder="Phone Number"
              value={num} 
              onChange={(e) => setNum(e.target.value)}
              className='form-inputs' 
          />
          <label htmlFor="Email Address"></label>
          <input
              type="text"
              placeholder="Email Address"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className='form-inputs'
          />
          <textarea 
              className="textarea" 
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="75" 
              rows="4">
          </textarea>
          <input type="submit" value="Send Message" className='form-button'/>
        </StyledContactForm>
    </StyledContact>
  )
}

export default Contact;
