const express = require("express");
const app = express();

const port = 8080;

// ? servir contenido estatico
app.use(express.static("public"));

app.get("/hola-mundo", (req, res) => {
   res.send("hola mundo es otra ruta");
});

app.get("*", (req, res) => {
   // res.send("404 page not found");
   res.sendFile(__dirname + "/public/404.html");
   console.log(__dirname);
});

app.listen(port, () => {
   console.log(
      `Example app listening at http://localhost:${port}`
   );
});
