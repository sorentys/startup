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

//function to save event information
function saveInformation() {
    //grab the event description and store it
    localStorage.setItem("event_description", document.getElementById("event-description").value);

    //grab the event location and store it
    localStorage.setItem("event_location", document.getElementById("event-time-location").value);
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

//property on button to enable and backstroke to unenable