const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport').Strategy;
const User = require('models/user');

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


// Set up Passport
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

// Serialize and Deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// SignUp
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

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