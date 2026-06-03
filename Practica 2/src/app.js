const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const categoriasRoutes = require('./routes/categorias.routes');

app.use('/categorias', categoriasRoutes);

const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log('Servidor corriendo en puerto ' + PUERTO);
});