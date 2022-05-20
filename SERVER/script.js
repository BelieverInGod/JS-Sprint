const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html ; charset UTF-8'});
    res.end('<h1 text-color="blue">Let me know<h1>');
})

server.listen(8888, '127.0.0.1');
console.log('Server is alive')
