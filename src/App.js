
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './Contact';
import Footer from './components/Footer';


function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
  </>
  );
}

export default App;
