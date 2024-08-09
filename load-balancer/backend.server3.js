// Example backend server on port 3001
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Server 3\n');
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
