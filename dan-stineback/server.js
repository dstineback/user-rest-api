'use strict';

const app = require('express');
const mongoose = require('mongoose');
const authRouter = require('./route/router');

mongoose.connect('mongodb://localhost/auth_db');

app.use('/', authRouter);

app.use((err, req, res, next)=> {
  res.status(500).json({message: err.message});
});

app.listen(3000);
