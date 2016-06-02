'use strict';
const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser').json();

const jwtAuth = require('./lib/jwt_auth');
const authRouter = require('./route/router');

mongoose.connect('mongodb://localhost/dev_db');

app.use('/', authRouter);

app.get('/test', (req, res) => {
  res.send('does not need a token');
});

app.post('/test', bodyParser, jwtAuth, (req, res) => {
  res.json({message:'need a token', user: req.user});
});

app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
  next(err);
});

app.use('*', (req, res) => {
  res.status(404).json({message: 'not found'});
});

app.listen(3000);
