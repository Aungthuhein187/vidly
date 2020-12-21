import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.current.name] = e.current.value;
    this.setState({ account });
  };

  render() {
    const { username, password } = this.state.account;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={this.handleChange}
            name="username"
            id="username"
            type="text"
            className="form-control"
            autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
