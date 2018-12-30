import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ContactBar from './ContactBar';
import ContactForm from './ContactForm';
import Copyright from './Copyright';
import { animateScroll } from 'react-scroll';

class Contact extends Component {
    state = {
        isScrollToTopVisible: false,
    };

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(evt) {
        const { isScrollToTopVisible } = this.state;

        // This cause a lot of wasted re-render
        // every time the page is scrolled
        // this.setState({
        //     isScrollToTopVisible: window.pageYOffset > 100,
        // });

        if(window.pageYOffset > 100) {
            // This way we don't keep setting the state
            // if the scroll to top visible
            if(!isScrollToTopVisible) {
                this.setState({
                    isScrollToTopVisible: true,
                });
            }
        } else {
            // This way we don't keep setting the state
            // if the scroll to top is not visible
            if(isScrollToTopVisible) {
                this.setState({
                    isScrollToTopVisible: false,
                });
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { isScrollToTopVisible } = this.state;

        return (
            <footer id="contact" className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Contacts</h2>
                        </div>
                    </div>
                    <ContactBar />
                    <ContactForm />
                    <Copyright />
                </div>
                <a
                    id="to-top"
                    href="#top"
                    onClick={() => animateScroll.scrollToTop()}
                    className="btn btn-dark btn-lg"
                    aria-label="Go to the top of the page."
                    style={{
                        opacity: isScrollToTopVisible ? 1 : 0,
                        visibility: isScrollToTopVisible ? 'visible' : 'hidden',
                        transition: '0.5s',
                    }}
                >
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        fixedWidth
                        size="2x"
                    />
                </a>
            </footer>
        );
    }
}

export default Contact;
