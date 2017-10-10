import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import KeyList from './KeyList';
import { Key } from '../constants';

const onSelect = sinon.spy();
const keys = [
  new Key(),
  new Key(),
  new Key()
];
const selected = keys[1];

describe('<KeyList /> Component', () => {
  it('render array of keys', () => {
    const wrapper = shallow(<KeyList keys={ keys } selected={ selected } onSelect={ onSelect }/>);
    expect(wrapper.find('li').length).toEqual(keys.length);

    expect(wrapper.find('li').at(1).hasClass('active')).toEqual(true);
  });

  it('triggers onSelect', () => {
    const wrapper = shallow(<KeyList keys={ keys } selected={ selected } onSelect={ onSelect }/>);
    wrapper.find('li').at(0).simulate('click');

    expect(onSelect.calledOnce).toEqual(true);
  });
});
