import React from 'react';

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

  const events_list = [];
  if (events.length) {
    // Update the DOM with the events
    for (const event in  events.entries()) {
      events_list.push(
        <li>
          <a className="btn btn-outline-light" id={event._id}>{event.name}</a>
        </li>
      );
    }
}
  return (
    <main>
      <div className="input-container text-center">
        <h1>Please Create or Select an Event:</h1>
          <input type="text" id="meeting_name" className="form-field" placeholder="Create a New Meeting"/>
            <button type="submit" className="btn btn-primary" id="meeting_button">Submit</button>
            <div className="meetings-container">
              <ul className="meetings-list" id="meetings_list">
                {events_list}
              </ul>
            </div>
        </div>
      </main>
  );
}