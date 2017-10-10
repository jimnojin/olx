import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import objectValues from 'object.values';

import {
  saveKey,
  addValue,
  deleteValue,
  saveValue
} from '../actions';

import {
  Key,
  KEY_TYPE
} from '../constants';
import { KeyValues } from '../';
import Select from '../../components/Select/Select';

import './KeyEditContainer.css';

class KeyEditContainer extends React.Component {
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

  componentWillReceiveProps(props) {
    if (props.item) {
      this.setState({
        key: {
          ...this.state.key,
          values: props.item.values
        }
      });
    }
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

  handleValueInputChange(event) {
    const currentValue = this.state.key.values.find(v => v.isEditing);
    const name = event.target.name;

    this.setState({
      key: {
        ...this.state.key,
        values: this.state.key.values.map(v => {
          if (v.id === currentValue.id) {
            return {
              ...v,
              [name]: event.target.value
            };
          }
          return v;
        })
      }
    });
  }

  /**
   * Check for form data validity and triggers submit on parent
   * @param {Event} e 
   */
  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.props.saveKey(this.state.key);
    }
  }

  /**
   * Checks if current key data in state is valid
   */
  isValid() {
    let isValid = true;
    let errors = this.state.errors;

    if (!this.state.key.name) {
      errors = { ...errors, name: 'Field is required' };
      isValid = false;
    } else {
      delete errors.name;
    }

    if (!this.state.key.description) {
      errors = { ...errors, description: 'Field is required' };
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

    const selectItems = objectValues(KEY_TYPE).map(value => {
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
            <button className="btn btn-success" type="submit" style={styles}>
              <span className="fa fa-floppy-o" />
              <span>Save</span>
            </button>

            <div className="form-group">
              <div className="textfield">
                <label className="textfield-label" htmlFor="name">
                  Key name
                  {
                    this.state.errors.name && <div className="textfield-help error">{this.state.errors.name}</div>
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
                    this.state.errors.description && <div className="textfield-help error">{this.state.errors.description}</div>
                  }
                </label>
                <div className="textfield-area">
                  <textarea id="description" name="description" className="textfield-input" resizable="false" value={this.state.key.description} onChange={e => this.handleInputChange(e)} />
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
          </form>

          <KeyValues values={this.state.key.values}
            onAddValue={this.props.addValue}
            onDeleteValue={this.props.deleteValue}
            onSaveValue={this.props.saveValue}
            onValueChange={e => this.handleValueInputChange(e)} />
        </div>
      </div>
    );
  }
}

/** Redux mapping */
const mapStateToProps = state => {
  return {
    item: state.key.selected
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  saveKey,
  addValue,
  deleteValue,
  saveValue
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyEditContainer)

