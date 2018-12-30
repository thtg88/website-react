import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const MessageSentAlert = ({ success }) => {
    if(success !== true) {
        return null;
    }

    return (
        <div className="alert alert-success contact_request-alert">
            <p>
                Message sent
                {' '}
                <FontAwesomeIcon
                    fixedWidth
                    size="lg"
                    icon={faCheck}
                />
            </p>
        </div>
    );
};

export default MessageSentAlert;
