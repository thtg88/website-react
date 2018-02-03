import React, { Component } from 'react';
import './Header.css';
import icon from './icon.png';

class Header extends Component {

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      opacity: 0
    }
  }

  render() {
    return (
      <header id="top" className="header" style={{opacity:this.state.opacity}} title="Picture taken at: Cala Blanca, Ciutadella de Menorca, Spain.">
        <div className="text-vertical-center">
          <h1>Hi, I'm Marco Marassi.</h1>
          <h3>Web Developer by day, Sleeper by night.</h3>
          <p>What did you think I was? A superhero or something?</p>
          <div id="profile-icon-container">
            <img id="profile-icon" src={icon} alt="Icon Logo" title="This looks like my face." className="img-responsive img-circle" />
          </div>
          <a href="#about" className="btn btn-dark btn-lg">But wait, there's more!</a>
        </div>
      </header>
    );
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);

  }

  componentDidUpdate () {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    if(this.state.opacity === 0) {
      this.setState({
        opacity: 1
      });
    }
  }
}
export default Header;
