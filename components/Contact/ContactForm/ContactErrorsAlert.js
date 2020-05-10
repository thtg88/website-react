import React from 'react';
import PropTypes from 'prop-types';

const ContactErrorsAlert = ({ errors }) => {
    if(errors === null || typeof errors === 'undefined') {
        return null;
    }

    return (
        <div className="alert alert-danger contact_request-alert">
            {
                Object.entries(errors).map(
                    ([key, error]) => <p key={key} className="m-0">{error}</p>
                )
            }
        </div>
    );
};

ContactErrorsAlert.propTypes = {
    errors: PropTypes.object,
};

export default ContactErrorsAlert;
