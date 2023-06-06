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
    let event;
    //grab the event description and time/location and store it
    let event_description = document.getElementById("event-description").value;
    let event_time_location = document.getElementById("event-time-location").value;

    //grab id from url
    const query_string = window.location.search;
    const urlParams =  new URLSearchParams(query_string);
    id = urlParams.get('id');

    //request event
    try {
        const response = await fetch('/api/event/' + id);
        event = await response.json();

        //store locally
        localStorage.setItem('event', JSON.stringify(event));
        
        //load in details
        event_description = event.description;
        event_time_location = event.time_and_location;
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
    let event;
    //grab the event description and time/location and store it
    let event_description = document.getElementById("event-description").value;
    let event_time_location = document.getElementById("event-time-location").value;

    //grab id from url
    const query_string = window.location.search;
    const urlParams =  new URLSearchParams(query_string);
    id = urlParams.get('id');

    //request event
    try {
        const response = await fetch('/api/event/' + id);
        event = await response.json();
    }
    catch {
        //local storage
        localStorage.setItem("event", id);
    }

    event.description = event_description;
    event.time_and_location = event_time_location;

    try {
        const response_2 = await fetch('api/event', {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(event),
        });

        // Store events from service
        const event = await response_2.json();
        localStorage.setItem('event', JSON.stringify(event));
    }
    catch {
        localStorage.setItem("event_description", document.getElementById("event-description").value);
        localStorage.setItem("event_location", document.getElementById("event-time-location").value);
    }

    console.log(event);
}


//show username on website and event already created
window.onload = function() {
    //when the document is finished loading, replace everything with username id with username value
    document.getElementById("username").innerHTML = getUserName();

    //display events
    loadEventDetails();
}