import React from 'react';
import PropTypes from 'prop-types';

import './KeyView.css';

const KeyView = props => {
  const styles = {
    position: 'absolute',
    top: 32,
    right: 46
  };

  return (
    <div className="panel">
      <div className="panel-body">
        <h2>{ props.item.name }</h2>
        
        <button className="btn btn-success"  onClick={props.onEditKey} style={ styles }> 
          <span className="fa fa-pencil" />Edit
        </button>

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
            props.item.isPrivate ? 
            'This is personal data and cannot be disturbuted in raw form.' :  
            'This is not personal data and can be disturbuted in raw form'
            }</p>
        </div>
      </div>      
    </div>
  );
};

KeyView.propTypes = {
  item: PropTypes.object.isRequired, /* `key` as a prop name is reserved */
  onEditKey: PropTypes.func.isRequired
};

export default KeyView;