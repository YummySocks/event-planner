const loginSection = async (event) => {
    event.preventDefault();
  
    // This collects the value from the login section
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (email && password) {
      // This sends a POST request to the API
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If login is successful, it redirects the browser to the event home page
        document.location.replace('/home');
      } else {
        alert(response.statusText);
      }
    }
  };

  const signupSection = async (event) => {
    event.preventDefault();
  
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
        document.location.replace('/home');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.row')
    .addEventListener('submit', loginSection);
  
  document
    .querySelector('.row')
    .addEventListener('submit', signupSection);