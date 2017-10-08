import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  fetchData,
  selectKey,
  editKey,
  saveKey,
  cancelEdit,
  addKey
} from './ManageActions';

import SourceSelector from './SourceSelector/SourceSelector';
import KeyList from './KeyList/KeyList';
import KeyView from './KeyView/KeyView';
import KeyEditView from './KeyEditView/KeyEditView';

class ManageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const keyView = this.props.isEditing ?
      <KeyEditView item={this.props.selectedKey} onFormSubmit={this.props.saveKey} onCancel={this.props.cancelEdit}/> :
      <KeyView item={this.props.selectedKey} />;
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
                <KeyList keys={this.props.data} onSelect={key => this.props.selectKey(key)} selected={this.props.selectedKey} />

                <button className="btn btn-default" onClick={this.props.addKey}>
                  <span className="fa fa-plus"></span> Add
                </button>
              </div>
              <div className="col-md-9">
                {
                  this.props.selectedKey ?
                    keyView :
                    <h1>Please add keys</h1>
                }
                <button className="btn btn-default" onClick={() => this.props.editKey()}>
                  {
                    this.props.isEditing ? 'Save' : 'Edit'
                  }
                </button>
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
    /** manage */
    isLoading: state.manage.isLoading,
    data: state.manage.data,

    /** keys */
    selectedKey: state.key.selected,
    isEditing: state.key.isEditing
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData,
  selectKey,
  editKey,
  addKey,
  saveKey,
  cancelEdit
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageContainer)