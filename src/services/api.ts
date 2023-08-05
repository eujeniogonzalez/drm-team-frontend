import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { API_URL_DEV, API_URL_PROD, REQUEST_TIMEOUT } from '../const/api-const';
import { store } from '../store';

const API_URL = (process.env.NODE_ENV === 'production') ? API_URL_PROD : API_URL_DEV;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = store.getState().user.accessToken;

      // todo Сделать проверку токена, если истёк, сначала делаем рефреш

      if (accessToken && config.headers) {
        config.headers['x-token'] = accessToken;
      }

      return config;
    }
  );

  return api;
};

