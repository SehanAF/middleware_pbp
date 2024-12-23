const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [
 { username: 'sehan', password: 'password1' },
 { username: 'alexa', password: 'password2' }
];

app.use(bodyParser.json());

const loggingMiddleware = (req, res, next) => {
 console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
 next();
};

const authenticationMiddleware = (req, res, next) => {
 const { username, password } = req.body;
 console.log(`[${new Date().toISOString()}] Attempting login to with username ${username}`);
 const user = users.find(user => user.username === username && user.password === password);
 if (user) {
  req.user = user;
  console.log(`[${new Date().toISOString()}] Authentication success for ${username}`);
  next();
 } else {
  console.log(`[${new Date().toISOString()}] Authentication failed for ${username}`);
  next(new Error('Unauthorized'));
 }
};

const errorHandlerMiddleware = (err, req, res, next) => {
 console.error(err);
 if(err.message === 'Unauthorized') {
  res.status(401).send('Unauthorized');
 } else {
  res.status(500).send('Internal Server Error');
 }
};

app.use(loggingMiddleware);

app.get('/', (req, res) => {
 res.send('Hello, Express with In-Memory Authentication Middleware!!');
});

app.post('/login', authenticationMiddleware, (req, res) => {
 res.send(`Hello, ${req.user.username}! login successful!`);
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
});