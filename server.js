const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Get the file path based on the request URL
    const filePath = path.join(__dirname, 'doc', req.url === '/' ? 'index.html' : req.url);

    // Read the content of the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            // Determine the appropriate content type based on the file extension
            const extname = path.extname(filePath);
            let contentType = 'text/html';
            if (extname === '.js') {
                contentType = 'text/javascript';
            } else if (extname === '.css') {
                contentType = 'text/css';
            }

            // Set the content type and serve the file content
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
