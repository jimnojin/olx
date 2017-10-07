import React from 'react';
import PropTypes from 'prop-types';

const KeyList = props => {
  console.log(props.keys);
  const items = props.keys.map(k => {
    const classList = `list-group-item ${k.isSelected ? 'active' : ''}`;

    return <li className={ classList } key={ k.id } onClick={ () => props.onSelect(k.id) }>{ k.name }</li>;
  });

  return (
    <ul className="list-group">
      { items }
    </ul>
  );
};

KeyList.propTypes = {
  keys: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default KeyList;
