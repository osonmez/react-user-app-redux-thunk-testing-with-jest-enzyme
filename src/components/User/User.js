import React from 'react';
import PropTypes from 'prop-types';

const user = (props) => {

    if(!props.usr)return null;
    
    return (
    <div data-test="user">
        <p data-test="username">{props.usr.name}</p>
    </div>);
};

user.propTypes = {
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
    })
};

export default user;