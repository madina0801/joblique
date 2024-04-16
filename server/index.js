const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = 3000;

const app = express();

app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

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