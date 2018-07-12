// Basic twitter
const express = require('express');
const usersRouter = require('./api/users/users.router.js');
const tweetsRouter = require('./api/tweets/tweets.router.js');
const mongoose = require('mongoose');
const config = require('./.env');
const morgan = require('morgan');
const compression = require('compression')
const telegramBot = require('./api/notifications/telegram-notifier');

const app = express();
const options  = config[process.env.NODE_ENV];
const _PORT = options.PORT;
const _DB = options.DB_URL;

mongoose.connect(_DB); 

//Middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(compression())

//Middlewares para rutas
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);

app.listen(_PORT, function(){
    console.log('Server listening in port ' + _PORT);
});
