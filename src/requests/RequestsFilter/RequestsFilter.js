import React from 'react';
import { REQUEST_STATUS } from '../constants';

import './RequestsFilter.css';

export default props => {
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
    <ul className="requests-filter nav nav-pills">
      <li role="presentation" className={allClassName} onClick={() => props.onFilter()}><a>ALL</a></li>
      {states}
    </ul>
  )
};