

export const findByTestAttr = (component, arrt) => {
    return component.find(`[data-test="${arrt}"]`);
}
export const findByTestIdAttr = (component, arrt) => {
    return component.find(`[data-testid="${arrt}"]`);
}