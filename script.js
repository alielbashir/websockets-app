const socket = io('http://127.0.0.1:3000')


// print data everytime a chat message event is actvated
socket.on('chat-message', data => {
    console.log(data)
})