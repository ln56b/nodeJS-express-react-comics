import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FetchAllComics from './components/ComicsGallery/FetchAllComics';
import FetchComic from './components/ComicContent/FetchComic';
import Form from './components/EditorForm/Form'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={FetchAllComics} />
      <Route path="/comics/:id" component={FetchComic} />
      <Route path="/form" component={Form} />
    </Switch>
  );
}

export default App;
