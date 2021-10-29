const cancel = (id) =>
  fetch(`/api/event/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });


  document.querySelector('#cancel').addEventListener('click', cancel);