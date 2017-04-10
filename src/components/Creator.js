import React, { Component } from 'react';
import Builder from './Builder';
import Result from './Result';

class Creator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {}
    };
    this.addKeyValue = this.addKeyValue.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.renameKey = this.renameKey.bind(this);
  }

  addKeyValue(key, value) {
    const result = { ...this.state.result };
    result[key] = value;
    this.setState({ result });
  }

  removeKey(key) {
    const result = { ...this.state.result };
    delete result[key];
    this.setState({ result });
  }

  renameKey(key, newKey) {
    const result = { ...this.state.result };
    result[newKey] = result[key];
    delete result[key];
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    return (
      <div className='creator'>
        <Builder addKeyValue={this.addKeyValue} removeKey={this.removeKey} rename={this.renameKey}/>
        <Result result={JSON.stringify(result, null, 4)}/>
      </div>
    );
  }
}

export default Creator;
