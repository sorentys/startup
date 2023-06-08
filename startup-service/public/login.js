(async () => {
  const username = localStorage.getItem('username'); // Changed variable name from "user_name" to "username"
  const admin_name_element = document.querySelector('#admin_name'); // Changed element ID from "playerName" to "admin_name"

  if (username) {
    admin_name_element.textContent = username;
    setDisplay('login_controls', 'none');
    setDisplay('event_controls', 'block');
  } else {
    setDisplay('login_controls', 'block');
    setDisplay('event_controls', 'none');
  }
})();
  
  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }
  
  async function loginOrCreate(endpoint) {
    const user_name = document.getElementById('user_name')?.value;
    const password = document.getElementById('user_password')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: user_name, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('username', user_name);
      window.location.href = 'meetings.html';
    } else {
      const body = await response.json();
      const modalEl = document.getElementById('msg_modal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }
  
  function seeEvents() {
    window.location.href = 'meetings.html';
  }
  
  function logout() {
    localStorage.removeItem('username');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }
  
  async function getUser(email) {
    let events = [];
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }
  
  function setDisplay(controlId, display) {
    const eventControlEl = document.getElementById(`${controlId}`);
    if (eventControlEl) {
      eventControlEl.style.display = display;
    }
  }

