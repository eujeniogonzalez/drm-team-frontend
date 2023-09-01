export enum NameSpace {
  Api = 'api',
  User = 'user'
}

export enum AuthStatuses {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum Symbols {
  Empty = '',
  DoubleSlash = '//'
}

export const EMAIL_REGEXP = /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,15}$/;
export const PASSWORD_REGEXP = /^[a-zA-Z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/;
export const MAX_EMAIL_LENGTH = 129;
export const MAX_PASSWORD_LENGTH = 50;

