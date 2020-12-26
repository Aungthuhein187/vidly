import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = `${apiUrl}/auth`;

const obj = {
  login,
};

async function login(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
  });
}

export default obj;
