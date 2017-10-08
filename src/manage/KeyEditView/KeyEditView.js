import React from 'react';
import PropTypes from 'prop-types';

import {
  Key,
  KEY_TYPE
} from '../constants';
import Select from '../../components/Select/Select';

class KeyEditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: {}
    };
  }

  componentDidMount() {
    this.setState({ 
      key: { ...this.props.key },
      initialKey: { ...this.props.key }
    });
  }

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

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.props.onFormSubmit(new Key(this.state.key));
    }
  }

  onCancel(e) {
    e.preventDefault();

    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  isValid() {
    return this.state.key.name && this.state.key.description;
  }

  isDirty() {
    return JSON.stringify(this.state.key) !== JSON.stringify(this.state.initialKey);
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

    return (
      <div className="panel" >
        <div className="panel-body">
          <form onSubmit={ e => this.onSubmit(e) }>
            <div>
              <label htmlFor="name">Key name</label>
              <p>
                <input id="name" name="name" value={this.state.key.name} onChange={e => this.handleInputChange(e)} />
              </p>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <p>
                <textarea id="description" name="description" required value={this.state.key.description} onChange={e => this.handleInputChange(e)} />
              </p>
            </div>

            <div>
              <label htmlFor="type">Type</label>
              <p>
                <Select options={selectItems} value={this.state.key.type} id="type" name="type" onChange={e => this.handleInputChange(e)} />
              </p>
            </div>

            <div>
              <label htmlFor="isPrivate">
                <input id="isPrivate" name="isPrivate" type="checkbox" checked={this.state.key.isPrivate} onChange={e => this.handleInputChange(e)} /> Is this personal data?
              </label>
            </div>
            <hr />
            <button className="btn btn-secondary pull-left" onClick={ e => this.onCancel(e) }>Cancel</button>
            <button className="btn btn-primary pull-right" type="submit" disabled={ !this.isDirty() }>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

KeyEditView.propTypes = {
  key: PropTypes.object,
  onFormSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

export default KeyEditView;
