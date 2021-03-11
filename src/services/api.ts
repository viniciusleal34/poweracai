import axios from 'axios';
import { getToken } from './auth';
// 'http://162.214.54.8:3395/'
//
const api = axios.create({
  baseURL: 'http://localhost:3395/',
});

api.interceptors.request.use(async (config: any) => {
  const token = getToken();

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
