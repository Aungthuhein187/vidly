import Form from './common/form';
import authService from '../services/authService';
import Joi from 'joi-browser';
import { Redirect } from 'react-router-dom';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = async () => {
    try {
      await authService.login(this.state.data);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
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
    if (authService.getCurrentUser()) return <Redirect to="/" />;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        {this.renderInput('username', 'Username')}
        {this.renderInput('password', 'Password', 'password')}
        {this.renderButton('Login')}
      </form>
    );
  }
}

export default LoginForm;
