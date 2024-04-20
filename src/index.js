const express = require("express");
const app = express();
const faker = require("@faker-js/faker");
app.use(express.json());

const randomUserData = {
  nombre: faker.name.findName(),
  email: faker.internet.email(),
  sitioWeb: faker.internet.url(),
  direccion: {
    ciudad: faker.address.city(),
    calle: faker.address.streetName(),
    pais: faker.address.country(),
  },
  imagenPerfil: faker.image.avatar(),
  textoAleatorio: faker.lorem.paragraph(),
};

res.status(200).json(randomUserData);
app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a la pagina principal");
});

app.post("/", (req, res) => {
  res.status(200).json(randomUserData);
});

app.get("/login", (req, res) => {
  res.status(200).send("Pagina de login");
});

app.post("/login", (req, res) => {
  res.status(200).json(randomUserData);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
