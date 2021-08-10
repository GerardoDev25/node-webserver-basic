const hbs = require("hbs");
const express = require("express");

const app = express();
const port = 8080;

// ? handleBars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// ? servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
   res.render("home", {
      name: "Gerardo Miranda",
      title: "Curso de node",
   });
});

app.get("/elements", (req, res) => {
   res.render("partials/elements", {
      name: "Gerardo Miranda",
      title: "Curso de node",
   });

   // res.sendFile(__dirname + "/public/elements.html");
});

app.get("/generic", (req, res) => {
   res.render("partials/generic", {
      name: "Gerardo Miranda",
      title: "Curso de node",
   });
   // res.sendFile(__dirname + "/public/generic.html");
});

app.get("*", (req, res) => {
   res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
   console.log(
      `Example app listening at http://localhost:${port}`
   );
});
