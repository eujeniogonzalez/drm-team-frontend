import { REFRESH_TOKEN_NAME } from '../const/api-const';

export function setRefreshTokenToStorage(refreshToken: string) {
  localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken);
}

export function getRefreshTokenFromStorage() {
  localStorage.getItem(REFRESH_TOKEN_NAME);
}

export function isRefreshTokenSetInStorage() {
  return localStorage.getItem(REFRESH_TOKEN_NAME) ? true : false;
}

export function deleteRefreshTokenFromStorage() {
  localStorage.removeItem(REFRESH_TOKEN_NAME);
}

