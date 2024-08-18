var express = require("express");
var router = express.Router();

var eventos = [
  {
    id : "1",
    titulo: "Evento de música",
    data: "12/04/2023",
    hora: "21h:30",
    preco: "25€",
    descricao: "Evento do ano",
  },
  {
    id : "2",
    titulo: "Evento de música",
    data: "12/04/2023",
    hora: "21h:30",
    preco: "25€",
    descricao: "Evento do ano",
  },
  {
    id : "3",
    titulo: "Evento de música",
    data: "12/04/2023",
    hora: "21h:30",
    preco: "25€",
    descricao: "Evento do ano",
  },
  {
    id : "4",
    titulo: "Evento de música",
    data: "12/04/2023",
    hora: "21h:30",
    preco: "25€",
    descricao: "Evento do ano",
  },
];

router.get("/", function (req, res, next) {
  res.render("event/eventsTable", { eventos: eventos });
});

router.get("/:id", function (req, res, next) {
    const id = req.params.id;
  
    const event = eventos.find((event) => event.id === id);
  
    // Verificar se o funcionário foi encontrado
    if (!event) {
      res.status(404).send("Evento não encontrada");
      return;
    }
    console.log(event);
    res.render("event/view", event);
  });

module.exports = router;
