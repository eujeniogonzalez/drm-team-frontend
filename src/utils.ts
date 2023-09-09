import {
  ANY_CAPITAL_LETTER_REGEXP,
  SLASHES_AT_END_OF_STRING_REGEXP,
  Symbols
} from './const/common-const';

import {
  API_URL_DEV,
  API_URL_PROD,
  CLIENT_URL_LOCALHOST,
  CLIENT_URL_PROD
} from './const/api-const';

export function removeLastSlash(string: string) {
  return string.replace(SLASHES_AT_END_OF_STRING_REGEXP, Symbols.Empty);
}

export function getCurrentClientDomain() {
  return [
    window.location.protocol,
    Symbols.DoubleSlash,
    removeLastSlash(window.location.host)
  ].join(Symbols.Empty);
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

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function uncapitalizeFirstLetter(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function convertFromSnakeToCamelCase(text: string) {
  const splittedString = text.split(Symbols.Underline);

  splittedString.forEach((word, i) => {
    if (i === 0) return;

    splittedString[i] = capitalizeFirstLetter(word);
  });

  return splittedString.join(Symbols.Empty);
}

export function convertFromCamelToSnakeCase(text: string) {
  let splittedString = text.split(ANY_CAPITAL_LETTER_REGEXP);

  splittedString = joinSplittedAbbreviation(splittedString);

  splittedString.forEach((word, i) => {
    if (word.length > 1 && isUpperCase(word.charAt(1))) return;

    splittedString[i] = uncapitalizeFirstLetter(word);
  });

  return splittedString.join(Symbols.Underline);
}

function joinSplittedAbbreviation(arr: string[]) {
  const newArr: string[] = [];
  let skipIndex: number;

  arr.forEach((key, i) => {
    if (i === skipIndex) return;

    if (key.length === 1 && arr[i + 1] && arr[i + 1].length === 1) {
      skipIndex = i + 1;

      newArr.push(key + arr[i + 1]);
    } else {
      newArr.push(key);
    }
  });

  return newArr;
}

function isUpperCase(str: string) {
  return str !== str.toLowerCase() && str === str.toUpperCase();
}
