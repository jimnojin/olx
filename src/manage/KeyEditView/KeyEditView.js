import React from 'react';
import PropTypes from 'prop-types';

import {
  Key,
  KEY_TYPE
} from '../constants';
import Permissions from './Permissions';
import Select from '../../components/Select/Select';

import './KeyEditView.css';

class KeyEditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: {},
      errors: {}
    };
  }

  /**
   * Copy key in state and save reference to track changes
   */
  componentDidMount() {
    this.setState({
      key: new Key(this.props.item),
      initialKey: new Key(this.props.item)
    });
  }

  /**
   * Hanle input change in form and update state
   * @param {Event} event 
   */
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      key: {
        ...this.state.key,
        [name]: value
      }
    });
  }

  /**
   * Check for form data validity and triggers submit on parent
   * @param {Event} e 
   */
  onSubmit(e) {
    debugger;
    e.preventDefault();

    if (this.isValid()) {
      this.props.onFormSubmit(this.state.key);
    }
  }

  /**
   * Checks if current key data in state is valid
   */
  isValid() {
    let isValid = true;
    let errors = this.state.errors;

    if (!this.state.key.name) {
      errors = { ...errors, name: 'Field is required'};
      isValid = false;
    } else {
      delete errors.name;
    }

    if (!this.state.key.description) {
      errors = { ...errors, description: 'Field is required'};
      isValid = false;
    } else {
      delete errors.description;
    }

    this.setState({
      errors
    });

    return isValid;
  }

  render() {
    if (!this.state || !this.state.key) {
      return <h2>Loading...</h2>;
    }

    const selectItems = Object.values(KEY_TYPE).map(value => {
      return {
        value,
        text: value
      };
    });

    const styles = {
      position: 'absolute',
      top: 32,
      right: 46
    };

    return (
      <div className="key-edit-view panel" >
        <div className="panel-body">
          <form onSubmit={e => this.onSubmit(e)}>
            <button className="btn btn-success"  type="submit" style={ styles }> 
              <span className="fa fa-floppy-o" />Save
            </button>

            <div className="form-group">
              <div className="textfield">
                <label className="textfield-label" htmlFor="name">
                  Key name
                  {
                    this.state.errors.name ?
                      <div className="textfield-help error">{ this.state.errors.name }</div> :
                      ''
                  }
                </label>
                <div className="textfield-area">
                  <input id="name" name="name" className="textfield-input" value={this.state.key.name} onChange={e => this.handleInputChange(e)} />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="textfield" style={{ minWidth: '100%' }}>
                <label className="textfield-label" htmlFor="description">
                  Description
                  {
                    this.state.errors.description ?
                      <div className="textfield-help error">{ this.state.errors.description }</div> :
                      ''
                  }
                </label>
                <div className="textfield-area">
                  <textarea id="description" name="description" className="textfield-input" value={this.state.key.description} onChange={e => this.handleInputChange(e)} />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="textfield">
                <label className="textfield-label" htmlFor="type">Type</label>
                <div className="textfield-area">
                  <Select options={selectItems} value={this.state.key.type} id="type" name="type" onChange={e => this.handleInputChange(e)} />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="textfield">
                <label htmlFor="isPrivate" className="textfield-label">
                  <input id="isPrivate" name="isPrivate" type="checkbox" checked={this.state.key.isPrivate} onChange={e => this.handleInputChange(e)} /> Is this personal data?
                </label>
              </div>
            </div>

            
            <Permissions data={this.state.key.permissions} />
          </form>
        </div>
      </div>
    );
  }
}

KeyEditView.propTypes = {
  item: PropTypes.object,
  onFormSubmit: PropTypes.func
};

export default KeyEditView;
