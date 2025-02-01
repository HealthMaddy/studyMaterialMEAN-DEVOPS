const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Serve a simple HTML file for the client
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// WebSocket logic
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for 'chat message' event
  socket.on('chat message', (msg) => {
    console.log('Message received:', msg);

    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let a = Object.create({})

a[1] = 'hi'
a[2] = 'bye '

console.log(Object.keys(a))


var Parent = function(name, age){
    this.name = name
    this.age = age
}

let fresh = new Parent('raj', 23)
fresh.dob = true

let newOne = Object.create(fresh)
newOne.add = 'weurhwiedn'

for(let i = 0; i< 4; i++){
   setTimeout(()=>console.log(i)) 
}

for(var i = 0; i< 4; i++){
    setTimeout(()=>console.log(i)) 
}
