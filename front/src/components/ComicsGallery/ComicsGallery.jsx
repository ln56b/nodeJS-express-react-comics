import React, {  Fragment } from 'react';
import { Link } from 'react-router-dom';
import './ComicsGallery.css'
import PostForm from '../EditorForm/PostForm';
import VoteCounter from '../../components/VoteCounter';

const Comics = ({ comics }) => {
  return (
    <Fragment>
      <h2 className="generic-h2-title">Les dernières BD partagées</h2>
      <div className="comics-gallery-container">
        {comics.map(comic =>
        <div className="comics-gallery-and-vote">
          <Link to={`/comics/${comic.id}`}>
            <div className="comic-container">
              <img className="comic-cover" src={comic.cover_image}  alt={comic.title}/>
            </div>
          </Link>
          <VoteCounter comicId={comic.id} />
        </div> 
          )}
      </div>
      <h2 className="generic-h2-title">Partagez vos BD préférées</h2>
      <PostForm />

    </Fragment>
  );
}

export default Comics;
