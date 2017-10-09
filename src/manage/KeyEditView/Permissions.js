import React from 'react';

const Permissions = props => {
  const rows = props.data ? props.data.map((perm, i) => (
    <tr key={ i }>
      <td>{ perm.value }</td>
      <td>{ perm.description }</td>
    </tr>
  )) : [];

  return (
    <div>
      <div className="well">Permissions</div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th width="30%">value</th>
            <th>description</th>
          </tr>
        </thead>
        { props.data && <tbody>{ rows }</tbody> }        
      </table>
    </div>
  );
}

export default Permissions;