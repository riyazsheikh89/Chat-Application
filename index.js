const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
   
  socket.on('send_msg', (data) =>{
    console.log(data);
    io.emit('rcvd_msg', data);
  })

});

app.use("/", express.static(__dirname + "/public"));

server.listen(3000, () => {
  console.log("Server has started on port: 3000");
});