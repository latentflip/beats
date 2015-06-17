import React from 'react/addons';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

export let Context = React.createClass({
  componentWillMount() {
    this.audioContext = new AudioContext();
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = 0.3;
    this.masterGain.connect(this.audioContext.destination);
  },

  render() {
    return (
      <span>
        {this.props.children.map(this.wrapChild)}
      </span>
    );
  },

  wrapChild(child) {
    return React.addons.cloneWithProps(
      child,
      this.getChildProps()
    );
  },

  getChildProps() {
    return {
      audioContext: this.audioContext,
      destination: this.masterGain
    }
  }
});

export let Oscillator = React.createClass({
  getDefaultProps() {
    return {
      frequency: 440,
    };
  },

  componentDidMount() {
    this.node = this.props.audioContext.createOscillator();
    this.node.type = 'square';
    this.node.frequency.value = this.props.frequency;
    this.node.connect(this.props.destination);
    this.node.start(0);
  },

  componentWillUnmount() {
    this.node.stop();
    this.node.disconnect();
  },

  render() {
    return null;
  }
});
