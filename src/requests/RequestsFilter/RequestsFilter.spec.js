import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RequestsFilter from './RequestsFilter';
import { REQUEST_STATUS } from '../constants';

describe('<RequestsFilter /> Component', () => {
  it('selects ALL by default', () => {
    const wrapper = shallow(<RequestsFilter />);
    expect(wrapper.find('li').first().hasClass('active')).toEqual(true);
  });

  it('selects proper state', () => {
    const filterBy = REQUEST_STATUS.PENDING;
    const wrapper = shallow(<RequestsFilter filterBy={ filterBy }/>);
    expect(wrapper.find('li.active').text().toLowerCase()).toEqual('pending');
  });

  it('triggers onFilter', () => {
    const onFilter = sinon.spy();
    const wrapper = shallow(<RequestsFilter onFilter={ onFilter }/>);
    wrapper.find('li').at(1).simulate('click');

    expect(onFilter.calledOnce).toEqual(true);
  });
});
