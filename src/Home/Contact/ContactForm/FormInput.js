import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const FormInput = ({
    displayName,
    error,
    maxLength,
    name,
    onChange,
    type,
    value,
}) => {
    const containerErrorClass = error ? ' has-error' : '';

    return (
        <div className={`form-group has-feedback${containerErrorClass}`}>
            {
                type === 'textarea'
                    ? <textarea
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={`Your ${displayName} *`}
                        aria-label={`Your ${displayName} *`}
                        className="form-control contact_request-form-control"
                        maxLength={maxLength}
                    />
                    : <input
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={`Your ${displayName} *`}
                        aria-label={`Your ${displayName} *`}
                        className="form-control contact_request-form-control"
                        maxLength={maxLength}
                    />
            }
            {
                error
                    ? <Fragment>
                        <span
                            id={`${name}-feedback`}
                            className="form-control-feedback contact_request-feedback"
                            aria-hidden="true"
                        >
                            <FontAwesomeIcon
                                fixedWidth
                                icon={faTimesCircle}
                                size="2x"
                            />
                        </span>
                        <span
                            id={`${name}-status`}
                            className="sr-only contact_request-status contact_request-status-hide"
                        >
                            (error)
                        </span>
                    </Fragment>
                    : null
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
