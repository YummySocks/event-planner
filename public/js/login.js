const loginSection = async (event) => {
  event.preventDefault()
  // This collects the value from the login section
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  localStorage.setItem('user', email)
  if (email && password) {
    // This sends a POST request to the API
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If login is successful, it redirects the browser to the event home page
      location.replace('/')

    } else {
      alert(response.statusText);
    }
  }
};

const signupSection = async (event) => {
  event.preventDefault()
  // This collects the value from the signup section
  const email = document.querySelector('#signupEmail').value;
  const password = document.querySelector('#signupPassword').value;
  const username = document.querySelector('#signupName').value;
  localStorage.setItem('user', email)
  if (email && password && username) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, username }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      location.replace('/')
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login')
  .addEventListener('click', loginSection);

document
  .querySelector('#signup')
  .addEventListener('click', signupSection);