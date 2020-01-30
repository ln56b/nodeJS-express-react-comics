import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './DisplayComics.css'

const DisplayComics = ({comics}) => {
  return (
    <Fragment>
      <h2 className="generic-h2-title">BD du moment</h2>
      <div className="comics-gallery-container">
        {comics.map(comic => 
        <Link to="/comics/2">
          <div className="comic-container">
            <img className="comic-cover" src={comic.cover_image}  alt={comic.title}/>
          </div>
        </Link>
          )}
      </div>
    </Fragment>
  );
}

export default DisplayComics;