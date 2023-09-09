export enum NameSpace {
  User = 'user',
  Toast = 'toast'
}

export enum AuthStatuses {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum Symbols {
  Empty = '',
  DoubleSlash = '//',
  Underline = '_'
}

export enum LinksBlockAlignment {
  Vertical = 'vertical',
  Horizontal = 'horizontal'
}

export const EMAIL_REGEXP = /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,15}$/;
export const PASSWORD_REGEXP = /^[a-zA-Z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/;
export const MAX_EMAIL_LENGTH = 129;
export const MAX_PASSWORD_LENGTH = 50;
export const ANY_CAPITAL_LETTER_REGEXP = /(?=[A-Z])/;
export const SLASHES_AT_END_OF_STRING_REGEXP = /\/+$/;

