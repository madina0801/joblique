require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const Parser = require('rss-parser');

const User = require('./models/user');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI;

const parser = new Parser();

const PORT = 5000;

const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'https://joblique.onrender.com'],
}

app.use(express.json());
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.get('/api/remotive-rss', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://remotive.com/remote-jobs/feed');
    const jobPostings = feed.items.map(item => ({
      companyName: item.creator,
      pubDate: item.pubDate.slice(0,16),
      jobLink: item.link,
      jobTitle: item.title,
      contentSnippet: item.contentSnippet.split("\n")[0],
    }));
    res.json(jobPostings);
  }
  catch (err) {
    console.error(err);
  }
})

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