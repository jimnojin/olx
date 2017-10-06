import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  fetchData,
  filter  
} from './RequestsActions';
import REQUEST_STATUS from './RequestStatus';

class RequestsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        {
          this.props.isLoading ? 
            <h2>Loading...</h2> : 
            <div className="container-fluid">
              This is requests!
            </div>
        }
      </div>
    )
  }
}

/** Redux mapping */
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
)(RequestsContainer)