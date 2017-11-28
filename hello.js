var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World, what's up?\n');
}).listen(80, '46.101.253.192');
console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:8080/');
