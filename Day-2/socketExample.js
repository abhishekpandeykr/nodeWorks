const net = require('net');

const tcpServer = net.createServer(function (socket) {
  console.log('connection establish');
  tcpServer.getConnections(function (err, count) {
    console.log('the number of active connections are ='+count);
  })
  socket.on('end', function() {
    console.log('connection close');
  })
  socket.on('data', function (data) {//example of the readable stream
    console.log('here is the readable stream', data);
    socket.write('server reply' + data)
    //emitting an event, on each event throwing an error
    socket.emit('error', new Error('forcefully injected error'))
  });
//handling each request using error handler!
  socket.on('error', function (error) {
    console.log('something went wrong here!');
  })
})
//to restrict he connection numbers
tcpServer.maxConnections = 10;

tcpServer.listen(function () {
  const port = tcpServer.address().port;
  console.log('listening to the port number given by os', port);
})
