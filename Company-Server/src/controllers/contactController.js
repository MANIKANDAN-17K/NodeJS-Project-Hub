const parseBody = require('../utils/parseBody');

async function handleContactForm(req, res) {
    try {
        const body = await parseBody(req);

        console.log("Contact Form Received:", body);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: "success",
            message: "Form submitted successfully",
            data: body
        }));

    } catch (error) {
        res.writeHead(500);
        res.end("Server Error");
    }
}

module.exports = handleContactForm;