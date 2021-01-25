const http = require('http');


const requestListener = function(req, res) {
        res.writeHead(200);
var response = ` 
<html>
   <head>
      <title>Backgorund Color</title>
   </head>
   <body style=\"background-color:blue;\">
      <p>Server Ready</p>
   </body>
</html> 
		`;

res.end(response);
}

const server = http.createServer(requestListener);
server.listen(8000);
console.log(`Listening on port 8000 ...`);
