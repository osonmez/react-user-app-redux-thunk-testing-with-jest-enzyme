import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from './shared/testUtil';

configure({ adapter: new Adapter() });

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
    const asd = findByTestAttr(wrapper, 'app');
    expect(asd.length).toBe(1);
  });

});
