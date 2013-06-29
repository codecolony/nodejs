var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  var contents = fs.readFile('hello.txt', function(err, contents){
    response.write(contents);
    response.end();
  });
  
}).listen(8080);
