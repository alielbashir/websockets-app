// print data everytime a chat message event is actvated
socket.on('chat-message', data => {
    console.log(data)
})