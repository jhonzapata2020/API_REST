const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const postRoutes = require("./routes/post");
app.use("/servicios", postRoutes);
app.use("/.servicios", () => {
    console.log("Middleware ejecutado")
});

app.get('/',(req, res) => {
    res.send('Hola Mundo!!!!!');
});

mongoose.connect(
    "mongodb+srv://ferrepluss:root@clusterferrepluss.kv6gibu.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log(
        "MongoDB database conection established succesfully\n(conexión de base de datos establecida)"
    );
});

app.listen(10000, () => {
    console.log("Servidor iniciado en el puerto 10000");
});




/*const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("bodyParser");
app.use(bodyParser.json());
const postRoutes = require("./routes/post");
app.use("/servicios", postRoutes);
app.use("/.servicios", () => {
    console.log("Middleware ejecutado")
});
app.get('/',(req, res) => {
    res.send('Hola Mundo!!!!!');
});

mongoose.connect (
    "mongodb+srv://ferrepluss:root@clusterferrepluss.kv6gibu.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const conection = mongoose.conection;
conection.once("open", () => {
    console.log(
        "MongoDB database conection established succesfully/n(conexion de base de datos establecida"
    );

});
app.listen(10000);*/