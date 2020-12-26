import React from 'react';
import Form from './common/form';
import userService from '../services/userService';
import authService from '../services/authService';
import Joi from 'joi-browser';

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label('Username'),
    password: Joi.string().min(5).required().label('Password'),
    name: Joi.string().required().label('Name'),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      authService.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (error) {
      if (error.response && error.response.status === 400) {
        this.setState({
          errors: {
            username: error.response.data,
          },
        });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        {this.renderInput('username', 'Username')}
        {this.renderInput('password', 'Password', 'password')}
        {this.renderInput('name', 'Name')}
        {this.renderButton('Register')}
      </form>
    );
  }
}

export default RegisterForm;
