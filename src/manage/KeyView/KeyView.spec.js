import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import KeyView from './KeyView';
import { Key } from '../constants';

describe('<KeyView /> Component', () => {
  it('triggers onEditKey', () => {
    const item = new Key();
    const onEditKey = sinon.spy();
    const wrapper = shallow(<KeyView item={ item } onEditKey={ onEditKey }/>);
    
    wrapper.find('.btn').first().simulate('click');

    expect(onEditKey.calledOnce).toEqual(true);
  });
});
