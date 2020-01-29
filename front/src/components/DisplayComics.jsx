import React from 'react';

const DisplayComics = ({comics}) => {
  return (
    <div>
      {comics.map(comic => 
      <div>
        <h4>{comic.author}</h4>
        <img src={comic.cover_image} />
      </div>
        )}
    </div>
  );
}

export default DisplayComics;