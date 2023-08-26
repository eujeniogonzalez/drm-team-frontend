import { API_URL_DEV, API_URL_PROD, CLIENT_URL_PROD } from './const/api-const';

function removeLastSlash(string: string) {
  return string.replace(/\/+$/, '');
}

function getCurrentClientDomain() {
  return `${window.location.protocol}//${removeLastSlash(window.location.host)}`;
}

function isClientDomainProd(currentURL: string) {
  return currentURL === CLIENT_URL_PROD;
}

export function getAPIURL() {
  const currentClientDomain = getCurrentClientDomain();

  return isClientDomainProd(currentClientDomain) ? API_URL_PROD : API_URL_DEV;
}
