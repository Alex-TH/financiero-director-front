import React, { Component } from 'react';

class DraggableBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.name,
      value: props.value,
    }
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onDragStart(e) {
    this.props.onDragStart(this.props.value.index);
  }

  onDrop(e) {
    this.props.onDrop(this.props.value.index);
  }

  onDragOver(e) {
    e.preventDefault();
  }

  render() {
    const { key, value, hide } = this.state;
    return (
      <div
        draggable className='draggable-box' onDrop={this.onDrop}
        onDragStart={this.onDragStart} onDragOver={this.onDragOver}
      >
        {key} {value.type}
      </div>
    );
  }
}

DraggableBox.defaultProps = {
  onDragStart: () => {},
  onDrop: () => {},
};

export default DraggableBox;
