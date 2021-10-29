const uEmail = localStorage.getItem('user')

const getEvents = async () => {
    console.log(uEmail)
    const response = await fetch('/',{
        method: 'POST',
        body: JSON.stringify({ uEmail }),
        headers: {
            'Content-Type': 'application/json',
          },
    })

    if(response.ok) {
        console.log('you made it!!')
        console.log(response)
    } else {
        console.log(response)
        console.log('oops')
    }
}

getEvents();