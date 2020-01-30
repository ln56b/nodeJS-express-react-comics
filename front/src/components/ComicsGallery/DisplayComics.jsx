import React, { Fragment } from 'react';
import './DisplayComics.css'

const DisplayComics = ({comics}) => {
  return (
    <Fragment>
      <h2 className="generic-h2-title">BD du moment</h2>
      <div className="comics-gallery-container">
        {comics.map(comic => 
        <div className="comic-container">
          <img className="comic-cover" src={comic.cover_image} />
        </div>
          )}
      </div>
    </Fragment>
  );
}

export default DisplayComics;