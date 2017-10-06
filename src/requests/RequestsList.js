import React from 'react';
import Moment from 'react-moment';
import Label from '../components/Label/Label';

export default props => {
  const rows = props.data.map(row => (
    <tr key={ row.id }>
      <td><Moment unix format="YYYY/MM/DD">{ row.date }</Moment></td>
      <td>{ row.reason }</td>
      <td><Label status={ row.status }></Label></td>
    </tr>
  ))

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Reason</th>
          <th>Status</th>
        </tr>
      </thead>
      
      <tbody>
        { rows }
      </tbody>
   </table>
  );
}