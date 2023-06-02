 //require express and set equal to app
const express = require('express');
const app = express();

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

//create a list of users
let users = [];

//create current event holder
let current_event_name = [];

//meetings are stored as objects in an array of events
let events = [];
function updateEvents(event) {
  events.push(event);
}

function updateCurrentName(current_name) {
  current_event_name.push(current_name);
}
//post events
apiRouter.post('/events', (req, res) => {
    updateEvents(req.body);
    res.send(events);
  });

//get event and send it to pages
apiRouter.get('/events', (_req, res) => {
    res.send(events);
  });

//post events
apiRouter.post('/current_event', (req, res) => {
  updateCurrentName(req.body);
  console.log(current_event_name);
  res.send(current_event_name);
});

//get event and send it to pages
apiRouter.get('/current_event', (_req, res) => {
  console.log(current_event_name);
  res.send(current_event_name);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
function updateEventDetails(updated_event, events) {
    let found = false;
    for (const [i, previous_event] of events.entries()) {
        if (previous_event.name == updated_event.name) {
            events[i] = updated_event;
            found = true;
        break;
        }
    }

  if (!found) {
    events.push(updated_event);
  }

  return events;
}
