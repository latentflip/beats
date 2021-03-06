import React from 'react';
import { Context, Oscillator } from './Audio';
import Note from './Note'


export default React.createClass({
  render() {
    let { data } = this.props;

    return (
      <div style={appStyle}>
        <h1>Hit dem keys ( asdf jkl; )</h1>

        {data.notes.map((n) => {
          return (
            <Note time={data.time} {...n}/>
          );
        })}

        <Context>
          {data.notes.filter(n => !n.off).map(n => (
            <Oscillator note={n.note}/>
          ))}
        </Context>
      </div>
    );
  }
});


let appStyle = {
  fontFamily: 'helvetica',
  color: '#999'
};
