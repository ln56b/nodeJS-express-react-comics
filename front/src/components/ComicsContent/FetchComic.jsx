import React, { Component } from 'react';
import axios from 'axios';
import DisplayComic from './DisplayComic';

class FetchComic extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      comic : {}
    };
    this.getComic = this.getComic.bind(this);
  }

  componentDidMount() {
    const comicId = this.props.match.params.comicId;
    this.getComic(comicId)
  };

  getComic(comicId) {
    axios
    .get(`/api/comics/${comicId}`)
    .then(res => res.data)
    .then(data => {
      this.setState({
        comic: data
      });
    });
  };

  render() {
    return (
      <div>
        {/* {this.state.comic && <DisplayComic comic = {this.state.comic} />} */}
      </div>
    );
  }
}

export default FetchComic;