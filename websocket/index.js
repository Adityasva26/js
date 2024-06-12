const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

const server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('index.html', function(err, data) {
      if (err) {
        res.writeHead(404);
        res.end('Error: 404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Error: 404 Not Found');
  }
});

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', function connection(ws) {
  console.log('WebSocket client connected');

  ws.on('message', function incoming(message) {
    console.log('Received from client:', message.toString('utf-8'));
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', function close() {
    console.log('WebSocket client disconnected');
  });
});

server.on('upgrade', function upgrade(request, socket, head) {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});

server.listen(3000, () => {
  console.log('HTTP server running on http://localhost:3000');
});
