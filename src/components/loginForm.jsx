import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
