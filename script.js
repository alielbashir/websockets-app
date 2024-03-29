// print data everytime a chat message event is actvated

const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')

const name = prompt('What is your name?')
appendMessage('You joined as ' + name)
socket.emit('new-user', name)

socket.on('chat-message', data => {
    console.log(data)
    appendMessage('${data.name}: ${data.messsage}')
})

socket.on('user-connected', user => {
    appendMessage(`${user} arrived!`)
})

socket.on('user-disconnected', user => {
    appendMessage(`${user} disconnected!`)
})

messageForm.addEventListener('submit', e => {
    // stop page from refreshing by default on submit event
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-chat-message', message)
    appendMessage(`You: ${message}`)

    // clear message after sending
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}