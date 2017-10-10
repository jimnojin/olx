import React from 'react';
import PropTypes from 'prop-types';
import { REQUEST_STATUS } from '../constants';

import './RequestsFilter.css';

const RequestFilter = props => {
  const states = Object.keys(REQUEST_STATUS).map(key => {
    const className = props.filterBy === REQUEST_STATUS[key] ? 'active' : '';

    return <li key={key}
      role="presentation"
      className={className}
      onClick={() => props.onFilter(REQUEST_STATUS[key])}>
      <a>{key}</a>
    </li>;
  });
  const allClassName = !props.filterBy ? 'active' : '';

  return (
    <div className="requests-filter">
      <ul className="nav nav-pills">
        <li role="presentation" className={allClassName} onClick={() => props.onFilter()}><a>ALL</a></li>
        {states}
        <li role="presentation">
          <button className="btn btn-hollow btn-success btn-size-tiny">
            <span className="fa fa-plus" />
            <span>Create new request</span>
          </button>
        </li>
      </ul>
    </div>    
  )
};

RequestFilter.propTypes = {
  filterBy: PropTypes.oneOf([undefined, REQUEST_STATUS.DENIED, REQUEST_STATUS.PENDING, REQUEST_STATUS.APPROVED]),
  onFilter: PropTypes.func
};

export default RequestFilter;