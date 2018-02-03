import React, { Component } from 'react';
import Loader from '../Loader/Loader.js';
import Header from './Header/Header.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import InstagramModal from './InstagramModal/InstagramModal.js';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Loader />
        <Header />
        <About />
        <Contact />
        <InstagramModal />
      </div>
    );
  }
}
export default Home;
