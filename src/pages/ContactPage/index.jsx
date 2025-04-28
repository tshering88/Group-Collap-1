import React from 'react'
import Contacts from '../../components/Contact/contact'
import ContactForm from '../../components/ContactForm'
import { Card } from 'react-bootstrap'

const ContactPage = () => {
  return (
    <Card style={{textAlign: 'center'}}>
      <Contacts/>
      <ContactForm/>
    </Card>
  )
}

export default ContactPage
