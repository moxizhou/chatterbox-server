
// var url = require("url");
// var messages = {results:[]};
// var rooms = {results:[]};


// exports.handleRequest = function(request, response) {


  // var headers = defaultCorsHeaders;
  // headers['Content-Type'] = "text/plain";


  // console.log("Serving request type " + request.method + " for url " + request.url);
  // var pathname = url.parse(request.url).pathname; // -->/classes/messages

  // if (pathname === "/classes/messages") {
  //   if (request.method === "OPTIONS") {
  //     response.writeHead(201, headers);
  //     response.end();
  //   }
  //   if (request.method === "GET") {
  //     console.log("GET", messages);
  //     response.writeHead(200, headers);
  //     response.end(JSON.stringify(messages));
  //   }
  //   if (request.method ===  "POST") {
  //     request.on('data', function(data){
  //       messages.results.push(JSON.parse(data));
  //     });
  //     response.writeHead(201, headers);
  //     response.end();
  //   }
  // } else if (pathname === "/classes/room1") {
  //     if (request.method === "GET") {
  //       response.writeHead(200, headers);
  //       response.end(JSON.stringify(rooms));
  //     }
  //     if (request.method === "POST") {
  //       request.on('data', function(data){
  //         rooms.results.push(JSON.parse(data));
  //       });
  //       response.writeHead(201, headers);
  //       response.end();
  //     }
//   } else {
//     response.writeHead(404, headers);
//     response.end();
//   };

//  };

// var defaultCorsHeaders = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10 // Seconds.
// };
