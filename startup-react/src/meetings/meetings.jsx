import React, { useRef, useState } from 'react';
import { Link, Route } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { sendMessage } from "./chat_client"
import './meetings.css';

let events_list =[];

export function Meetings() {

  //function to create new button for new meetings
  async function newMeeting() {

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
        console.log("error");
    }

    //add event to event list
    events_list.push(newEvent);
  }

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

  function updateDescription(value) {
    localStorage.setItem('description', value);
  }

  function updateTimeLocation(value) {
    localStorage.setItem('time_location', value);
  }

  if (events.length) {
    // Update the DOM with the events
    for (const [i, event] of  events.entries()) {
      events_list.push(
        <div key={i}>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                  <Accordion.Header>Meeting: {event.name}</Accordion.Header>
                  <Accordion.Body>
                    <textarea 
                      className="accordion_textarea" 
                      id="event-description"
                      placeholder="Please include your event description here"
                      defaultValue={event.description}
                      onChange={(e) => updateDescription(e.target.value)}>
                    </textarea>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                  <Accordion.Header>Attendees</Accordion.Header>
                  <Accordion.Body>
                    <div className="input-and-submit">
                      <input type="text" id="attendee-name" className="form-field" placeholder="Attendee"/>
                      <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                  <Accordion.Header>Time and Location</Accordion.Header>
                  <Accordion.Body>
                  <textarea 
                    className="accordion_textarea" 
                    id="event-time-location" 
                    placeholder="Please include your event time and location here"
                    onChange={(e) => updateTimeLocation(e.target.value)}>
                  </textarea>
                  </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                  <Accordion.Header>Live Chat</Accordion.Header>
                  <Accordion.Body>
                  <div className="input-and-submit">
                    <fieldset id="name-controls">
                      <h6 className="event-paragraph">Name</h6>
                      <input id="my-name" type="text" />                      
                    </fieldset>
                    <fieldset id="chat-controls">
                        <h6 className="event-paragraph">Comments</h6>
                        <input id="new-msg" type="text" />
                        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                    </fieldset>
                  </div>
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        </div>
      );
    }
}

  return (
    <main>
      <div className="input-container text-center">
        <h1>Please Create or Select an Event:</h1>
          <input 
            type="text" 
            id="meeting_name" 
            className="form-field" 
            placeholder="Create a New Meeting" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" id="meeting_button" onClick={() => newMeeting(event_name)}>Submit</button>
        <div className="meetings-container">
          <ul className="meetings-list" id="meetings_list">
            {events_list}
          </ul>
        </div>
      </div>
    </main>
  );
}