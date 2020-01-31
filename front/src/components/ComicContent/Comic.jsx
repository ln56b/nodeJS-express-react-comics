import React, { Fragment } from 'react';
import './Comic.css'

const Comic = ({ comic }) => {
  return (
    <Fragment>      
      <h2 className="generic-h2-title">Tout sur cette BD</h2>
      <div className="one-comic-container">
        <img className="comic-background-image" src={comic.cover_image} alt={comic.title} />
        <h4 className="comic-title">{comic.title}</h4>
        <p className="comic-author">Scénariste: <span className="comic-span">{comic.author}</span></p>
        <p className="comic-gender">Genre: <span className="comic-span">{comic.gender_name}</span></p>
        <p className="comic-votes">Votes: <span className="comic-span">{comic.user_votes}</span></p>
      </div>
    </Fragment>
  );
}

export default Comic;