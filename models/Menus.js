const mongoose = require('mongoose')

const MenuSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    ingredientes: {
        type: String,
        required: true
    },
    bebida: {
        type: String,
        required: true
    },
    condimentos: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Menus', MenuSchema)