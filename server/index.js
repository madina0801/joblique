const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});