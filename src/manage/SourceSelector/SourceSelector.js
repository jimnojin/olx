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
    <div className="source-selector">
      <div>Select source</div>

      <Select options={ sources } />
      <Select options={ platforms } />
      
    </div>
  );
}