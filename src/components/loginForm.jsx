import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  validate = () => {
    const { account } = this.state;
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, this.schema, options);
    if (!error) return null;

    const errors = {};
    error.details.map((error) => (errors[error.path[0]] = error.message));
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log('Submitted');
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          label="Username"
          value={account.username}
          error={errors.username}
          type="text"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          label="Password"
          value={account.password}
          error={errors.password}
          type="password"
          onChange={this.handleChange}
        />
        <button disabled={this.validate()} className="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
