function login() {
    //store username and password
    localStorage.setItem("username", document.getElementById("username").value)
    localStorage.setItem("password", document.getElementById("password").value)
    
    //log get item
    console.log(localStorage.getItem("username"))

    //add where button should lead to
    window.location.href = "meetings.html";
}

