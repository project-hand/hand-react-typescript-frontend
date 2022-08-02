import Axios, { type AxiosRequestConfig, type AxiosResponse, AxiosError } from 'axios';

let API_URL = '';

if (process.env.NODE_ENV !== 'development') {
  API_URL = '';
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers!['Accept'] = 'application/json';
    config.headers!['Content-Type'] = 'application/json';
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);