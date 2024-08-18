var express = require("express");
var router = express.Router();

var funcionarios = [
  {
    id: "1",
    nome: "Joana",
    morada: "Rua da alegria",
    contacto: "912345678",
    email: "utilizador1@mail.com",
    cargo: "ADMIN",
  },
  {
    id: "2",
    nome: "Manuela",
    morada: "Rua da alegria",
    contacto: "912345678",
    email: "utilizador2@mail.com",
    cargo: "NOTADMIN",
  },
  {
    id: "3",
    nome: "Jose",
    morada: "Rua da alegria",
    contacto: "912345678",
    email: "utilizador3@mail.com",
    cargo: "NOTADMIN",
  },
];

router.get("/", function (req, res, next) {
  res.render("employee/employees", { funcionarios: funcionarios });
});

router.get("/:id", function (req, res, next) {
  const id = req.params.id;

  const employee = funcionarios.find((employee) => employee.id === id);

  // Verificar se o funcionário foi encontrado
  if (!employee) {
    res.status(404).send("Funcionário não encontrada");
    return;
  }
  console.log(employee);
  res.render("employee/view", employee);
});

module.exports = router;
