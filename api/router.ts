import { login } from './db/login';
import { refresh } from './db/refresh';
import { Express, Request, Response } from 'express';
import { APIRoutes } from '../src/const/router-const';
import { register } from './db/register';

const router = (app: Express) => {
  app.post(APIRoutes.Register, (request: Request, response: Response) => {
		response.send(register[request.method as keyof typeof register]);
	});
	app.post(APIRoutes.Login, (request: Request, response: Response) => {
		response.send(login[request.method as keyof typeof login]);
	});
  app.get(APIRoutes.Refresh, (request: Request, response: Response) => {
    response.send(refresh[request.method as keyof typeof refresh]);
	});
};

export default router;
