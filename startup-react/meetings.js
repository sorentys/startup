//function to grab username
function getUserName() {
    //return username id
    return "Welcome " + localStorage.getItem("username") ?? "User";
}

//function got get events
async function loadEvents() {
    let events = [];
    try {
        // Get events from service
        const response = await fetch('/api/events');
        events = await response.json();
  
        // Save the events in case we go offline in the future
        localStorage.setItem('events', JSON.stringify(events));
    } 
    catch {
        // store locally
        const eventsText = localStorage.getItem('events');
        if (eventsText) {
            events = JSON.parse(eventsText);
        }
    }
    //call displayEvents
    displayEvents(events);
}

//display events on meetings page
function displayEvents(events) {
    if (events.length) {
        // Update the DOM with the events
        for (const [i, event] of events.entries()) {
            //create a new button with the meeting_name as the name
            const newButton = document.createElement("li");
            newButton.classList.add("meeting-item");

            //add content to button
            newButton.innerHTML=`<a class="btn btn-outline-light" id="${event._id}" onclick="pressMeeting(this)">${event.name}</a>`;

            //push to meetings.html
            document.getElementById("meetings_list").appendChild(newButton);
        }
    }
}

function pressMeeting(event) {
    //grab meeting _id
    let desired_event = event.id;

    //send user to meeting view page
    window.location.href = "meeting_view_template.html?id=" + desired_event;
}

//show username on website and event already created
window.onload = function() {
    //when the document is finished loading, replace everything with username id with username value
    document.getElementById("username").innerHTML=getUserName();

    //display events
    loadEvents();
}

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

    //create a new button with the meeting_name as the name
    const newButton = document.createElement("li");
    newButton.classList.add("meeting-item");

    //add content to button
    newButton.innerHTML=`<a class="btn btn-outline-light" href="meeting_view_template.html">${event_name}</a>`;

    //push to meetings.html
    document.getElementById("meetings_list").appendChild(newButton);
}

