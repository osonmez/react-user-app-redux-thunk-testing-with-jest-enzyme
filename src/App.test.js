import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

import { findByTestAttr } from './shared/testUtil';

describe('<App />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  });
 
  it('Should have app', () =>  {
    const app = findByTestAttr(wrapper, 'app');
    expect(app).toHaveLength(1);
  });

});
