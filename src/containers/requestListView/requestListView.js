import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  fetchData,
  filter,
  REQUEST_STATUS
} from '../../reducers/requests'

const requestListView = props => (
  <div>
    <h1>Requests</h1>
    <button onClick={ props.fetchData }>fetch</button>
    { 
      props.isLoading ? 
      <div>Loading...</div> : 
      (
        <div>
          <ul>
              { props.requests.map(req => <li key={req.id}>{req.id} - {req.reason}</li>) }
            </ul>
          <button onClick={() => props.filter() }>all</button>
          <button onClick={() => props.filter(REQUEST_STATUS.DENIED) }>DENIED</button>
        </div>   
      )
    }
       
  </div>
)

const mapStateToProps = state => {
  return {
    isLoading: state.requests.isLoading,
    requests: state.requests.data.filter(req => !state.requests.filterBy || req.status === state.requests.filterBy)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
  filter, fetchData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(requestListView)