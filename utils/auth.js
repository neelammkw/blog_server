const crypto = require('crypto');

const generateRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') // convert to hexadecimal format
    .slice(0, length); // return required number of characters
};

const JWT_SECRET_KEY = generateRandomString(32); // Generate a 32-character random string
console.log(JWT_SECRET_KEY);
