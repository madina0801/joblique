const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.use(cors({
  origin: 'http://localhost:5187',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});