const eventStore = () => {
    var euid = window.location.pathname.split('/').pop()
    console.log(euid)
    localStorage.setItem('euid',euid)
}

eventStore();