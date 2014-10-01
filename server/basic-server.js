var express = require("express");
var http = require("http");
var app = express();
var messages = {results:[]}; //put database in here later

var statusCode = function(number, response) {
  response.writeHead(number);
};

var getMessage = function(request, response) {
  statusCode(200, response);
  response.end(JSON.stringify(messages));
};

var sendMessage = function(request, response) {
  statusCode(201, response);
  request.on('data', function(data){
    messages.results.push(JSON.parse(data));
  })
  response.end();
};

var error = function(request, response){
  statusCode(404, response);
  response.end();
};

app.use(function(request, response, next){
  response.header("access-control-allow-origin", "*");
  response.header("access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.header("access-control-allow-headers", "content-type, accept");
  response.header("access-control-max-age", 30);
  response.header("Content-Type", "text/plain");
  next();
})

app.get("/classes/messages", getMessage)
app.post("/classes/messages", sendMessage)
app.get("*", error)

var port = 3000;
var ip = "127.0.0.1";

var server = http.createServer(app);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
