import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../components/Header/Header';

describe('<App /> Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains Header', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Header />));
  });
});
