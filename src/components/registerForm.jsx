import Form from './common/form';
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

  doSubmit = () => {
    console.log('Register');
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
