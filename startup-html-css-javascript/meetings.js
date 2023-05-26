//function to grab username
function getUserName() {
    //return username id
    return "Welcome " + localStorage.getItem("username") ?? "User";
}

//show username on website
window.onload = function() {
    //when the document is finished loading, replace everything with username id with username value
    document.getElementById("username").innerHTML=getUserName();
}

//function to create new button for new meetings
function newMeeting() {
    //grab meeting name
    localStorage.setItem("meeting_name", document.getElementById("meeting_name").value);

    //create a new button with the meeting_name as the name
    const newButton = document.createElement("li");
    newButton.classList.add("meeting-item");

    //add content to button
    newButton.innerHTML=`<a class="btn btn-outline-light" href="meeting_view_template.html">${localStorage.getItem("meeting_name")}</a>`;

    //push to meetings.html
    document.getElementById("meetings_list").appendChild(newButton);

}

