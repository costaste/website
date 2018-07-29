import React, { Component } from 'react';

let i = 0;
const speed = 250;
class Typewriter extends Component {

  constructor(props) {
    super(props);
    this.typeWriter = this.typeWriter.bind(this);
    this.state = {
      text: '_'
    }
  }

  componentDidMount() {
    this.typeWriter();
  };

  typeWriter() {
    const message = 'Hello World! ';
    if (i < message.length) {
      var newText = message.substring(0, i);
      this.setState({ text: newText + '_' });
      i++;
      setTimeout(this.typeWriter, speed);
    } else {
      i = 0;
      setTimeout(this.typeWriter, speed * 10);
    }
  };

  render() {
    return (
      <h1 className='hello'>
        {this.state.text}
      </h1>
    );
  }
}

export default Typewriter;
