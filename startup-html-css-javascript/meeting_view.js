//function to save event description
function saveDescription() {
    //grab the event description and store it
    localStorage.setItem("event_description", document.getElementById("event-description").value);

    console.log(localStorage.getItem("event_description"));
}

//function to create bullet point for new attendees
function newAttendee() {
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

//function to save event time
function saveTime() {
    //grab the event description and store it
    localStorage.setItem("event_time", document.getElementById("event-time").value);
}

//function to save event location
function saveLocation() {
    //grab the event description and store it
    localStorage.setItem("event_location", document.getElementById("event-location").value);
}

//real time update to attendees?

//have an event listener for all three boxes
//back stroke 

//property on button to enable and backstroke to unenable