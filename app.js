var express = require('express')
var app = express()
var network = require('net')
var net = network()

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');

  var server = net.createServer((socket) => {
    socket.end('goodbye\n');
  }).on('error', (err) => {
  // handle errors here
    throw err;
  });

  // grab a random port.
  server.listen(() => {
    console.log('opened server on', server.address());
  });
  
});

  
