import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

import { findByTestAttr } from './shared/testUtil';


describe('<App />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
 
  it('Should have app', () =>  {
    const app = findByTestAttr(wrapper, 'app');
    expect(app).toHaveLength(1);
  });

});
