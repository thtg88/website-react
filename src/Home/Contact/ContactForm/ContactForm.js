import React, { Component } from 'react';
import { Button } from 'react-scroll';
import ReCAPTCHA from "react-google-recaptcha";
import update from 'immutability-helper';
import { AllHtmlEntities } from 'html-entities';
import './ContactForm.css';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

    this.assignRecaptcha = this.assignRecaptcha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.reCaptchaOnChange = this.reCaptchaOnChange.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <hr className="small" />
          <p>By completing the form below, you agree the use of your details for future communications with yourself in regards to the message. Details are not stored in any database.</p>
          <form name="form" noValidate onSubmit={this.handleSubmit}>
            <input type="hidden" id="locale" name="locale" value="en" />
            <div id="contact_request-alert-container" className="form-group">
              <div className="col-lg-12">
                <div className="alert alert-danger contact_request-alert" style={{display:(this.state.contactRequestErrors !== null ? 'block' : 'none')}}>
                  <p>{this.state.contactRequestErrors !== null && typeof this.state.contactRequestErrors.name !== 'undefined' ? this.state.contactRequestErrors.name : ''}</p>
                  <p>{this.state.contactRequestErrors !== null && typeof this.state.contactRequestErrors.email !== 'undefined' ? this.state.contactRequestErrors.email : ''}</p>
                  <p>{this.state.contactRequestErrors !== null && typeof this.state.contactRequestErrors.phone !== 'undefined' ? this.state.contactRequestErrors.phone : ''}</p>
                  <p>{this.state.contactRequestErrors !== null && typeof this.state.contactRequestErrors.message !== 'undefined' ? this.state.contactRequestErrors.message : ''}</p>
                  <p>{this.state.contactRequestErrors !== null && typeof this.state.contactRequestErrors.g_recaptcha_response !== 'undefined' ? this.state.contactRequestErrors.g_recaptcha_response : ''}</p>
                  <p>{this.state.contactRequestErrors !== null && typeof this.state.contactRequestErrors['g-recaptcha-response'] !== 'undefined' ? this.state.contactRequestErrors['g-recaptcha-response'] : ''}</p>
                </div>
                <div className="alert alert-success contact_request-alert" style={{display:this.state.contactRequestSuccess === true ? 'block' : 'none'}}>
                  <p>Message sent <span className="fa fa-fw fa-lg fa-check"></span></p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-6">
                <div className="form-group has-feedback">
                  <input type="text" id="name" name="name" value={this.state.name} onChange={this.updateInputValue} className="form-control contact_request-form-control" aria-label="Your Name *" maxLength="255" placeholder="Your Name *" />
                  <span id="name-feedback" className="fa fa-fw fa-lg fa-remove form-control-feedback contact_request-feedback" aria-hidden="true"></span>
                  <span id="name-status" className="sr-only contact_request-status contact_request-status-hide">(error)</span>
                </div>
                <div className="form-group has-feedback">
                  <input type="email" id="email" name="email" value={this.state.email} onChange={this.updateInputValue} className="form-control contact_request-form-control" aria-label="Your Email *" maxLength="255" placeholder="Your Email *" />
                  <span id="email-feedback" className="fa fa-fw fa-lg fa-remove form-control-feedback contact_request-feedback" aria-hidden="true"></span>
                  <span id="email-status" className="sr-only contact_request-status contact_request-status-hide">(error)</span>
                </div>
                <div className="form-group has-feedback">
                  <input type="tel" id="phone" name="phone" value={this.state.phone} onChange={this.updateInputValue} className="form-control contact_request-form-control" aria-label="Your Phone *" maxLength="255" placeholder="Your Phone *" />
                  <span id="phone-feedback" className="fa fa-fw fa-lg fa-remove form-control-feedback contact_request-feedback" aria-hidden="true"></span>
                  <span id="phone-status" className="sr-only contact_request-status contact_request-status-hide" i18n="@@welcomeFormControlErrorStatus">error</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group has-feedback">
                  <textarea id="message" name="message" value={this.state.message} onChange={this.updateInputValue} className="form-control contact_request-form-control" aria-label="Your Message *" maxLength="4000" placeholder="Your Message *"></textarea>
                  <span id="message-feedback" className="fa fa-fw fa-lg fa-remove form-control-feedback contact_request-feedback" aria-hidden="true"></span>
                  <span id="message-status" className="sr-only contact_request-status contact_request-status-hide">(error)</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12 has-feedback">
                <div className="g-recaptcha-container">
                  <ReCAPTCHA ref={this.assignRecaptcha} sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY} onChange={this.reCaptchaOnChange} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-md-12 text-center">
                <Button type="submit" to="form" onClick={this.handleSubmit} className="btn btn-dark" value={this.state.submitButtonHtml} disabled={this.state.submitButtonDisabled} smooth={true} offset={-15} duration={500} />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
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
    }).then(function(response) {
      return response;
    }).then(function(response) {
      return response.json();
    }).then(this.handleResponse)
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
        this.state.recaptcha.reset();

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

                  const setState =  {contactRequestErrors: {[field]: {$set: msg}}};
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

        const setState =  {contactRequestErrors: {name: {$set: response.message}}};
        this.setState(update(this.state, setState));
      }
    }

    this.setState({
      submitButtonDisabled: false,
      submitButtonHtml: 'Send Message',
    });
    this.state.recaptcha.reset();
  }
}
export default ContactForm;
