import React, { Component } from 'react';
import { Link } from 'react-scroll';
import ReactGA from 'react-ga';
import About from './About';
import Contact from './Contact';
import './Home.css';

class Home extends Component {
    state = {
        opacity: typeof window !== 'undefined' ? 0 : 1,
        display: typeof window !== 'undefined' ? 'none' : 'block',
    };

    constructor(props) {
        super(props);

        this.handleLoad = this.handleLoad.bind(this);

        if(process.env.NODE_ENV === 'production') {
            ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
        }
    }

    componentDidMount() {
        if(process.env.NODE_ENV === 'production') {
            ReactGA.pageview('/');
        }
    }

    handleLoad() {
        if(this.state.opacity === 0) {
            this.setState({
                opacity: 1,
                display: 'none'
            });
        }
    }

    render() {
        return (
            <div style={{height:'100%'}}>
                <div className="loading-container" style={{zIndex: 2000, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#337ab7', display:this.state.display}}>
                    <div className="loader" style={{width: 6+'px', height: 6+'px', animation: 'typing 1s linear infinite alternate', margin: '50vh auto', position: 'relative', left: '-12px', backgroundColor: '#ffffff'}}></div>
                </div>
                <header id="top" className="header" onLoad={this.handleLoad} style={{opacity:this.state.opacity}} title="Picture taken at: Cala Blanca, Ciutadella de Menorca, Spain.">
                    <div className="text-vertical-center">
                        <h1>{"Hi, I'm Marco Marassi."}</h1>
                        <h3>Web Developer by day, Sleeper by night.</h3>
                        <p>What did you think I was? A superhero or something?</p>
                        <div id="profile-icon-container">
                            <img id="profile-icon" src={process.env.PUBLIC_URL+"/icon.png"} alt="Icon Logo" title="This looks like my face." className="img-responsive img-circle" />
                        </div>
                        <Link to="about" smooth={true} duration={1000} className="btn btn-dark btn-lg">{"But wait, there's more!"}</Link>
                    </div>
                </header>
                <About name="about" />
                <Contact />
            </div>
        );
    }
}

export default Home;
