mailOptions = [];

const newInvite = async () => {
  console.log(window.location.params)
    console.log('hello world')
  
    const fromInvite = document.querySelector('#fromInvite').value.trim();
    const toInvite = document.querySelector('#toInvite').value.trim();
    const message = document.querySelector('#message').value.trim();

    console.log(toInvite)
    console.log(fromInvite)
    console.log(message)
    debugger

    
    var mailOptions = {
      from: "Event Planners",
      to: toInvite,
      text: message,
    }

    if (toInvite && fromInvite && message) {
      const response = await fetch(`/api/invite`, {
        method: 'POST',
        body: JSON.stringify({ toInvite, fromInvite, message }),
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
