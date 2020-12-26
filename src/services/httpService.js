import axios from 'axios';
import logger from '../services/logService';
import authService from '../services/authService';
import { toast } from 'react-toastify';

const obj = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

axios.defaults.headers.common['x-auth-token'] = authService.getJwt();

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error('An unexpected error occured');
  }

  return Promise.reject(error);
});

export default obj;
