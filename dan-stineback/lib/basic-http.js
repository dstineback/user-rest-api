'use strict';

module.exports = function(req, res, next) {
  let basicAuth = req.headers.authorization;
  console.log(basicAuth);
  let authString = basicAuth.split(' ').pop();
  let authBuff = new Buffer(authString, 'base64');
  let asciiAuth = authBuff.toString();
  let authArray = asciiAuth.split(':');
  console.log(authArray);
  authBuff.fill(0);

  req.auth = {
    username: authArray[0],
    password: authArray[1]
  };

  if(!req.auth.username || !req.auth.password) {
    return next(new Error('Username or password missing'));
  }
  next();
};
