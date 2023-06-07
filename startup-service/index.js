 //require express and set equal to app, require db
const express = require('express');
const app = express();
const DB = require('./database.js')

// The service port. In production the front-end code is statically hosted by the service on the same port. Following the code from simon-service
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware. Also following code from simon-service
app.use(express.json());

// Serve up the front-end static content hosting.
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/*------------------------------------------------------*/

//get events
apiRouter.get('/events', async (_req, res) => {
  const events = await DB.getEvents();
  res.send(events);
});

// submit events
apiRouter.post('/event', async (req, res) => {
  DB.addEvent(req.body);
  const events = await DB.getEvents();
  res.send(events);
});

apiRouter.get('/event/:id', async (req, res) => {
  const event = await DB.getEvent(req.params.id);
  res.send(event);
})

apiRouter.put('/event', async (req, res) => {
  const event = await DB.updateEvent(req.body);
  res.send(req.body);
})




