import React, { Component } from 'react';

class Typewriter extends Component {

  constructor(props) {
    super(props);
    this.typeWriter = this.typeWriter.bind(this);
    this.blinkCursor = this.blinkCursor.bind(this);
    this.message = 'Hello World!';
    this.speed = 250;
    this.state = {
      text: '_',
      underscore: true,
      index: 0
    }
  }

  componentDidMount() {
    window.setInterval(this.typeWriter, this.speed);
  };

  componentWillUnmount() {
    window.clearInterval(this.typeWriter);
  }

  typeWriter() {
    const { index } = this.state;
    if (index <= this.message.length) {
      var newText = this.message.substring(0, index);
      this.setState((prevState) => (
        {
          index: prevState.index + 1,
          text: newText + '_'
        }
      ));
    } else {
      this.blinkCursor();
    }
  };

  blinkCursor() {
    const { underscore } = this.state;
    if (underscore) {
      this.setState(
        {
          text: `${this.message}_`,
          underscore: false
        }
      );
    } else {
      this.setState(
        {
          text: `${this.message}${String.fromCharCode(160)}`,
          underscore: true
        }
      );
    }
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
