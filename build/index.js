"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const application = express(), server = http.createServer(application), port = 3000;
application.use(cookieParser());
application.use(bodyParser.json({
    limit: 104857600,
}));
application.use(bodyParser.urlencoded({
    extended: true,
}));
const engine = require('express-react-views').createEngine();
application.set('views', __dirname + '/view');
application.set('view engine', 'js');
application.engine('js', engine);
application.use('/public', express.static(path.join(__dirname + '/public')));
application.use('/', (request, response, next) => {
    response.render('Index', {});
});
server.listen(port, function () {
    console.log('Express started on port: %d', port);
});
