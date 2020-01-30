import React, { Component } from 'react';
import axios from 'axios';
import Comics from './Comics';

class FetchComics extends Component {
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

  goToComicContent() {
    
  }

  render() {
    return (
      <div>
        {this.state.comics && <Comics comics = {this.state.comics} />}
      </div>
    );
  }
}

export default FetchComics;