import React, { Component } from 'react';

import axios from 'axios';
import ComicsGallery from './ComicsGallery';

class FetchAllComics extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      comics : []
    };
    this.getComicList = this.getComicList.bind(this);
  }

  componentDidMount() {
    this.getComicList()
  };

  getComicList() {
    axios
    .get('/api/comics')
    .then(res => res.data)
    .then(data => {
      this.setState({
        comics: data
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.comics && <ComicsGallery comics = {this.state.comics} />}
      </div>
    );
  }
}

export default FetchAllComics;