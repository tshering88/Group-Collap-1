


import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home/home';
import Footer from './pages/Footer/footer';
import NavBar from './pages/navbar/NavBar';
import Head from './components/Head'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/Service Page'
import About from './pages/about us/About';
  
const App = () => {





  return (

    <>
    <NavBar/>
    <Home/>
    
 <Login/>
            <Signup/>

    
     <ContactPage/>
    
      <Head/>

 
    <ServicesPage/>
      <About />
    
    <Footer/>
    </>
  )
}



export default App;


