import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Form = props => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    gender: '',
    cover_image: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = this.state.form

    axios.post('genders/:genderId/comics', { form })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }


    return (
      <Fragment>
      <form onSubmit={handleSubmit}>
        <label>
        Title:
        </label>
        <input
          type="text"
          value={form.title}
          onChange={handleChange}
          name="title"
          />
        <label>
        Author:
        </label>
        <input
          type="text"
          value={form.author}
          onChange={handleChange}
          name="author"
          />
        <label>
        Gender:
        </label>
        <input
          type="text"
          value={form.gender}
          onChange={handleChange}
          name="gender"
          />
        <label>
        Cover_image:
        </label>
        <input
          type="text"
          value={form.cover_image}
          onChange={handleChange}
          name="cover_image"
          />
      </form>
      <button onClick = {props.postComic} >Envoyer</button>
      </Fragment>
    )
}

export default Form;