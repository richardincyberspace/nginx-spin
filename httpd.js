const http = require('http');


const requestListener = function(req, res) {
        res.writeHead(200);
        res.end('Server BLUE\n ');
}


const server = http.createServer(requestListener);
server.listen(8000);
console.log(`Listening on port 8000 ...`);
