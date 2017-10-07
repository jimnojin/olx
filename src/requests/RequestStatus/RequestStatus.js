import React from 'react';
import PropTypes from 'prop-types';

import { REQUEST_STATUS } from '../constants';
import './RequestStatus.css';

const RequestStatus = props => {
  const content = props.children || props.status;
  const className = `label ${props.status ? `label--${props.status}` : ''}`;

  return <label className={ className }>{content}</label>;
};

RequestStatus.propTypes = {
  status: PropTypes.oneOf([REQUEST_STATUS.DENIED, REQUEST_STATUS.PENDING, REQUEST_STATUS.APPROVED])
};

export default RequestStatus;