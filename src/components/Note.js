import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  displayName: 'Note',

  render() {
    let position = (this.props.on - this.props.time)/20;
    let width = ((this.props.off||this.props.time) - this.props.on)/20;

    if (!width) {
      width = 1;
    }

    return (
      <div style={[
      noteStyle.base,
      noteStyle.position(position),
      { width: `${width}px` },
      { top: `${(this.props.frequency - 200)}px` }
      ]}/>
    );
  }
}));


let noteStyle = {
  base: {
    borderRadius: '10px',
    width: '10px',
    height: '10px',
    background: 'black'
  },
  position(x) {
    return {
      position: 'absolute',
      transform: `translateX(${x}px)`,
      left: '50%'
    }
  }
};
