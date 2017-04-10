import React, { Component } from 'react';

class DraggableBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.name,
      value: props.value,
    }
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragStart(event) {
    this.props.ondDragStart();
  }

  onDragEnd(event) {
    this.props.ondDragEnd();
  }

  render() {
    const { key, value } = this.state;
    return (
      <div draggable className='draggable-box' onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        {key} {value.type}
      </div>
    );
  }
}

export default DraggableBox;
