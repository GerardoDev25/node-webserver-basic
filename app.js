const express = require("express");
const app = express();

const port = 8080

app.get("/", (req, res) => {
   res.send("hola mundo");
});

app.get("/hola-mundo", (req, res) => {
   res.send("hola mundo es otra ruta");
});

app.get("*", (req, res) => {
   res.send("404 page not found");
});

app.listen(port, () => {
   console.log(
      `Example app listening at http://localhost:${port}`
   );
});
