//function to grab username
function getUserName() {
    //return username id
    return "Welcome " + localStorage.getItem("username") ?? "User";
}

//quote generator
function displayQuote(data) {
    //grab quote
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
        const containerEl = document.getElementById('quote');
        
        //place quote in html
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
    });
}

//call quote function
displayQuote();

window.onload = function() {
    //when the document is finished loading, replace everything with username id with username value
    document.getElementById("username").innerHTML=getUserName();
}
