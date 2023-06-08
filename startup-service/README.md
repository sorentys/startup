# Startup-service

This folder contains the html make up of Conference Scheduler.

## Layout

### Conference Scheduler includes the following HTML files:

+ [index.html](index.html) - html for the home and login page 
+ [meetings.html](meetings.html) - html for the home view 
+ [meeting1_view.html](meeting1_view.html) & [meeting2_view.html](meeting2_view.html) - to html example for meeting specific pages
+ [about.html](about.html) - html for the information page.

### Conference Scheduler includes the following CSS file:

+ [main.css](main.css) - styling for home page and base for all other pages
+ [meetings.css](meetings.css) - styling for meeting layout page
+ [meeting_view.css](meeting_view.css) - styling for meeting detail page
+ [about.css](about.css) - styling for information page

### Conference Scheduler includes the following Javascript file:

+ [login.js](login.js) - adds functionality to login page to store username and password
+ [meetings.js](meetings.js) - stores meeting information and adds functionality to buttons
+ [meeting_view.js](meeting_view.js) - stores meeting detail information and adds functions to clarify user input process
+ [chat_client.js](chat_client.js) - stores code functions for each event page's websocket live chat box
+ [about.js](about.js) - stores code for updating quotes on about page
+ [database.js](database.js) - stores the code for the website's interactions with a MongoDB database
+ [peer_proxy.js](peer_proxy.js) - stores code for the website's use of websocket
+ [index.js](index.js) - stores the websites main backend code