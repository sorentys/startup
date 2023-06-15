import React from 'react';
import { Link, Route } from "react-router-dom";
import { MeetingView } from "../meeting_view/meeting_view"


import './meetings.css';

let events_list =[];

//function to create new button for new meetings
async function newMeeting() {

  //grab meeting name
  let event_name = document.getElementById("meeting_name").value;

  //store event in server
  const newEvent = {name: event_name, description: "", attendees: [], time_and_location: ""};

  try {
      //post events
      const response = await fetch('/api/event', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newEvent),
      });

      // Store events from service
      const events = await response.json();
      localStorage.setItem('events', JSON.stringify(events));
  } 
  catch {
      // If there was an error then just track scores locally
      localStorage.setItem("event_name" ,document.getElementById("meeting_name").value);
  }

  //add event to event list
  events_list.push(newEvent);
}

function pressMeeting(event) {
  localStorage.setItem('this_event', event);
}

export function Meetings() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/events')
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
        localStorage.setItem('events', JSON.stringify(events));
      })
      .catch(() => {
        const eventsText = localStorage.getItem('events');
        if (eventsText) {
          setEvents(JSON.parse(eventsText));
        }
      });
  }, []);

  if (events.length) {
    // Update the DOM with the events
    for (const [i, event] of  events.entries()) {
      events_list.push(
        <li key={i} id='meeting_item'>
          <button className='btn btn-outline-light' onClick={() => pressMeeting(event)} id={event._id}><Link to="/meeting_view">{event.name}</Link></button>
        </li>
      );
    }
}

  return (
    <main>
      <div className="input-container text-center">
        <h1>Please Create or Select an Event:</h1>
          <input type="text" id="meeting_name" className="form-field" placeholder="Create a New Meeting"/>
            <button type="submit" className="btn btn-primary" id="meeting_button" onClick={() => newMeeting()}>Submit</button>
            <div className="meetings-container">
              <ul className="meetings-list" id="meetings_list">
                {events_list}
              </ul>
            </div>
        </div>
      </main>
  );
}