const createNew = async (event) => {
  console.log('hellooooo new york!!! SHut up')
  const title = document.querySelector('#eventTitle').value.trim();
  const location = document.querySelector('#eventLoc').value.trim();
  const description = document.querySelector('#eventDescription').value.trim();
  const date = document.querySelector('#date').value.trim();
  const capacity = document.querySelector('#eventCapacity').value;
  console.log(title)
  console.log(location)
  console.log(description)
  console.log(date)
  console.log(capacity)
  debugger
  if (title && location && description && date && capacity) {
    const response = await fetch(`/api/event`, {
      method: 'POST',
      body: JSON.stringify({ title, location, description, date, capacity }),
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