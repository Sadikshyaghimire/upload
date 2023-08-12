import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(defaultOptions);

export default instance;
