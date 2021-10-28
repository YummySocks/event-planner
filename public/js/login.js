const loginSection = async () => {
    // This collects the value from the login section
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
  
    if (email && password) {
      // This sends a POST request to the API
      console.log("email and password worked!")
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If login is successful, it redirects the browser to the event home page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  const signupSection = async () => {
    // This collects the value from the signup section
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();
    const name = document.querySelector('#signupName').value.trim();
  
    if (email && password && name) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
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