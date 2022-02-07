/* eslint-disable */
import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  };

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" alt="this is a GIF" onClick={this.handleClick} />
    );
  };
};

export default Gif;
