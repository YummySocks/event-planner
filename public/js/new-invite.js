const newInvite = async () => {
    const toInvite = document.querySelector('#toInvite').value.trim();
    const fromInvite = document.querySelector('#fromInvite').value.trim();
    const invite = document.querySelector('#invite').value.trim();
    const eventId = localStorage.getItem('euid')
    if (toInvite && eventId) {
      const response = await fetch(`/api/invite`, {
        method: 'POST',
        body: JSON.stringify({ toInvite, eventId}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Did not create invite');
      }
    }
  };
  
  document
    .querySelector('#send')
    .addEventListener('click', newInvite)