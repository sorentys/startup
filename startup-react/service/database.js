//require mongodb and auth services 
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const eventCollection = db.collection('event');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addEvent(event) {
    const result = await eventCollection.insertOne(event);
    return result;
}

function getEvents() {
  const query = {};
  const options = {};
  const cursor = eventCollection.find(query, options);
  return cursor.toArray();
}

async function updateEvent(event) {
  const result = await eventCollection.updateOne(
    { _id : new ObjectId(event._id) },
    { $set : { description : event.description, time_and_location : event.time_and_location, attendees : event.attendees } }
  );
}

function getEvent(id) {
  return eventCollection.findOne( { "_id" : new ObjectId(id) } );
}

module.exports = { addEvent, getEvents, updateEvent, getEvent, getUser, getUserByToken, createUser };
