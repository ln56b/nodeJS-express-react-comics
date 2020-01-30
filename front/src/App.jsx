import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchAllComics from './components/ComicsGallery/FetchAllComics';
import FetchComic from './components/ComicContent/FetchComic';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={FetchAllComics} />
      <Route path="/comics/:id" component={FetchComic} />
    </Switch>
  );
}

export default App;
