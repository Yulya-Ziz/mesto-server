const fsPromises = require('fs').promises;

const readFile = (path) => fsPromises.readFile(path, { encoding: 'utf8' })
  .then((data) => JSON.parse(data));

module.exports = readFile;
