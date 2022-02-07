/* eslint-disable */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick() {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="this is a GIF" onClick={this.handleClick} />
    );
  };
};

export default Gif;
