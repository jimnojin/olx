import React from 'react';
import Select from '../../components/Select/Select';

import './SourceSelector.css';

const sources = [
  { value: 'source1', text: 'Source 1' },
  { value: 'source2', text: 'Source 2' },
  { value: 'source3', text: 'Source 3' },
];
const platforms = [
  { value: 'platform1', text: 'Android' },
  { value: 'platform2', text: 'iPhone' },
  { value: 'platform3', text: 'Web' },
];

export default () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="source-selector">
          <div>Select source</div>

          <Select options={ sources } />
          <Select options={ platforms } />
          
          <button className="btn btn-secondary btn-hollow btn-size-small">
            <span className="fa fa-plus" />
            <span>Add data source</span>
          </button>

          <button className="btn btn-secondary btn-size-small pull-right">
            View all data sources
          </button>
        </div>
      </div>
    </div>    
  );
}