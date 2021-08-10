const http = require("http");

http
   .createServer((req, res) => {
      res.write("hola mundo");
      res.end();
   })
   .listen(8080);
console.log("liste to port, 8080");
