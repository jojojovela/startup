const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('startup');
    console.log('Connected to MongoDB');
  } catch (ex) {
    console.error('Unable to connect to database:', ex.message);
    throw ex;
  }
}

function getUser(username) {
  return db.collection('user').findOne({ username });
}

function getUserByToken(token) {
  return db.collection('user').findOne({ token });
}

async function createUser(email, passwordHash) {

  const user = {
    username: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await db.collection('user').insertOne(user);

  return user;
}

module.exports = { connectDB, getUser, getUserByToken, createUser };
