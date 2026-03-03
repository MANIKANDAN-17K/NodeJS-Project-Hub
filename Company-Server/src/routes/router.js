const handleContactForm = require('../controllers/contactController');

function router(req, res) {

    const { url, method } = req;

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Welcome to TechNova Solutions</h1>");
    }

    else if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            company: "TechNova Solutions",
            founded: 2024,
            mission: "Building scalable backend systems"
        }));
    }

    else if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            email: "contact@technova.com",
            phone: "+91-9876543210"
        }));
    }

    else if (url === '/contact' && method === 'POST') {
        handleContactForm(req, res);
    }

    else if (url === '/echo' && method === 'POST') {
        let body = [];

        req.on('data', chunk => body.push(chunk));
        req.on('end', () => {
            body = Buffer.concat(body).toString();
            res.writeHead(200);
            res.end(body);
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 - Route Not Found");
    }
}

module.exports = router;