import http from './httpService';

const apiEndpoint = '/users';

const obj = {
  register,
};

function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export default obj;
