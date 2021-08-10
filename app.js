const http = require("http");

http
   .createServer((req, res) => {
    //    res.writeHead(200, { "Content-Type": "text/plane" });
      //   res.writeHead(200, { "Content-Type": "application/json" });
      res.setHeader(
         "Content-disposition",
         "attachment; filename=lista.csv"
      );
      res.writeHead(200, { "Content-Type": "application/csv" });

      res.write("id, nombre\n");
      res.write("1, Gerardo\n");
      res.write("2, Maria\n");
      res.write("3, juan\n");
      res.write("4, pedro\n");
      res.end();
   })
   .listen(8080);
console.log("liste to port, 8080");
