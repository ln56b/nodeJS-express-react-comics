import React, { Component } from 'react';
import axios from 'axios';
import Comic from './Comic';

class FetchComic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comic: {},
    };

    this.getComic = this.getComic.bind(this);
  }

  componentDidMount() {
    const comicId = this.props.match.params.id;
    this.getComic(comicId);
  }

  getComic(comicId) {
    axios
    .get(`/api/comics/${comicId}`)
    .then(response => response.data)
    .then(data => {
      this.setState({
        comic: data
      });
    });
  }
  render() {
    return (
          <div className = "">
            {this.state.comic && <Comic comic={this.state.comic} />}
          </div>

    );
  }
}

export default FetchComic;