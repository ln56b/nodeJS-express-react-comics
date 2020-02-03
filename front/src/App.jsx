import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchAllComics from './components/ComicsGallery/FetchAllComics';
import FetchComic from './components/ComicContent/FetchComic';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={FetchAllComics} />
        <Route path="/comics/:id" component={FetchComic} />
      </Switch>
    </Fragment>
  );
}

export default App;
