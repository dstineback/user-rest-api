'use strict';

const mondgoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});

User.methods.hashedPassword = function() {
  return bcrypt.hashSync(this.password, 8);
};

User.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', User);