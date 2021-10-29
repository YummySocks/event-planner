const createNew = async (event) => {
  const title = document.querySelector('#eventTitle').value.trim();
  const location = document.querySelector('#eventLoc').value.trim();
  const description = document.querySelector('#eventDescription').value.trim();
  const date = document.querySelector('#date').value.trim();
  const capacity = document.querySelector('#eventCapacity').value;
  const userEmail = localStorage.getItem('user')
  if (title && location && description && date && capacity) {
    const response = await fetch(`/api/event`, {
      method: 'POST',
      body: JSON.stringify({ title, location, description, date, capacity, userEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Did not create Event');
    }
  }
};

document
  .querySelector('#newEvent')
  .addEventListener('click', createNew)