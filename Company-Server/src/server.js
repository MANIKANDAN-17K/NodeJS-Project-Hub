const http = require('http');
const router = require('./routes/router');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    router(req, res);
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});