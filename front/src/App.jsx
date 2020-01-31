import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchAllComics from './components/ComicsGallery/FetchAllComics';
import FetchComic from './components/ComicContent/FetchComic';
import VoteCounter from './components/VoteCounter';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={FetchAllComics} />
      <Route path="/comics/:id" component={FetchComic} />
      <Route path="/votes" component={VoteCounter} />
    </Switch>
  );
}

export default App;
