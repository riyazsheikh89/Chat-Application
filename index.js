const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const connectDB = require('./config/db-config');
const Chat = require('./models/Chat');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socket.on('join_room', (data) => {
    socket.join(data.roomId);
  })
   
  socket.on('send_msg', async (data) =>{
    console.log(data);
    const chat = await Chat.create({
      user: data.username,
      roomId: data.roomId,
      content: data.msg
    })
    io.to(data.roomId).emit('rcvd_msg', data);
  })

});

app.set("view engine", "ejs");
app.use("/", express.static(__dirname + "/public"));

// chat using roomId
app.get('/chat/:roomId', async (req, res) => {
  const chats = await Chat.find({
    roomId: req.params.roomId
  });

  res.render("index", {
    id: req.params.roomId,
    chats: chats
  });
})

server.listen(3000, async () => {
  console.log("Server has started on port: 3000");
  await connectDB();
});