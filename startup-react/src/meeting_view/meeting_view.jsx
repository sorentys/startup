import React from 'react';
import { useState, useEffect } from 'react';

export function MeetingView() {
  //grab id from url

  const [load_event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the database using an API or library
        const response = await fetch('/api/event' + id);
        const load_event = await response.json();
        
        // Update the state with the fetched data
        setEvent(load_event);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="accordion-holder">
        <div className="accordion" id="accordion_template">

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="button_description" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {load_event.name}
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion_template">
              <div className="accordion-body">
                <textarea className="accordion_textarea" id="event-description" placeholder="Please include your event description here">{load_event.description}</textarea>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Attendees
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion_template">
              <div className="input-and-submit">
                <input type="text" id="attendee-name" className="form-field" placeholder="Attendee"/>
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
              <div className="accordion-body">
                <ul style="list-style: circle"  id="attendee_list">
                </ul>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button id="button_time_location" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Time and Location
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion_template">
              <div className="accordion-body">
                <textarea className="accordion_textarea" id="event-time-location" placeholder="Please include your event time and location here">{load_event.time_and_location}</textarea>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button id="button_chat" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Live Event Chat
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordion_template">
              <div className="input-and-submit">
                <fieldset id="name-controls" style="margin-bottom: 2%">
                  <h6 className="event-paragraph">Name</h6>
                  <input id="my-name" type="text" />
                </fieldset>
                <fieldset id="chat-controls" disabled>
                  <h6 className="event-paragraph">Comments</h6>
                  <input id="new-msg" type="text" />
                  <button className="btn btn-primary">Send</button>
                </fieldset>
              </div>
              <div className="accordion-body">
                <div id="chat-text"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="image-container">
        <img src="https://brightspotcdn.byu.edu/dims4/default/4284914/2147483647/strip/true/crop/1519x1139+206+0/resize/400x300!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot.s3.amazonaws.com%2Ff2%2F2a%2F48bedd8247469c5d7d141a1f0ba1%2Fwsc-cougar-creations.png" alt="BYU Baseball" width="250" height="250"/>
      </div>

      <div className="save-container" id="save-container">
        <h5>Please fill in the required fields and save your event information:</h5>
        <button id="save_button" type="submit" className="btn btn-primary">Save</button>
      </div>

      <div className="return-container">
        <h5>Return to events:</h5>
        <a className="btn btn-outline-light" href="meetings.html">
          Events
        </a>
      </div>
    </main>
  );
}