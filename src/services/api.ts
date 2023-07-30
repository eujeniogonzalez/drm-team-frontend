import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { useAppSelector } from '../hooks';
import { getAccessToken } from '../store/processes/user-process/user-selectors';

// todo Заменить константы
const BACKEND_URL = 'https://12.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = useAppSelector(getAccessToken);

      if (accessToken && config.headers) {
        config.headers['x-token'] = accessToken;
      }

      return config;
    }
  );

  return api;
};

