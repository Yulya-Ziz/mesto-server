const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/readFile.js');

router.get('/users', (req, res) => {
  console.log(req);
  readFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((usersList) => {
      res.send(usersList);
    })
    .catch((err) => {
      res.send(`Error: ${err}`);
    });
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  readFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((usersList) => {
      const user = usersList.find((u) => u._id === id);
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch((err) => {
      res.send(`Error: ${err}`);
    });
});

module.exports = router;
