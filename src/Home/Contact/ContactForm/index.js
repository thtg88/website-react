import React, { Component } from 'react';
import { AllHtmlEntities } from 'html-entities';
import Form from './Form';
import './ContactForm.scss';

const { REACT_APP_WEBSITE_API_BASE_URL } = process.env;

class ContactForm extends Component {
    state = {
        contactRequestErrors: null,
        contactRequestSuccess: false,
        name: '',
        phone: '',
        email: '',
        message: '',
        recaptcha: null,
        g_recaptcha_response: null,
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
                recaptcha: el,
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
            g_recaptcha_response: value,
        })
    }

    handleSubmit(e) {
        const {
            email,
            g_recaptcha_response,
            message,
            name,
            phone,
        } = this.state;
        e.preventDefault();

        this.setState({
            contactRequestErrors: null,
            contactRequestSuccess: false,
            submitButtonDisabled: true,
            submitButtonHtml: 'Sending...',
        });

        fetch(REACT_APP_WEBSITE_API_BASE_URL+'/api/v1/contact-requests', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
                g_recaptcha_response,
            })
        })
            .then(response => response)
            .then(response => response.json())
            .then(this.handleResponse)
            .catch(this.handleResponse);
    }

    handleResponse(response) {
        const { recaptcha } = this.state;
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

                if(recaptcha !== null) {
                    recaptcha.reset();
                }
            } else if(typeof response.errors !== 'undefined') {
                const newContactRequestErrors = {};

                // Process validation errors
                Object.entries(response.errors).forEach(([field, errors]) => {
                    if(Array.isArray(errors)) {
                        errors.forEach((error, idx) => {
                            const msg = entities.decode(error);

                            newContactRequestErrors[field] = msg;
                        });
                    }
                });

                this.setState({
                    contactRequestErrors: newContactRequestErrors,
                });

            } else if(typeof response.message !== 'undefined') {
                // Anything different from an HTTP response goes here
                this.setState({
                    contactRequestErrors: {
                        name: response.message,
                    },
                });
            }
        }

        this.setState({
            submitButtonDisabled: false,
            submitButtonHtml: 'Send Message',
        });

        if(recaptcha !== null) {
            recaptcha.reset();
        }
    }

    render() {
        const {
            contactRequestErrors,
            contactRequestSuccess,
            email,
            message,
            name,
            phone,
            submitButtonDisabled,
            submitButtonHtml,
        } = this.state;
        const values = {
            email,
            message,
            name,
            phone,
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
                        errors={contactRequestErrors}
                        onSubmit={this.handleSubmit}
                        onInputChange={this.updateInputValue}
                        reCaptchaOnChange={this.reCaptchaOnChange}
                        reCaptchaRef={this.assignRecaptcha}
                        success={contactRequestSuccess}
                        submitButtonDisabled={submitButtonDisabled}
                        submitButtonHtml={submitButtonHtml}
                        values={values}
                    />
                </div>
            </div>
        );
    }
}

export default ContactForm;
