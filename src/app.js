const http = require('http');

const port = 3000

const server = http.createServer((req, res) =>{
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Server is active.\n');
});

server.listen(port, () => {
    console.log(`Node.js server listining on http://localhost:${port}/`);
});