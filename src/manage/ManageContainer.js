import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  fetchData,
  selectKey
} from './ManageActions';

import SourceSelector from './SourceSelector/SourceSelector';
import KeyList from './KeyList/KeyList';
import KeyView from './KeyView/KeyView';

class ManageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className=" container-fluid">
        <h1>Manage data</h1>     
        <SourceSelector />
        <hr />
        {
          this.props.isLoading ? 
            <h2>Loading...</h2> : 
            <div className="row">
              <div className="col-md-3">
                <KeyList keys={ this.props.data } onSelect={ key => this.props.selectKey(key) } />

                <button className="btn btn-default">
                  <span className="fa fa-plus"></span> Add
                </button>
              </div>   
              <div className="col-md-9">
                <KeyView item={ this.props.selectedKey } />
              </div>
            </div>
        }
      </div>
    );
  }
}

/** Redux mapping */
const mapStateToProps = state => {
  return {
    isLoading: state.manage.isLoading,
    data: state.manage.data,
    selectedKey: state.manage.data.find(key => key.isSelected) || state.manage.data[0]
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData,
  selectKey
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageContainer)