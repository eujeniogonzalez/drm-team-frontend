import { Symbols } from './const/common-const';

import {
  API_URL_DEV,
  API_URL_PROD,
  CLIENT_URL_LOCALHOST,
  CLIENT_URL_PROD
} from './const/api-const';

export function removeLastSlash(string: string) {
  return string.replace(/\/+$/, '');
}

export function getCurrentClientDomain() {
  return `
    ${window.location.protocol}
    ${Symbols.DoubleSlash}
    ${removeLastSlash(window.location.host)}
  `;
}

export function isClientDomainProd() {
  const currentURL = getCurrentClientDomain();

  return currentURL === CLIENT_URL_PROD;
}

export function isClientDomainLocalhost() {
  const currentURL = getCurrentClientDomain();

  return currentURL === CLIENT_URL_LOCALHOST;
}

export function getAPIURL() {
  return isClientDomainProd() ? API_URL_PROD : API_URL_DEV;
}
