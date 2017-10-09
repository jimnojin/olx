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
} from '../actions';

import {
  SourceSelector,
  KeyList,
  KeyView,
  KeyEditView
 } from '../';

class ManageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const keyView = this.props.isEditing ?
      <KeyEditView item={this.props.selectedKey} onFormSubmit={this.props.saveKey} /> :
      <KeyView item={this.props.selectedKey} onEditKey={this.props.editKey}/>;
    return (
      <div>
        <h1>Manage data</h1>
        <SourceSelector />
        <hr />
        {
          this.props.isLoading ?
            <h2>Loading...</h2> :
            <div className="row">
              <div className="col-md-3">
                <KeyList keys={this.props.data} onSelect={key => this.props.selectKey(key)} selected={this.props.selectedKey} />

                <button className="btn btn-hollow btn-size-small btn-secondary" onClick={this.props.addKey}>
                  <span className="fa fa-plus"></span>Add key
                </button>
              </div>
              <div className="col-md-9">
                {
                  this.props.selectedKey.id ?
                    keyView :
                    <h1>Please add keys</h1>
                }
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