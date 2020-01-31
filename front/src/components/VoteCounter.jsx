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
      <div>
        <p>Votes: {this.state.count}</p>
        <button onClick={() => { this.handleCounter(this.state.count + 1); this.handleSubmit() }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;



