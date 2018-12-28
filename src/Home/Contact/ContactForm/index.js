import React, { Component } from 'react';
import update from 'immutability-helper';
import { AllHtmlEntities } from 'html-entities';
import Form from './Form';
import './ContactForm.css';

class ContactForm extends Component {

    state = {
        contactRequestErrors: null,
        contactRequestSuccess: false,
        name: '',
        phone: '',
        email: '',
        message: '',
        recaptcha: null,
        submitButtonDisabled: false,
        submitButtonHtml: 'Send Message',
    };

    constructor(props) {
        super(props);

        this.assignRecaptcha = this.assignRecaptcha.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.reCaptchaOnChange = this.reCaptchaOnChange.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    assignRecaptcha(el) {
        if(this.state.recaptcha === null) {
            this.setState({
                recaptcha: el
            });
        }
    }

    updateInputValue(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    reCaptchaOnChange(value) {
        // console.log("Captcha value:", value);
        this.setState({
            g_recaptcha_response: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            contactRequestErrors: null,
            contactRequestSuccess: false,
            submitButtonDisabled: true,
            submitButtonHtml: 'Sending...',
        });

        fetch(process.env.REACT_APP_WEBSITE_API_BASE_URL+'/api/v1/contact-requests', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message,
                g_recaptcha_response: this.state.g_recaptcha_response,
            })
        })
            .then(function(response) {
                return response;
            })
            .then(function(response) {
                return response.json();
            })
            .then(this.handleResponse)
            .catch(this.handleResponse);
    }

    handleResponse(response) {
        const entities = new AllHtmlEntities();

        if(typeof response === 'object') {
            if(typeof response.success !== 'undefined') {
                // Successful response
                this.setState({
                    contactRequestSuccess: true,
                    name: '',
                    phone: '',
                    email: '',
                    message: '',
                });
                if(this.state.recaptcha !== null) {
                    this.state.recaptcha.reset();
                }

            } else if(typeof response.errors !== 'undefined') {

                // Process validation errors
                let allErrors = response.errors;
                let msg;
                for(let field in allErrors) {
                    if(allErrors.hasOwnProperty(field)) {
                        if(Array.isArray(allErrors[field])) {
                            let inputErrors = allErrors[field];
                            for(let idx in inputErrors) {
                                if(inputErrors.hasOwnProperty(idx)) {

                                    // Set error for specific input
                                    if(this.state.contactRequestErrors === null) {
                                        this.setState({
                                            contactRequestErrors: {}
                                        });
                                    }

                                    msg = entities.decode(inputErrors[idx]);

                                    const setState = {contactRequestErrors: {[field]: {$set: msg}}};
                                    this.setState(update(this.state, setState));
                                }
                            }
                        }
                    }
                }
            } else if(typeof response.message !== 'undefined') {
                // Anything different from an HTTP response goes here
                if(this.state.contactRequestErrors === null) {
                    this.setState({
                        contactRequestErrors: {}
                    });
                }

                const setState = {contactRequestErrors: {name: {$set: response.message}}};
                this.setState(update(this.state, setState));
            }
        }

        this.setState({
            submitButtonDisabled: false,
            submitButtonHtml: 'Send Message',
        });

        if(this.state.recaptcha !== null) {
            this.state.recaptcha.reset();
        }
    }

    render() {

        const {
            email,
            message,
            name,
            phone
        } = this.state;

        const values = {
            email,
            message,
            name,
            phone
        };

        return (
            <div className="row">
                <div className="col-lg-12 text-center">
                    <hr className="small" />
                    <p>
                        By completing the form below, you agree the use of your details for future communications with yourself in regards to the message.
                        Details are not stored in any database.
                    </p>
                    <Form
                        errors={this.state.contactRequestErrors}
                        onSubmit={this.handleSubmit}
                        onInputChange={this.updateInputValue}
                        reCaptchaOnChange={this.reCaptchaOnChange}
                        reCaptchaRef={this.assignRecaptcha}
                        success={this.state.contactRequestSuccess}
                        submitButtonDisabled={this.state.submitButtonDisabled}
                        submitButtonHtml={this.state.submitButtonHtml}
                        values={values}
                    />
                </div>
            </div>
        );
    }
}

export default ContactForm;
