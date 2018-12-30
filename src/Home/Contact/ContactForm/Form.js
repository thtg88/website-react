import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import ContactErrorsAlert from './ContactErrorsAlert';
import MessageSentAlert from './MessageSentAlert';
import { Button } from 'react-scroll';
import FormInput from './FormInput';

const { REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY } = process.env;

const Form = ({
    errors,
    onSubmit,
    onInputChange,
    reCaptchaOnChange,
    recaptchaRef,
    success,
    submitButtonDisabled,
    submitButtonHtml,
    values,
}) => (
    <form name="form" noValidate onSubmit={onSubmit}>
        <input type="hidden" id="locale" name="locale" value="en" />
        <div id="contact_request-alert-container" className="form-group">
            <div className="col-lg-12">
                <ContactErrorsAlert errors={errors} />
                <MessageSentAlert success={success} />
            </div>
        </div>
        <div className="form-group">
            <div className="col-md-6">
                <FormInput
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onInputChange}
                    displayName="Name"
                    error={errors === null ? null : errors.name}
                    maxLength="255"
                />
                <FormInput
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onInputChange}
                    displayName="Email"
                    error={errors === null ? null : errors.email}
                    maxLength="255"
                />
                <FormInput
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={onInputChange}
                    displayName="Phone"
                    error={errors === null ? null : errors.phone}
                    maxLength="255"
                />
            </div>
            <div className="col-md-6">
                <div className="form-group has-feedback">
                    <FormInput
                        type="textarea"
                        name="message"
                        value={values.message}
                        onChange={onInputChange}
                        displayName="Message"
                        error={errors === null ? null : errors.message}
                        maxLength="4000"
                    />
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="col-md-12 has-feedback">
                <div className="g-recaptcha-container">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
                        onChange={reCaptchaOnChange}
                    />
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="col-md-12 text-center">
                <Button
                    type="submit"
                    to="form"
                    onClick={onSubmit}
                    className="btn btn-dark"
                    value={submitButtonHtml}
                    disabled={submitButtonDisabled}
                    smooth={true}
                    offset={-15}
                    duration={500}
                />
            </div>
        </div>
    </form>
);

export default Form;
