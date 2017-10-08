import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = props => {
  const options = props.options.map((opt, i) => {
    return <option key={ i } value={ opt.value }>{ opt.text }</option>;
  });
  
  return (
    <label className="Select">
	    <select onChange={ props.onChange } value={ props.value } name={ props.name }>	
        { props.placeholder ? <option>{ props.placeholder }</option> : '' }
        { options }
      </select>
    </label>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export default Select;