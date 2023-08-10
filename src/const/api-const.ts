export const WEBPACK_DEVSERVER_PORT = 4000;
export const EXPRESS_DEVSERVER_PORT = 3002;
export const API_URL_PROD = 'https://api.drmteam.org';
export const API_URL_DEV = `http://localhost:${EXPRESS_DEVSERVER_PORT}`;
export const REQUEST_TIMEOUT = 5000;

export enum APIMethods {
  GET = 'GET',
  POST = 'POST'
}

export enum APIRoutes {
  Register = '/register',
  Login = '/login',
  Confirm = '/confirm',
  Repass = '/repass',
  NewPassword = '/newpassword',
  Refresh = '/refresh'
}

export enum APIActions {
  Register = 'register',
  Login = 'login',
  Confirm = 'confirm',
  Repass = 'repass',
  NewPassword = 'newPassword'
}

export const API_MESSAGES = {
  FILED: 'Request to server is failed'
};
