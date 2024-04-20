const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Bienvenido a la pagina principal");
});

app.post("/", (req, res) => {
  res.status(200).json(generateRandomUser());
});

app.get("/login", (req, res) => {
  res.status(200).send("Pagina de login");
});

app.post("/login", (req, res) => {
  res.status(200).json(generateRandomUser());
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

function generateRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
