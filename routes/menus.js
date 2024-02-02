//Rutas para los menus
const express = require('express');
const router = express.Router();
const menusController = require('../controllers/menusController')

// api/menus
router.post('/crearMenu', menusController.crearMenu);
router.get('/obtenerMenu', menusController.obtenerMenu);
router.put('/editarMenu/:id', menusController.editarMenu);
router.get('/obtenerUnMenu/:id', menusController.obtenerUnMenu);
/* router.delete('/eliminarUnMenu/:id', menusController.eliminarUnMenu); */
router.post('/comprarMenu', menusController.comprarMenu);

// obtener el historial de compras
router.get('/obtenerHistorialDeCompras', menusController.historialDeCompras)

module.exports = router