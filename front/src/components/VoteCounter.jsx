import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleCounter = (value) => {
    this.setState({count: value});
  }
  
  handleSubmit(e) {
    const comicId = this.props.comicId
    e.preventDefault();
    alert('Merci pour votre vote')
    axios.put(`/api/comics/${comicId}`, this.state )
    .then(res => console.log(res.data))
  };

  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <p>Votes: {this.state.count}</p>
        <button type="submit" onClick={() =>  this.handleCounter(this.state.count + 1)}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;



