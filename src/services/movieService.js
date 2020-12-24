import http from './httpService';
import { apiUrl } from '../config.json';

export function getMovies() {
  return http.get(`${apiUrl}/movies`);
}

export function getMovie(id) {
  return http.get(`${apiUrl}/movies/${id}`);
}

export function saveMovie(movie) {}
