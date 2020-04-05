// RUN THE SERVER
var express = require('express');
var app = express();
var server = app.listen(4000);
app.use(express.static('public'))

console.log("My socket server is running");

var io = require('socket.io')(server);
// ON NEW SOCKET CONNECTION
io.sockets.on('connection', newConnection);
function newConnection(socket){
  console.log('New socket: '+ socket.id);
  // RESEND THE DATA TO ALL THE OTHER CLIENTS
  socket.on('mouse', data => {
    console.log(data);
    socket.broadcast.emit('mouse', data);
  });
}
