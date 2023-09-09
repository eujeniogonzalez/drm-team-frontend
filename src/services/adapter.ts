import { convertFromCamelToSnakeCase, convertFromSnakeToCamelCase } from '../utils';

export function adaptFromServerToClient<T, K>(data: T): K | T {
  if (!data) return data;

  const adaptedData: any = {};

  for(let key in data) {
    if (typeof data[key] === 'object') {
      adaptedData[convertFromSnakeToCamelCase(key)] = adaptFromServerToClient(data[key]);
    } else {
      adaptedData[convertFromSnakeToCamelCase(key)] = data[key];
    }
    
  }

  return adaptedData;
}

export function adaptFromClientToServer<T, K>(data: T): K | T {
  if (!data) return data;

  const adaptedData: any = {};

  for(let key in data) {
    if (typeof data[key] === 'object') {
      adaptedData[convertFromCamelToSnakeCase(key)] = adaptFromClientToServer(data[key]);
    } else {
      adaptedData[convertFromCamelToSnakeCase(key)] = data[key];
    }
    
  }

  return adaptedData;
}


