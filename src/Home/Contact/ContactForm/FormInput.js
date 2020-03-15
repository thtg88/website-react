import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
    displayName,
    error,
    maxLength,
    name,
    onChange,
    type,
    value,
}) => {
    return (
        <div className="form-group">
            {
                type === 'textarea'
                    ? (
                        <textarea
                            type={type}
                            id={name}
                            name={name}
                            value={value}
                            onChange={onChange}
                            placeholder={`Your ${displayName} *`}
                            aria-label={`Your ${displayName} *`}
                            className={`form-control contact_request-form-control${error ? ' is-invalid' : ''}`}
                            maxLength={maxLength}
                        />
                    )
                    : (
                        <input
                            type={type}
                            id={name}
                            name={name}
                            value={value}
                            onChange={onChange}
                            placeholder={`Your ${displayName} *`}
                            aria-label={`Your ${displayName} *`}
                            className={`form-control contact_request-form-control${error ? ' is-invalid' : ''}`}
                            maxLength={maxLength}
                        />
                    )
            }
        </div>
    );
};

FormInput.propTypes = {
    displayName: PropTypes.string,
    error: PropTypes.string,
    maxLength: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
};

export default FormInput;
