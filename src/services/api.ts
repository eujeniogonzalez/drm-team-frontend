import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { APIActions, REQUEST_TIMEOUT } from '../const/api-const';
import { store } from '../store';
import { getAPIURL, isAccessTokenExpired } from '../utils';
import { adaptFromClientToServer, adaptFromServerToClient } from './adapter';
import { refreshAuthAction } from '../store/api-actions';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: getAPIURL(),
    timeout: REQUEST_TIMEOUT,
    withCredentials: true
  });

  api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const accessToken = store.getState().user.accessToken;
      const isAPIActionRefresh = store.getState().user.userAPIResponse.type === APIActions.Refresh;
      
      switch (true) {
        case accessToken && !isAccessTokenExpired(accessToken):
          config.headers['authorization'] = `Bearer ${accessToken}`;
          break;
      
        case accessToken && isAccessTokenExpired(accessToken) && !isAPIActionRefresh:
          await store.dispatch(refreshAuthAction());

          const newAccessToken = store.getState().user.accessToken;

          config.headers['authorization'] = `Bearer ${newAccessToken}`;
          break;
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

