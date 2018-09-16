import React from 'react';

const ContactErrorsAlert = ({ errors }) => {

    if(errors === null || typeof errors === 'undefined') {
        return (null);
    }

    return (
        <div className="alert alert-danger contact_request-alert">
            {Object.entries(errors).map(([key, error]) => (
                <p key={key}>{error}</p>
            ))}
        </div>
    );
};

export default ContactErrorsAlert;
