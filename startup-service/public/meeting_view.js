//function to grab username
function getUserName() {
    //return username id
    return "Welcome " + localStorage.getItem("username") ?? "User";
}

//have an event listener for information input in description, time, and location
document.getElementById("event-time-location").addEventListener("keypress", timeEventColor);
document.getElementById("event-description").addEventListener("click", descriptionColor);

//function to change color of accordion titles
function timeEventColor() {
    //grab text to change color and change color
    document.getElementById("button_time_location").style.color = "black";
}

//function to change color of accordion titles
function descriptionColor() {
    //grab text to change color and change color
    document.getElementById("button_description").style.color = "black";
}

//add event listener for when saved
document.getElementById("save_button").addEventListener("click", saveAlert);

function saveAlert() {
    //change color of save div border
    document.getElementById("save-container").style.borderColor = "rgb(198, 195, 226)";

    //let user know everything saved
    alert ("Saved!");
}

//function to create bullet point for new attendees
async function newAttendee() {
    //grab attendee name
    localStorage.setItem("attendee_name", document.getElementById("attendee-name").value);

    //create a new button with the meeting_name as the name
    const newItem = document.createElement("li");
    newItem.classList.add("attendee_list");

    //add content to button
    newItem.innerHTML=`<li>${localStorage.getItem("attendee_name")}</li>`;

    //push to meetings.html
    document.getElementById("attendee_list").appendChild(newItem);
}


//function to save event information
async function saveInformation() {
    events = [];
    current_event = [];
    //grab the event description and time/location and store it
    let event_description = document.getElementById("event-description").value;
    let event_time_location = document.getElementById("event-time-location").value;

    //request event and current event
    try {
        const response = await fetch('/api/events');
        events = await response.json();
        const response_2 = await fetch('/api/current_event');
        current_event = await response_2.json();

        localStorage.setItem('events', JSON.stringify(events));
        localStorage.setItem('current_event', JSON.stringify(current_event));

    }
    catch {
        //local storage
        localStorage.setItem("current_event", localStorage.getItem("event_name"));
        localStorage.setItem("event_description", document.getElementById("event-description").value);
        localStorage.setItem("event_location", document.getElementById("event-time-location").value);
    }

    //loop through and find the right event
    for (const [i, event] of events.entries()) {
        if (current_event == event.name) {
            event.description = event_description;
            events.time_and_location = event_time_location;
        }
        
        console.log(events);
    }
}
/*
//function got get events
async function loadEventDetails() {
    let events = [];
    try {
        // Get events from service
        const response = await fetch('/api/events');
        events = await response.json();
  
        // Save the scores in case we go offline in the future
        localStorage.setItem('events', JSON.stringify(events));
    } catch {
        // If there was an error then just use the last saved scores
        localStorage.setItem("current_event", current_event);
    }
    //call displayEvents
    displayEventDetails(events);

}

async function displayEventDetails(events) {
    if (events.length) {

        //grab current event
        const response = await fetch('/api/current_event');
        const current_event = await response.json();

        // Update the DOM with the scores
        for (const [i, event] of events.entries()) {
            //match event name to right information
            if (current_event = event.name) {
                //set event description
            document.getElementById("event-description").value = event.description;

            //set event location and time
            document.getElementById("event-time-location").value = event.time_and_location;
            }
            
        }
    }
}
*/
//show username on website and event already created
window.onload = function() {
    //when the document is finished loading, replace everything with username id with username value
    document.getElementById("username").innerHTML = getUserName();

    //display events
    //loadEventDetails();
}