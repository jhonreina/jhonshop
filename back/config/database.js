const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor:${con.connection.host}`)
    }).catch(con => {
        console.log(`Base de datos mongo NO conectada con el servidor:${con.connection.host}`)        
    })
}

module.exports = connectDatabase;