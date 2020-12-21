import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === '') {
      errors.username = 'Username is required';
    }
    if (account.password.trim() === '') {
      errors.password = 'Password is required';
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors });
    if (errors) return;

    console.log('Submitted');
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          label="Username"
          value={account.username}
          type="text"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          label="Password"
          value={account.password}
          type="password"
          onChange={this.handleChange}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}

export default LoginForm;
