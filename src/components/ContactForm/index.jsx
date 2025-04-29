import React, { useState } from 'react'
import { Button, Card, CardTitle, Form } from 'react-bootstrap'

const ContactForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit= (e) => {
        e.preventDefault()
    }

  return (
    <Card>
      <CardTitle>Contact Form</CardTitle>
      <Form onSubmit={{handleSubmit}}>
        <div style={{marginBottom: '1rem'}}>
            <input
            type='text'
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            required
            />         
        </div>
        <div style={{marginBottom: '1rem'}}>
            <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
            />         
        </div>
        <div style={{marginBottom: '1rem',}}>
            <textarea
            type='message'
            rows={6}
            value={message}
            placeholder='Message'
            onChange={(e) => setMessage(e.target.value)}
            required
            />         
        </div>
        <Button variant='submit'>Send Message</Button>
      </Form>
      </Card>
  )
}

export default ContactForm
