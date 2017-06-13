const net = require('net');
var sockets = [];
const server = net.Server(function (socket) {
  sockets.push(socket);

  socket.on('data', function (d) {
    for(var i = 0; i < sockets.length ; i++) {
      if(sockets[i] == socket) continue;
      sockets[i].write(d)
    }
  });
  socket.on('end', function(){
    var i = sockets.indexOf(socket);
    socket.splice(i,1)
  })
})
server.listen(8000);
