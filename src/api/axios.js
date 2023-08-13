import axios from 'axios';

const BASE_URL = 'http://13.234.112.154/api/v1';

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(defaultOptions);

export default instance;
