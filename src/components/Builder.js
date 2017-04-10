import React, { Component } from 'react';
import DraggableBox from '../components/DraggableBox';

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggables: []
    };
    this.addDraggable = this.addDraggable.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  addDraggable() {
    const draggables = [...this.state.draggables];
    const value = {
      type: 'default',
      index: draggables.length,
    }
    const key = `value${draggables.length}`;
    draggables.push(
      <DraggableBox
        key={key} name={key} value={value} onDragStart={this.onDragStart} onDrop={this.onDrop}
      />
    );
    this.setState({
      draggables,
    });
    this.props.addKeyValue(key, value);
  }

  onDragStart(indexDragged) {
    this.indexDragged = indexDragged;
  }

  onDrop(indexDropped) {
    const draggables = [...this.state.draggables];
    const elementDragged = draggables[this.indexDragged];
    const elementDropped = draggables[indexDropped];
    elementDragged.props.value.index = indexDropped;
    elementDropped.props.value.index = this.indexDragged;
    draggables[this.indexDragged] = elementDropped;
    draggables[indexDropped] = elementDragged;
    this.setState({ draggables });
    this.props.refreshResult({
      [elementDragged.props.name]: elementDragged.props.value,
      [elementDropped.props.name]: elementDropped.props.value,
    });
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
