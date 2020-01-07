const express = require('express')
const app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);


io.on('connection', (client) => {
    console.log('a user connected')
    client.on('chat', (data) => {
        console.log('Message received -->', data)
        io.emit('chat', data)
    })
});

io.listen(4000, () => {
    console.log('Listening ... 🚀 ')
})
  
  



