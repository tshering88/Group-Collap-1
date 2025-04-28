
import React from 'react'
import Contacts from './components/Contact/contact'
import ContactForm from './components/ContactForm'
import Head from './components/Head'
import ContactPage from './pages/ContactPage'


import React from 'react'
import ServicesPage from './pages/Service Page'
import About from './pages/about us/About';
  
const App = () => {
  return (

    <div>
     <ContactPage/>
    
      <Head/>

    <div className="App">
    <ServicesPage/>
      <About />
      

    </div>
  );
}

export default App;
