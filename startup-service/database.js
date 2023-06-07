const { MongoClient, ObjectId } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const eventCollection = db.collection('event');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

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

module.exports = { addEvent, getEvents, updateEvent, getEvent };
