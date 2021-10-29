

  const toInvite = document.querySelector('#toInvite').value.trim();
  const message = document.querySelector('#message').value.trim();

var mailOptions = {
  from: "Event Planners",
  to: toInvite,
  subject: `You've been invited to {eventName}!`,
  text: message,
}


const newInvite = async (event) => {
  console.log(window.location.params)
    console.log('hello world')
  

    console.log(toInvite)
    //console.log(fromInvite)
    console.log(invite)
    debugger

    

    if (toInvite && invite) {
      const response = await fetch(`/api/invite`, {
        method: 'POST',
        body: JSON.stringify({ toInvite, invite }),
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

    module.exports = {mailOptions}


    document.querySelector('#invite').addEventListener('click', newInvite);
