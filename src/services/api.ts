import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { REQUEST_TIMEOUT } from '../const/api-const';
import { store } from '../store';
import { getAPIURL } from '../utils';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: getAPIURL(),
    timeout: REQUEST_TIMEOUT,
    withCredentials: true
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = store.getState().user.accessToken;

      // todo Сделать проверку токена, если истёк, сначала делаем рефреш

      if (accessToken && config.headers) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    }
  );

  return api;
};

