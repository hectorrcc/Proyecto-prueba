const express = require("express");
const router = express.Router();
const path = require("path");

const datos = {
  categorias: [
    {
      id: 1,
      nombre: 'Comida'
    },
    {
      id: 2,
      nombre: 'Ropa'
    }
  ],
  productos: [
    {
      id: 1,
      nombre: "Fruta",
      id_categoria: 1,
      marca: "Fruta1",
      ventas: [200, 250, 100,500],
    },
    {
      id: 2,
      nombre: "Carne",
      id_categoria: 1,
      marca: "Carne1",
      ventas: [45, 200, 340, 600],
    },
    {
      id: 3,
      nombre: "Pantalon",
      id_categoria: 2,
      marca: "Adidas",
      ventas: [20, 2, 59, 12],
    },
    {
      id: 4,
      nombre: "Pullover",
      id_categoria: 2,
      marca: "Nike",
      ventas: [10, 23, 1, 57],
    },
  ],
};

//Get all ventas
router.get("/ventas", (req, res) => {
  res.json(datos);
});

module.exports = router;
