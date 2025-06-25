


import React from 'react';
import Home from './pages/Home/home';
import Footer from './pages/Footer/footer';
import NavBar from './components/NavBar';
import Head from './components/Head'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/Service Page'
import About from './pages/AboutUs/About';
import SignIn from './pages/signin/Signin';
import { AuthProvider } from './hooks/AuthContext';
  
const App = () => {





  return (

    <AuthProvider>
    <NavBar/>
    <Home/>
    <Login/>
    <Signup/>
    <SignIn/>
    
     <ContactPage/>
    
      <Head/>

 
    <ServicesPage/>
      <About />
    
    <Footer/>
    </AuthProvider>
  )
}



export default App;

