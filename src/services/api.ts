import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { REQUEST_TIMEOUT } from '../const/api-const';
import { store } from '../store';
import { getAPIURL } from '../utils';
import { adaptFromClientToServer, adaptFromServerToClient } from './adapter';

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
        config.headers['authorization'] = `Bearer ${accessToken}`;
      }

      if (!config.data) return config;
      
      config.data = adaptFromClientToServer(config.data);

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => {
      if (!response.data) return response;
      
      response.data = adaptFromServerToClient(response.data);
      
      return response;
    }
  );

  return api;
};

