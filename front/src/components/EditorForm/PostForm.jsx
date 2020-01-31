import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:'',
        author: '',
        cover_image:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    alert('Merci pour votre partage')
    axios.post('/api/comics', this.state )
    .then(res => console.log(res.data))
    this.setState({
      title: '',
      author: '',
      cover_image:''
    })
  };

  render() {
    return (
      <div>
      <Form title={this.state.title} author={this.state.author} cover_image={this.state.cover_image} onChange={this.handleChange} onSubmit={this.handleSubmit} />
    </div>
    );
  }
}

export default PostForm;
