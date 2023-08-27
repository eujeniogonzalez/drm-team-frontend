import { REFRESH_TOKEN_NAME } from '../const/api-const';

export function setRefreshTokenToStorage(refreshToken: string) {
  localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken);
}

export function getRefreshTokenFromStorage() {
  return localStorage.getItem(REFRESH_TOKEN_NAME);
}

export function isRefreshTokenSetInStorage() {
  return getRefreshTokenFromStorage() ? true : false;
}

export function deleteRefreshTokenFromStorage() {
  localStorage.removeItem(REFRESH_TOKEN_NAME);
}

