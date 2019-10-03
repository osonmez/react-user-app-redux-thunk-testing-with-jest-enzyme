import React from 'react'
import PropTypes from 'prop-types'

const userInfo = (props) => {


    return (
        <div data-testid="info">
            <p data-testid="info-id">{props.usr.id}</p>
            <p data-testid="info-name">{props.usr.name}</p>
            <p data-testid="info-username">{props.usr.username}</p>
            <p data-testid="info-email">{props.usr.email}</p>
            <p data-testid="info-street">{props.usr.address.street}</p>
            <p data-testid="info-suite">{props.usr.address.suite}</p>
            <p data-testid="info-city">{props.usr.address.city}</p>
            <p data-testid="info-zipcode">{props.usr.address.zipcode}</p>
        </div>
    )
}

userInfo.propTypes = {
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
}

export default userInfo;

