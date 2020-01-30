import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FetchComics from './components/ComicsGallery/FetchComics';
import FetchComic from './components/ComicsContent/FetchComic';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={FetchComics} />
      <Route path="/comics/:comicId" component={FetchComic} />
    </Switch>
  );
}

export default App;
