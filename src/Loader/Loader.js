import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {

  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      display: 'block'
    }
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);

  }

  componentDidUpdate () {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    if(this.state.display === 'block') {
      this.setState({
        display: 'none'
      });
    }
  }

  render() {
    return (
      <div className="loading-container" style={{zIndex: 2000, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#337ab7', display:this.state.display}}>
        <div className="loader" style={{width: 6+'px', height: 6+'px', animation: 'typing 1s linear infinite alternate', margin: '50vh auto', position: 'relative', left: '-12px', backgroundColor: '#ffffff'}}></div>
      </div>
    );
  }
}
export default Loader;
