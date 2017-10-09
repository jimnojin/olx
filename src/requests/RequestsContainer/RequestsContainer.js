import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  fetchData,
  filter  
} from '../actions';
import { 
  RequestsList,
  RequestsFilter
 } from '../';

class RequestsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="requests-container container-fluid">
        <h1>REQUESTS</h1>
        
        {
          this.props.isLoading ? 
            <h2>Loading...</h2> : 
            <div>
              <RequestsFilter onFilter={ this.props.filter } filterBy={ this.props.filterBy } />
              <div className="well" style={{ margin: 0 }}>Pending requests</div>
              <RequestsList data={ this.props.requests } />
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
    filterBy: state.requests.filterBy,
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