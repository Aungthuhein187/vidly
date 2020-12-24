import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = `${apiUrl}/movies`;

function getApiUrl(movieId) {
  return `${apiEndpoint}/${movieId}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(this.getApiUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(this.getApiUrl(movie._id), movie);
  }
  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(this.getApiUrl(movieId));
}
