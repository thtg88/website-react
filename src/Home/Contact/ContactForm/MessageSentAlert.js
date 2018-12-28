import React from 'react';

const MessageSentAlert = ({ success }) => {

    if(success !== true) {
        return (null);
    }

    return (
        <div className="alert alert-success contact_request-alert">
            <p>Message sent <span className="fa fa-fw fa-lg fa-check"></span></p>
        </div>
    );
};

export default MessageSentAlert;
