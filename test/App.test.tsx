import React from 'react';
import { mount } from 'enzyme';
import App from '../src/App';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
