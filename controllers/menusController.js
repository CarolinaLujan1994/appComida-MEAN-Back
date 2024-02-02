const Menus = require("../models/Menus");
const Historial = require("../models/HistorialDeCompras")
const historialDeCompras = require("../models/HistorialDeCompras");

exports.crearMenu = async (req, res) => {

    try {
        let menu;

        menu = new Menus(req.body);

        await menu.save();
        res.send();


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerMenu = async (req, res) => {

    try {
        const menus = await Menus.find();
        res.json(menus)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

exports.editarMenu = async (req, res) => {

    try {
        const { nombre, ingredientes, bebida, condimentos } = req.body

        let menu = await Menus.findById(req.params.id)

        if (!menu) {
            response.status(404).json({ msj: "No existe este menú" })
        }

        menu.nombre = nombre;
        menu.ingredientes = ingredientes;
        menu.bebida = bebida;
        menu.condimentos = condimentos;

        menu = await Menus.findOneAndUpdate({ _id: req.params.id }, menu, { new: true })
        res.json(menu)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUnMenu = async (req, res) => {

    try {
        const menu = await Menus.findById(req.params.id);
        if (!menu) {
            res.status(404).json({ msj: "No existe este menú" })
        }

        res.json(menu)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUnMenu = async (req, res) => {

    try {
        const menu = await Menus.findById(req.params.id);
        if (!menu) {
            res.status(404).json({ msj: "No existe este menú" })
        }

        await Menus.findOneAndDelete({ _id: req.params.id })
        res.json({ msj: "Menu eliminado"})

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

exports.historialDeCompras = async (req, res) => {

    try {
        const historial = await historialDeCompras.find();
        res.json(historial)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

exports.comprarMenu = async (req, res) => {

    try {
        let historialDeCompras;

        historialDeCompras = new Historial(req.body);

        await historialDeCompras.save();
        res.send();


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al comprar menú');
    }
}