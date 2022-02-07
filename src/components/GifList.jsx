import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifs, selectGif } = props;
  return (
    <div className="gif-list">
      {console.log(gifs)}
      {gifs.map(gif => <Gif id={gif} key={gif} selectGif={selectGif} />)}
    </div>
  );
};

export default GifList;
