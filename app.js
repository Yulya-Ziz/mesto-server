const express = require('express');
const cardsRoutes = require('./routes/cards.js');
const usersRoutes = require('./routes/users.js');

const app = express();
const PORT = 3000;

app.use('/', express.static('public'));
app.use('/', cardsRoutes);
app.use('/', usersRoutes);
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Приложение запущено, порт ${PORT}`);
});
