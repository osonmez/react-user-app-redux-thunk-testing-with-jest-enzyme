import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

const userDetails = (props) => {

    if (!props.usr) return null;
    return (
        <Form>
            <Form.Control data-testid="detail-id" as="input" disabled value={props.usr.id}  />
            <Form.Control data-testid="detail-name" as="input" disabled value={props.usr.name}  />
            <Form.Control data-testid="detail-username" as="input" disabled value={props.usr.username}  />
            <Form.Control data-testid="detail-email" as="input" disabled value={props.usr.email}  />
            <Form.Control data-testid="detail-street" as="input" disabled value={props.usr.address.street}  />
            <Form.Control data-testid="detail-suite" as="input" disabled value={props.usr.address.suite}  />
            <Form.Control data-testid="detail-city" as="input" disabled value={props.usr.address.city}  />
            <Form.Control data-testid="detail-zipcode" as="input" disabled value={props.usr.address.zipcode}  />
        </Form>
    );
};
userDetails.propTypes = {
    usr: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
            street: PropTypes.string.isRequired,
            suite: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            zipcode: PropTypes.string.isRequired
        })
    }),
    isEdit: PropTypes.bool.isRequired
};

export default userDetails;