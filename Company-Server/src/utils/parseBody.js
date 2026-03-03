function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            try {
                const parsed = Buffer.concat(body).toString();
                resolve(parsed);
            } catch (error) {
                reject(error);
            }
        });
    });
}

module.exports = parseBody;