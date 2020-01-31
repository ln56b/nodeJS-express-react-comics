import React, { Fragment } from 'react';
import './Form.css'


const Form = ({ title, author, cover_image, onChange, onSubmit }) => {
    return (
      <Fragment>
      <form className="form-container" onSubmit={onSubmit}>
        
        <div className="form-field">
          <label className="form-label">Title</label>
          <input
            className="form-input" 
            onChange={onChange}
            name="title"
            type="text"
            value={title}
            />
        </div>

        <div className="form-field">
          <label className="form-label">Author</label>
          <input
            className="form-input" 
            onChange={onChange}
            name="author"
            type="text"
            value={author}
          />
        </div>

        <div className="form-field">       
          <label className="form-label">Main image</label>
          <input
            className="form-input" 
            onChange={onChange}
            name="cover_image"
            type="text"
            value={cover_image}
          />
        </div>

        <button className="form-button" type="submit">Envoyer</button>
      </form>
    </Fragment>
    )
}

export default Form;