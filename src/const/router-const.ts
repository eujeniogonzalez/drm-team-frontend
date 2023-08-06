export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Register = '/register',
  Repass = '/repass',
  Confirm = '/confirm/:confirmID',
  NewPassword = '/newpassword/:newpasswordID',
  Tasks = '/tasks'
}

export enum APIRoutes {
  Register = '/register',
  Login = '/login',
  Refresh = '/refresh'
}
