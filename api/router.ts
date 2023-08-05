import { login } from './db/login';
import { refresh } from './db/refresh';
import { Express, Request, Response } from 'express';
import { APIRoutes } from '../src/const/router-const';
import { APIMethods } from '../src/const/api-const';

// function getMockData({ method, db }: { method: string, db: object }) {
//   return db[`${method}`];
// }

const router = (app: Express) => {
	app.post(APIRoutes.Login, (request: Request, response: Response) => {
		response.send(login);
	});
  app.get(APIRoutes.Refresh, (request: Request, response: Response) => {
    // console.log(request.method);
    
		// response.send(getMockData({ method: request.method, db: refresh }));
    response.send(refresh.GET);
	});
};

export default router;
