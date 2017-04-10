import React, { Component } from 'react';
import DraggableBox from '../components/DraggableBox';

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggables: []
    };
    this.addDraggable = this.addDraggable.bind(this);
  }

  addDraggable() {
    const draggables = [...this.state.draggables];
    const value = {
      type: 'default',
      index: draggables.length,
    }
    const key = `value${draggables.length}`;
    draggables.push(
      <DraggableBox key={key} name={key} value={value}/>
    );
    this.setState({
      draggables,
    });
    this.props.addKeyValue(key, value);
  }

  render() {
    const { draggables } = this.state;
    return (
      <div className='builder-block'>
        <h4>Builder Block</h4>
        <div className='draggable-stack'>
          <h4>Name Type</h4>
          {draggables}
        </div>
        <button onClick={this.addDraggable}>Add</button>
      </div>
    );
  }
}

export default Builder;
