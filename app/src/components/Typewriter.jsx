import React, { Component } from 'react';

let i = 0;
let underscore = false;
const speed = 250;
class Typewriter extends Component {

  constructor(props) {
    super(props);
    this.typeWriter = this.typeWriter.bind(this);
    this.blinkCursor = this.blinkCursor.bind(this);
    this.state = {
      text: '_'
    }
  }

  componentDidMount() {
    this.typeWriter();
  };

  shouldComponentUpdate() {
    return true;
  }

  typeWriter() {
    const message = 'Hello World! ';
    if (i < message.length) {
      var newText = message.substring(0, i);
      this.setState({ text: newText + '_' });
      i++;
      setTimeout(this.typeWriter, speed);
    } else {
      i = 0;
      //this.blinkCursor();
    }
  };

  blinkCursor() {
    if (underscore) {
      this.setState({ text: 'Hello World!_'});
      console.log('1');
    } else {
      this.setState({ text: 'Hello World! '});
      console.log('2');
    }
    underscore = !underscore;
    setTimeout(this.blinkCursor, speed);
    //{this.state.text.replace(/ /g, "\u00a0")}
  }

  render() {
    return (
      <h1 className='hello'>
        {this.state.text}
      </h1>
    );
  }
}

export default Typewriter;
