import React from 'react';
import REQUEST_STATUS from './RequestStatus';
import Moment from 'react-moment';

const requestStatusBadge = status => {
  switch(status) {
    case REQUEST_STATUS.DENIED:
      return <label className="label label-denied">Denied</label>;
   
    case REQUEST_STATUS.PENDING:
      return <label className="label label-pending">Pending</label>;
    
    case REQUEST_STATUS.APPROVED:
      return <label className="label label-approved">Approved</label>;

    default:
      return status;
  };
}

export default props => {
  const rows = props.data.map(row => (
    <tr key={ row.id }>
      <td><Moment unix format="YYYY/MM/DD">{ row.date }</Moment></td>
      <td>{ row.reason }</td>
      <td>{ requestStatusBadge(row.status) }</td>
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