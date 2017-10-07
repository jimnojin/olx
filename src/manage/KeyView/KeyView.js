import React from 'react';
import PropTypes from 'prop-types';

import './KeyView.css';

const KeyView = props => {
  return (
    <div className="panel">
      <div className="panel-body">
        <h2>{ props.item.name }</h2>

        <div>
          <h3>Description</h3>
          <p>{ props.item.description }</p>
        </div>

        <div>
          <h3>Type</h3>
          <p>{ props.item.type }</p>
        </div>

        <div>
          <h3>Sensitivity</h3>
          <p>{ 
            props.item.isPrivite ? 
            'This is personal data and cannot be disturbuted in raw form.' :  
            'This is not personal data and can be disturbuted in raw form'
            }</p>
        </div>
      </div>      
    </div>
  );
};

KeyView.propTypes = {
  item: PropTypes.object.isRequired
};

export default KeyView;