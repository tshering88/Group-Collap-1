import React from 'react'
import { contactInfo } from '../../data'
import { Card, CardBody } from 'react-bootstrap'

const Contacts = () => {
  return (
    <CardBody>
       <Card style={{
        
       }}
       > 
       
      <Card.Title>Contact</Card.Title>
      <Card.Text>Get in touch with us! Fill out the form below or use our contact information.</Card.Text>

      <section className='card'>
      <Card.Title>Contact Information</Card.Title>
      <ul style= {{margin: '1.5', listStyleType: 'none'}}>
        {contactInfo.map((info, index) => (
            <li key= {index}>{info}</li>
        ))}
      </ul>
      </section>
    
   </Card>
   </CardBody>

  )
}

export default Contacts


