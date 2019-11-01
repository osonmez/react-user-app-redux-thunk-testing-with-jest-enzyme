import React from 'react';
import classes from './Backdrop.module.css'

const backDrop = (props) => {
    
    let attachedClasses = [classes.Backdrop, 'd-flex', 'justify-content-center', 'align-items-center'];

    return (
    props.show ? (<div className={attachedClasses.join(' ')}>{props.children}</div>): null);
}

export default backDrop;