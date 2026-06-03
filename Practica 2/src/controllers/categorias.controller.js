const conexion = require('../config/db');

const obtenerCategorias = (req, res) => {

    const sql = 'SELECT * FROM categorias';

    conexion.query(sql, (err, resultados) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json(resultados);
    });
};

const crearCategoria = (req, res) => {

    const { nombre, descripcion } = req.body;

    const sql = `
        INSERT INTO categorias(nombre, descripcion)
        VALUES (?, ?)
    `;

    conexion.query(sql, [nombre, descripcion], (err, resultado) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Categoría creada correctamente'
        });
    });
};

const obtenerCategoriaPorId = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT
            c.id AS categoriaId,
            c.nombre AS categoria,
            c.descripcion,
            p.id AS productoId,
            p.nombre AS producto,
            p.precio
        FROM categorias c
        LEFT JOIN productos p
            ON c.id = p.categoriaId
        WHERE c.id = ?
    `;

    conexion.query(sql, [id], (err, resultados) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json(resultados);
    });
};

const actualizarCategoria = (req, res) => {

    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const sql = `
        UPDATE categorias
        SET nombre = ?, descripcion = ?
        WHERE id = ?
    `;

    conexion.query(sql, [nombre, descripcion, id], (err, resultado) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json({
            mensaje: 'Categoría actualizada correctamente'
        });
    });
};

const eliminarCategoria = (req, res) => {

    const { id } = req.params;

    const sqlProductos = `
        DELETE FROM productos
        WHERE categoriaId = ?
    `;

    conexion.query(sqlProductos, [id], (err) => {

        if(err){
            return res.status(500).json(err);
        }

        const sqlCategoria = `
            DELETE FROM categorias
            WHERE id = ?
        `;

        conexion.query(sqlCategoria, [id], (err, resultado) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                mensaje: 'Categoría y productos eliminados correctamente'
            });
        });
    });
};

module.exports = {
    obtenerCategorias,
    crearCategoria,
    obtenerCategoriaPorId,
    actualizarCategoria,
    eliminarCategoria
};