import React, { Component } from 'react';
import AboutContent from './AboutContent';
import WheresWaldoModal from './WheresWaldoModal';
import ClassicCarsModal from './ClassicCarsModal';

class About extends Component {

    state = {
        classicCarsModal: {
            show: false,
        },
        wheresWaldoModal: {
            show: false,
        },
    };

    constructor(props) {
        super(props);

        this.handleClassicCarsShow = this.handleClassicCarsShow.bind(this);
        this.handleWheresWaldoShow = this.handleWheresWaldoShow.bind(this);
        this.handleClassicCarsClose = this.handleClassicCarsClose.bind(this);
        this.handleWheresWaldoClose = this.handleWheresWaldoClose.bind(this);
    }

    handleWheresWaldoClose() {
        this.setState({
            wheresWaldoModal: {
                show: false,
            },
        });
    }

    handleClassicCarsClose() {
        this.setState({
            classicCarsModal: {
                show: false,
            },
        });
    }

    handleWheresWaldoShow() {
        this.setState({
            wheresWaldoModal: {
                show: true,
            },
        });
    }

    handleClassicCarsShow() {
        this.setState({
            classicCarsModal: {
                show: true,
            },
        });
    }

    render() {
        return (
            <section id="about" className="about">
                <AboutContent
                    wheresWaldoLinkOnClick={this.handleWheresWaldoShow}
                    classicCarsOnClick={this.handleClassicCarsShow}
                />
                <WheresWaldoModal
                    show={this.state.wheresWaldoModal.show}
                    onHide={this.handleWheresWaldoClose}
                />
                <ClassicCarsModal
                    show={this.state.classicCarsModal.show}
                    onHide={this.handleClassicCarsClose}
                />
            </section>
        );
    }
}
export default About;
