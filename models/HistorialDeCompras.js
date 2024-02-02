const mongoose = require('mongoose')
const Menus = require('./Menus')

const HistorialDeComprasSchema = mongoose.Schema({
    menu: {
        type: String,
        required: true
    },
    fechaDePedido: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('HistorialDeCompras', HistorialDeComprasSchema)