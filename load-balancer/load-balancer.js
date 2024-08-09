const http = require('http');
const httpProxy = require('http-proxy');

// Define your backend servers
const servers = [
    { host: 'localhost', port: 3001 },
    { host: 'localhost', port: 3002 },
    { host: 'localhost', port: 3003 },
    // Add more servers as needed
];

// Create a round-robin proxy balancer
const proxy = httpProxy.createProxy();

let currentServerIndex = 0;

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    // Get the next server to handle the request
    const { host, port } = servers[currentServerIndex];
    currentServerIndex = (currentServerIndex + 1) % servers.length;
    console.log(`forwarding on port: ${port}`)
    // Proxy the request to the selected server
    proxy.web(req, res, { target: `http://${host}:${port}` });
});

// Listen on port 3000 for incoming requests
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Load balancer running on port ${PORT}`);
});
