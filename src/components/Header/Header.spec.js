import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

fdescribe('<Header /> Component', () => {
  it('contains nav links', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('ul').children()).toHaveLength(2);
  });
});
