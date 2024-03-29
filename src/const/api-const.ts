export const WEBPACK_DEVSERVER_PORT = 4000;
export const EXPRESS_DEVSERVER_PORT = 3002;
export const API_URL_PROD = 'https://api.drmteam.org';
export const API_URL_DEV = 'https://api.drmteamdev.ru';
export const CLIENT_URL_PROD = 'https://drmteam.org';
export const CLIENT_URL_LOCALHOST = `http://localhost:${WEBPACK_DEVSERVER_PORT}`;
export const REQUEST_TIMEOUT = 10000;

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
  Logout = '/logout',
  Refresh = '/refresh',
  TasksInfo = '/tasks',
  CurrentTasks = '/tasks/:quantityPerPage/:pageNumber'
}

export enum APIActions {
  Register = 'register',
  Login = 'login',
  Confirm = 'confirm',
  Repass = 'repass',
  NewPassword = 'newPassword',
  Logout = 'logout',
  Refresh = 'refresh',
  CreateTask = 'createTask',
  GetCurrentTasks = 'getCurrentTasks',
  UpdateTask = 'updateTask'
}

export enum UpdateTaskAPIMicroActions {
  AssignTaskToUser = 'assignTaskToUser',
  UnassignTaskFromUser = 'unassignTaskFromUser',
  SendTaskForReview = 'sendTaskForReview',
  AcceptTask = 'acceptTask',
  ArchiveTask = 'archiveTask',
  UnarchiveTask = 'unarchiveTask'
}

export enum TasksPagination {
  QuantityPerPage = '10',
  PageNumber = '1'
};

export const API_MESSAGES = {
  FILED: 'Request to server is failed'
};
