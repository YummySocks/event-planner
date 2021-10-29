const newInvite = async (event) => {
    console.log('hello world')
    const toInvite = document.querySelector('#toInvite').value.trim();
    const fromInvite = document.querySelector('#fromInvite').value.trim();
    const invite = document.querySelector('#invite').value.trim();
    
    console.log(toInvite)
    console.log(fromInvite)
    console.log(invite)
    debugger

    if (toInvite && fromInvite && invite) {
      const response = await fetch(`/api/invite`, {
        method: 'POST',
        body: JSON.stringify({ toInvite, fromInvite, invite }),
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