// print data everytime a chat message event is actvated

const messageForm = document.getElementById('send-container')
socket.on('chat-message', data => {
    console.log(data)
})

messageForm.addEventListener('submit', e => {
    // stop page from refreshing by default on submit event
    e.preventDefault()
})
