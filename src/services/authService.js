import http from './httpService';
import { apiUrl } from '../config.json';
import jwt_decode from 'jwt-decode';

const apiEndpoint = `${apiUrl}/auth`;
const tokenKey = 'token';
const obj = {
  login,
  loginWithJwt,
  getJwt,
  getCurrentUser,
  logout,
};

http.setJwt(getJwt());

async function login(user) {
  const { data: jwt } = await http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
  });

  localStorage.setItem(tokenKey, jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwt_decode(jwt);
  } catch (error) {}
}

function logout() {
  localStorage.removeItem(tokenKey);
}

export default obj;
