const express = require('express');
const router = express.Router();

const {
    obtenerCategorias,
    crearCategoria,
    obtenerCategoriaPorId,
    actualizarCategoria,
    eliminarCategoria
} = require('../controllers/categorias.controller');

router.get('/', obtenerCategorias);
router.post('/', crearCategoria);
router.get('/:id', obtenerCategoriaPorId);
router.patch('/:id', actualizarCategoria);
router.delete('/:id', eliminarCategoria);

module.exports = router;