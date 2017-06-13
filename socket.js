const net = require('net');

const server = net.createServer(function (socket) {
  socket.write('Hello \n');
  socket.write('World! \n')

  socket.on('data',function (data) {
    socket.write(data)
  })
})

server.listen(8000);
