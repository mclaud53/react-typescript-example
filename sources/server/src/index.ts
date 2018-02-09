import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

const application: express.Express = express(),
	server: http.Server = http.createServer(application),
	port: number = 3000;

application.use(cookieParser());

// for parsing application/json
application.use(bodyParser.json({
	limit: 104857600,
	// type: 'application/json',
}));

// for parsing application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({
	extended: true,
}));

const engine = require('express-react-views').createEngine();

application.set('views', __dirname + '/view');
application.set('view engine', 'js');
application.engine('js', engine);

application.use('/public', express.static(path.join(__dirname + '/public')));

application.use('/', (request: express.Request, response: express.Response, next: express.NextFunction): void => {
	response.render('Index', {});
});

server.listen(port, function (): void {
	// tslint:disable-next-line:no-console
	console.log('Express started on port: %d', port);
});
