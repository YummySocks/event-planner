const newInvite = async (event) => {
  console.log(window.location.params)
    console.log('hello world')
    const toInvite = document.querySelector('#toInvite').value.trim();
    const fromInvite = document.querySelector('#fromInvite').value.trim();
    const invite = document.querySelector('#invite').value.trim();
    const eventId = localStorage.getItem('euid')
    console.log(eventId)
    console.log(toInvite)
    console.log(fromInvite)
    console.log(invite)
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