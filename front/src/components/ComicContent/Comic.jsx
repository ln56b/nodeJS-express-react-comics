import React, { Fragment } from 'react';
import './Comic.css'

const Comic = ({ comic }) => {
  return (
    <Fragment>      
      <h2 className="generic-h2-title">Tout sur cette BD</h2>
      <div className="one-comic-container">
        <h4 className="comic-title">{comic.title}</h4>
        <p className="comic-author">{comic.author}</p>
        <p className="comic-gender">{comic.gender_name}</p>
        <p className="comic-votes">Votes: {comic.user_votes}</p>
      </div>
    </Fragment>
  );
}

export default Comic;