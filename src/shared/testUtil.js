import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { middlewares, rootReducer } from '../store';


export const findByTestAttr = (component, arrt) => {
    return component.find(`[data-test="${arrt}"]`);
};

export const findByTestIdAttr = (component, arrt) => {
    return component.find(`[data-testid="${arrt}"]`);
};

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
};

export const setUpShallowWrapper = (TestComponent, testProps={}) => {
    return shallow(<TestComponent {...testProps} />);
};

export const createTestStore = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};