const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
//Creación del servidor
const app = express();

//Conexión a la BD
connectDB();

app.use(cors())

app.use(express.json());

app.use('/api/menus', require('./routes/menus'))

app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000')
})