const mongoose = require('mongoose')

require('dotenv').config({ path: 'env.env'})

const conectDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
/*             userNewUrlParser: true,
            userUniiedTopology: true,
            useFindAnModify: false */
        })

    } catch (error) {
        console.log(error)
        process.exit(1) //Se detiene la app
    }
}

module.exports = conectDB