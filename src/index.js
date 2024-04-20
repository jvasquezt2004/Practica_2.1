const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a la pagina principal");
});

app.post("/", (req, res) => {
  res.status(200) / json({ numero: Math.random() * 100 });
});

app.get("/login", (req, res) => {
  res.status(200).send("Pagina de login");
});

app.post("/login", (req, res) => {
  res
    .status(200)
    .json({ usuario: "user", sessionId: Math.floor(Math.random() * 100) });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
