import { Server } from "socket.io";

const users = {}

const io = new Server(3003, {
    cors: {
        origin: "*"
    }
});


io.on('connection', socket => {
    console.log('New User')
    socket.emit('chat-message', 'Hiiii there')
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', message)
    })

    socket.on('new-user', name => {
        console.log(name, 'connected')
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
})