// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'chat', 'connected');
};

// Display messages we receive from our friends
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};

// Send a message over the webSocket
function sendMessage() {
  const msg_el = document.querySelector('#new-msg');
  const msg = msg_el.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msg_el.value = '';
  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
  const chat_text = document.querySelector('#chat-text');
  chat_text.innerHTML =
    `<div><span class="${cls}">${from}</span>: ${msg}</div>` +
    chat_text.innerHTML;
}

// Send message on enter keystroke
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Disable chat if no name provided
const chat_controls = document.querySelector('#chat-controls');
const chatter_name = document.querySelector('#my-name');
chatter_name.addEventListener('keyup', (e) => {
  chat_controls.disabled = chatter_name.value === '';
});
