import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { useAppSelector } from '../hooks';
import { getAccessToken } from '../store/processes/user-process/user-selectors';
import { API_URL_DEV, API_URL_PROD } from '../const/api-const';

const API_URL = (process.env.NODE_ENV && process.env.NODE_ENV === 'development') ? API_URL_DEV : API_URL_PROD;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
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

