const eventStore = () => {
    var euid = window.location.pathname.split('/').pop()
    console.log(euid)
    localStorage.setItem('euid',euid)
}

eventStore();

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  
  
  document.querySelector('#logout').addEventListener('click', logout);
  
