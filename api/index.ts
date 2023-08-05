import bodyParser from 'body-parser';
import express from 'express';
import router from './router';
import cors from 'cors';
import { EXPRESS_DEVSERVER_PORT } from '../src/const/api-const';

const port = EXPRESS_DEVSERVER_PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

router(app);

const server = app.listen(port, (error?: Error) => {
	if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${port}`);
}).on('error', (error: NodeJS.ErrnoException) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Server is already running on port ${port}, you can continue developing the application`);
  } else {
    console.error(error.message);
  }
});

process.on('SIGTERM', closeMockServerHandler);
process.on('SIGINT', closeMockServerHandler);

function closeMockServerHandler() {
  console.log('Closing server....');
  server.close(() => {
      process.exit();
  });
  console.log('Server successfully closed');
};

