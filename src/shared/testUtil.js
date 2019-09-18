import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, arrt) => {
    return component.find(`[data-test="${arrt}"]`);
};

export const findByTestIdAttr = (component, arrt) => {
    return component.find(`[data-testid="${arrt}"]`);
};

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
}