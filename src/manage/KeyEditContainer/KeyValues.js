import React from 'react';
import PropTypes from 'prop-types';

const KeyValues = props => {
  const rows = props.values ? props.values.map((val, i) => (
    <tr key={ i }>
      <td>
        { 
          val.isEditing ?
            <input name="value" value={ val.value } onChange={ e => props.onValueChange(e) }/> :
            val.value 
        }
      </td>
      <td>
        { 
          val.isEditing ?
            <input name="description" value={ val.description } onChange={ e => props.onValueChange(e) } /> :
            val.description 
        }
      </td>
      <td>
        {
          val.isEditing && <button className="btn btn-hollow btn-secondary btn-small" onClick={ () => props.onSaveValue(val) }>
            <span className="fa fa-floppy-o" />
          </button>
        }
        {
          props.onDeleteValue && <button className="btn btn-hollow btn-secondary btn-small" onClick={ () => props.onDeleteValue(val) }>
            <span className="fa fa-trash-o" />
          </button>
        }
        
      </td>
    </tr>
  )) : [];

  return (
    <div>
      <div className="well">Possible values</div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th width="30%">value</th>
            <th>description</th>
            <th width="16%"></th>
          </tr>
        </thead>
        { <tbody>{ rows }</tbody> }        
      </table>
      {
        props.onAddValue && 
        <button className="btn btn-secondary btn-hollow btn-small" onClick={ props.onAddValue }>
          <span className="fa fa-plus" />
          <span>Add possible value</span>
        </button>
      } 


    </div>
  );
}

KeyValues.propTypes = {
  values: PropTypes.array, /* `key` as a prop name is reserved */
  onAddValue: PropTypes.func,
  onDeleteValue: PropTypes.func,
  onSaveValue: PropTypes.func,
  onValueChange: PropTypes.func,
};

export default KeyValues;