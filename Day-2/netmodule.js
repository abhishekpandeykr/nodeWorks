const net = require('net');

var server = net.createServer();

server.on('connection', function () {
  console.log('new client is connected');
})
server.listen(8000, function () {
  console.log(`listening to the port number 8000`);
})
