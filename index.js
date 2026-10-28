const express = require('express');

const app = express();

app.get('/', (_request, response) => {
  response.send("Welcome to Camper Bot's homepage!");
});

app.get('/hobbies', (_request, response) => {
  response.send('I cycle, go boating, and play guitar.');
});

app.get('/skills', (_request, response) => {
  response.send('JavaScript, Node.js, and Express.js!');
});

app.get('/api/profile', (_request, response) => {
  response.json({
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
