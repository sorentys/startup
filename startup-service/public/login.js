function login() {
    //store username and password
    localStorage.setItem("username", document.getElementById("username").value)
    
    //log get item
    console.log(localStorage.getItem("username"))

    //add where button should lead to
    window.location.href = "meetings.html";
}

