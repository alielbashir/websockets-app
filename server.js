import { Server } from "socket.io";

const io = new Server(3003, {
    cors: {
        origin: "*"
    }
});


io.on('connection', socket => {
    console.log('New User')
    socket.emit('chat-message', 'Hiiii there')
})
