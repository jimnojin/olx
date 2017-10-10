import React from 'react';
import { shallow } from 'enzyme';
import RequestStatus from './RequestStatus';
import { REQUEST_STATUS } from '../constants';

describe('<RequestStatus /> Component', () => {
  it('renders PENDING status text', () => {
    const status = REQUEST_STATUS.PENDING;
    const wrapper = shallow(<RequestStatus status={ status }/>);
    expect(wrapper.text().toLocaleLowerCase()).toEqual('pending');
  });

  it('renders APPROVED status text', () => {
    const status = REQUEST_STATUS.APPROVED;
    const wrapper = shallow(<RequestStatus status={ status }/>);
    expect(wrapper.text().toLocaleLowerCase()).toEqual('approved');
  });

  it('renders DENIED status text', () => {
    const status = REQUEST_STATUS.DENIED;
    const wrapper = shallow(<RequestStatus status={ status }/>);
    expect(wrapper.text().toLocaleLowerCase()).toEqual('denied');
  });
});
