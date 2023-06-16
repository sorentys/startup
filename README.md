# Conference Scheduler

## Description Deliverables

### Elevator Pitch

Where can organizations find and application to organize their conferences? Many meeting application exist, but Conference Scheduler is focused on conference specific purposes. The user interface, features and backend architecture allow users to create and update events in real time, view the number of attendees committed to the event, and specify important details event attendees will need to know, such at event time and location. 

### Design

![Design Image](Design.png)

Use notability to make backend diagram here:

*Picture*

### Key Features

+ Secure login page
+ Creation of meetings
+ Ability to create, edit, and administrate meeting details
+ Display of attendees
+ Real time updates of attendee information and meeting details


### Technologies

Conference Scheduler will use the following:

+ **HTML:** Implements Two pages. One page is and welcome page to sign in or create an account and create a conference. The second page is for creating conference events and viewing event details.
+ **CSS:** Adjust application page to different window sizes, customize webpage color, and edit line design. 
+ **Javascript:** Supports a login and account feature, meeting pages, apply meeting detail edits, and attendee submissions.
+ **react:**
    + Login
    + Accept meeting and conference detail edits
    + Broadcast meeting and conference detail information to attendees
    + Accept Attendee submissions
+ **DB:** Store administrator, attendees, and meeting and conference details in a database.
+ **Login:** Allow users to make an Conference Scheduler account. Ensure security and safety of account information and provides user authentication.
+ **Websocket:** Will broadcast meeting information to all Conference Scheduler users and update meeting attendee list in real time.
+ **React:** Will take advantage of React web framework.

### HTML Deliverable ([code](https://github.com/sorentys/startup/tree/main/startup-react))

Conference Scheduler will use the following HTML format:

+ **HTML Pages:** One page to provide login and conference creation. A second page to edit and display meeting and attendee details.
+ **Links:** The login and conference page will directly lead to the meeting details page (still in progress). The meeting page will link to meeting and attendee details on the same page.
+ **Text:** Meeting and attendee information will be displayed in text.
+ **Images:** Each meeting detail view will have an alloted space to provide an image (still in progress).
+ **Login:** A username and password input box and input box to create a user account.
+ **Database:** Meeting details and attendee submission information represents data stored in the database (still in progress).
+ **WebSocket:** Meeting details and attendee submission lists represent realtime updates (still in progress).

### CSS Deliverable ([code](https://github.com/sorentys/startup/tree/main/startup-react))

Conference Scheduler will apply the following CSS features:

+ **Header, Footer, and Main Content Body**
+ **Navigation Elements:** The meetings detail view includes tabs and lines to separate meetings and meeting detail views.
+ **Window Re-sizing:** Conference Scheduler will resize to any window size.
+ **Application Elements:** Window coloring and simple intuitive meeting view user interface. 
+ **Application Images:** Each meeting detail will placed space for an image.

### Javascript Deliverable ([code](https://github.com/sorentys/startup/tree/main/startup-react))

Conference Scheduler will use Javascript primarily to provide manipulation and creation of meeting and conference details.

+ **Login:** Entering the correct user account information and pressing login button change the webpage to the meeting or conference detail view. Username will be displayed on top navigation bar.
+ **Database:** Meeting and attendee submission details are stored in a database I hope will be via the cloud. Right now my database is local.
+ **WebSocket:** I will use a function to update the meeting details and attendee list each minute. (In progress, to be continued with websocket)
+ **Application Logic:** The color of the meeting tab will change in the meetings list based when the meeting is created. (In progress, with react possibly)

### react Deliverable ([code](https://github.com/sorentys/startup/tree/main/startup-react))

Conference Scheduler will apply its reacts in the following ways:

+ **Node.js/Express HTTP react:** Conference scheduler uses express and node.js to communicate between frontend and backend process using fetch.
+ **Static Middleware for Frontend:** Express and node.js provide static middleware initiation for the frontend.
+ **Calls to Third Party Endpoints:** Conference schedule fetches to an online source to provide a quote on the about page.
+ **Backend react Endpoints:** Conference scheduler uses fetch to store meeting details and information in a backend array of objects.
+ **Frontend Calls to react Endpoints:** Conference scheduler calls to the backend array to grab information about meetings and meeting details using fetch.

### DB Deliverable ([code](https://github.com/sorentys/startup/tree/main/startup-react))

Conference Scheduler will use a certain database to store and broadcast data, most likely MongoDB.

+ **Create MongoDB Atlas Database:** Conference scheduler will use MongoDB Atlas to store and access data.
+ **Endpoints for Data:** Conference scheduler will use endpoints to send data from mongoDB via its backend to the frontend server.
+ **Store data with MongoDB:** Conference scheduler will post and put new data or updated event information to the MongoDB database.

### Login Deliverable ([code](https://github.com/sorentys/startup/tree/main/startup-react))

Conference Scheduler will include the following login features:

+ **Account Registration:** Allow creation and storage of new user credentials in MongoDB database.
+ **Returning users**: Conference Scheduler lets users return to their meetings pages after verifying their credentials.
+ **Existing User Authentication:** Verifies correct user account credentials before use can access conference and meeting administration.
+ **Restrictions:** Attendees cannot access meetings without credential authentication and authorization.

### Websocket Deliverable ([code](https://github.com/sorentys/startup/tree/main/startup-react))

Conference Scheduler will update meeting and attendee details by implementing the following process:

+ **Backend Communicates with WebSocket Connection:** Conference Scheduler's backend receives frontend calls to websocket to retrieve and send data to other users on the same event page.
+ **Frontend end connects with WebSocket:** Conference scheduler is displays comments made from other users by retrieving information from backend endpoints.
+ **WebSocket Allows for Data Transaction:** Conference scheduler transfers comment data to each user on the same event page.
+ **Data from WebSocket is Displayed in Conference Scheduler:** Comment from any user on the same event page can be seen on the event's live chat tab.

### React Deliverable ([code](https://github.com/sorentys/startup/tree/main/startup-react))

Conference Scheduler implements React in the following ways:

+ **Bundle and Transpile:** Conference Scheduler is bundled using Vite.
+ **Components:** Login, about, and meeting pages use React components to load pages, authorize accounts, and generate content.
+ **Router:** Conference scheduler uses router in its app.jsx file to route between components of the website.
+ **Hooks:** Conference scheduler uses hooks to define the initial and updated state of user login values, about page quotes, and meeting details.
### References

See the following link to my GitHub for this project:

[Conference Scheduler](https://github.com/sorentys/startup)

The following README is structured after a Startup deliverable GitHub page:

[Startup Specification](https://github.com/webprogramming260/.github/blob/main/profile/essentials/startupSpec/startupSpec.md)
