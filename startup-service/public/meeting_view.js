/*--- general setup ----*/
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
async function loadEventDetails() {
    let load_event;
    //grab the event description and time/location and store it
    let event_description = document.getElementById("event-description");
    let event_time_location = document.getElementById("event-time-location");

    //grab id from url
    const query_string = window.location.search;
    const urlParams =  new URLSearchParams(query_string);
    id = urlParams.get('id');

    //request event
    try {
        const response = await fetch('/api/event/' + id);
        load_event = await response.json();
        console.log(load_event.description);

        //load in details
        event_description.textContent = load_event.description;
        event_time_location.textContent = load_event.time_and_location;

        //store locally
        localStorage.setItem('event', JSON.stringify(load_event));
    }
    catch {
        //local storage
        localStorage.setItem("event", id);
        localStorage.setItem("event_description", document.getElementById("event-description").value);
        localStorage.setItem("event_location", document.getElementById("event-time-location").value);
    }

}
    //save information
async function saveInformation() {
    let updated_event = localStorage.getItem("event");
    updated_event = JSON.parse(updated_event);

    //grab the event description and time/location and store it
    let event_description = document.getElementById("event-description").value;
    let event_time_location = document.getElementById("event-time-location").value;

    updated_event.description = event_description;
    updated_event.time_and_location = event_time_location;

    try {
        const response = await fetch('api/event', {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updated_event),
        });

        // Store events from service
        const new_event = await response.json();
        localStorage.setItem('event', JSON.stringify(new_event));
    }
    catch(error) {
        console.log(error);
        localStorage.setItem("event_description", document.getElementById("event-description").value);
        localStorage.setItem("event_location", document.getElementById("event-time-location").value);
    }
}


//show username on website and event already created
window.onload = function() {
    //when the document is finished loading, replace everything with username id with username value
    document.getElementById("username").innerHTML = getUserName();

    //display events
    loadEventDetails();
}