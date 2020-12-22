import Form from './common/form';
import Input from './common/input';
import Joi from 'joi-browser';

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  doSubmit = () => {
    console.log('Submitted');
  };

  render() {
    const { data, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          label="Username"
          value={data.username}
          error={errors.username}
          type="text"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          label="Password"
          value={data.password}
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
