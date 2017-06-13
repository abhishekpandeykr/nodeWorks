const http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'})
  res.write('Hello \n');
  setTimeout(function () {
    res.end('World!')
  }, 2000)
})
server.listen(8080)
