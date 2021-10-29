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

  const cancel = (id) =>
  fetch(`/api/event/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  document.querySelector('#logout').addEventListener('click', logout);
  
  document.querySelector('#cancel').addEventListener('click', cancel);