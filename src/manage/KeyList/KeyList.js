import React from 'react';
import PropTypes from 'prop-types';

const KeyList = props => {
  const items = props.keys.map(k => {
    const classList = `list-group-item ${k.id === props.selected.id ? 'active' : ''}`;
    return (
      <li className={ classList } key={ k.id } onClick={ () => props.onSelect(k) }>
        { k.name }
        { k.id === props.selected.id ? <span className="fa fa-angle-right" /> : '' }
      </li>
    );
  });

  return (
    <ul className="list-group">
      { items }
    </ul>
  );
};

KeyList.propTypes = {
  keys: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.object
}

export default KeyList;
