const http = require('http');
const httpProxy = require('http-proxy');
const hashSum = require('hash-sum');

// Define your backend servers
const servers = [
    { host: 'localhost', port: 3001 },
    { host: 'localhost', port: 3002 },
    { host: 'localhost', port: 3003 },
    // Add more servers as needed
];

// Create a hash function to map client IP addresses to server indices
function getServerIndex(clientIp, serverCount) {
    const hash = hashSum(clientIp);
    return Math.abs(hash) % serverCount;
}

// Create a proxy balancer with IP hashing
const proxy = httpProxy.createProxy();

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    // Get client IP address from the request headers (replace with actual IP header if used behind a proxy)
    const clientIp = req.connection.remoteAddress;
    const serverIndex = getServerIndex(clientIp, servers.length);
    const { host, port } = servers[serverIndex];
    console.log(`clientIp:${clientIp} --- port:${port}`)

    // Proxy the request to the selected server
    proxy.web(req, res, { target: `http://${host}:${port}` });
});

// Listen on port 3000 for incoming requests
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`IP Hash load balancer running on port ${PORT}`);
});
