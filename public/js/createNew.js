const createNew = async (event) => {
    event.preventDefault();

  const title = document.querySelector('#eventTitle').value.trim();
  const location = document.querySelector('#eventLoc').value.trim();
  const description = document.querySelector('#eventDescription').value.trim();
  const from = document.querySelector('#from').value.trim();
  const to = document.querySelector('#to').value.trim();

  if (title && location && description && from && to) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({ title, location, description, from, to }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert('Did not create Event');
    }
  }
};