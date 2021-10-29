const eventStore = () => {
    var euid = window.location.pathname.split('/').pop()
    localStorage.setItem('euid',euid)
}

eventStore();
var id = localStorage.getItem('euid')

const cancel = async () => {
  const response = await fetch(`/api/event/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
      document.location.replace('/')
  } else {
      alert('something went wrong')
  }
}
  document.querySelector('#cancel').addEventListener('click', cancel);