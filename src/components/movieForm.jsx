import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class MovieForm extends Form {
  state = {
    data: {
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: '',
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('Genre'),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label('Number in stock'),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label('Daily rental rate'),
  };

  doSubmit = () => {
    console.log('Movie Created');
    this.props.history.push('/movies');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Movie Form</h1>
        {this.renderInput('title', 'Title')}
        {this.renderInput('genreId', 'Genre')}
        {this.renderInput('numberInStock', 'Number in stock', 'number')}
        {this.renderInput('dailyRentalRate', 'Rate', 'number')}
        {this.renderButton('Save')}
      </form>
    );
  }
}

export default MovieForm;
