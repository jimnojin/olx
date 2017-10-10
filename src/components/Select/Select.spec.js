import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Select from './Select';

const opts = [{ value: 1, text: ''}];

describe('<Select /> Component', () => {
  it('renders <select />', () => {
    const wrapper = shallow(<Select options={ opts }/>);
    expect(wrapper.find('select')).toHaveLength(1);
  });

  it('sets value and name', () => {
    const value = opts[0].value;
    const name = "test";
    const wrapper = shallow(<Select options={ opts } value={ value } name={ name } />);
    
    expect(wrapper.find('select').prop('value')).toEqual(value);
    expect(wrapper.find('select').prop('name')).toEqual(name);
  });

  it('triggers onChange', () => {
    const ph = '123';
    const onChange = sinon.spy();
    const wrapper = shallow(<Select options={ opts } placeholder={ ph } onChange={ onChange }/>);
    wrapper.find('select').simulate('change');

    expect(onChange.calledOnce).toEqual(true);
  });
});
