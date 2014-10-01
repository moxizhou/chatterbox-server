/* Import node's http module: */
var http = require("http");
// var handleRequest = require("./request-handler.js")
// var url = require("url");

var url = require("url");
var messages = {results:[]};
var express = require("express");
var app = express();

app.use(function(request, response, next){
  response.header("access-control-allow-origin", "*");
  response.header("access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.header("access-control-allow-headers", "content-type, accept");
  response.header("access-control-max-age", 10);
  next();
})

app.get("/classes/messages", function(request, response) {
  response.writeHead(200, {'Content-Type': "text/plain"});
  response.end(JSON.stringify(messages));
})
app.post("/classes/messages", function(request, response) {
  response.writeHead(201, {'Content-Type': "text/plain"});
  request.on('data', function(data){
    messages.results.push(JSON.parse(data));
  });
  response.end();
})
app.get("*", function(request, response){
  response.writeHead(404, {'Content-Type': "text/plain"});
  response.end();
})


var port = 3000;
var ip = "127.0.0.1";

var server = http.createServer(app);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
