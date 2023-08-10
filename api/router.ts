import { Express, Request, Response } from 'express';
import { login } from './db/login';
import { refresh } from './db/refresh';
import { APIRoutes } from '../src/const/api-const';
import { register } from './db/register';
import { confirm } from './db/confirm';
import { repass } from './db/repass';
import { newPassword } from './db/new-password';

const router = (app: Express) => {
  app.post(APIRoutes.Register, (request: Request, response: Response) => {
    setTimeout(() => {
      response.send(register[request.method as keyof typeof register]);
    }, 4000);
	});
	app.post(APIRoutes.Login, (request: Request, response: Response) => {
    setTimeout(() => {
      response.send(login[request.method as keyof typeof login]);
    }, 4000);
	});
  app.post(APIRoutes.Confirm, (request: Request, response: Response) => {
    setTimeout(() => {
      response.send(confirm[request.method as keyof typeof login]);
    }, 4000);
	});
  app.post(APIRoutes.Repass, (request: Request, response: Response) => {
    setTimeout(() => {
      response.send(repass[request.method as keyof typeof login]);
    }, 4000);
	});
  app.post(APIRoutes.NewPassword, (request: Request, response: Response) => {
    setTimeout(() => {
      response.send(newPassword[request.method as keyof typeof login]);
    }, 4000);
	});
  app.get(APIRoutes.Refresh, (request: Request, response: Response) => {
    setTimeout(() => {
      response.send(refresh[request.method as keyof typeof refresh]);
    }, 4000);
	});
};

export default router;
