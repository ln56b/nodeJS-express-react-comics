import React, { Component } from 'react';
import axios from 'axios';
import DisplayComics from './DisplayComics';

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

  render() {
    return (
      <div>
        {this.state.comics && <DisplayComics comics = {this.state.comics} />}
      </div>
    );
  }
}

export default FetchComics;