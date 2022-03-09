import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
db.authenticate()
    .then(() => console.log("sirve"))
    .catch(error => console.log(error))

//habilitar pug
app.set('view engine', 'pug');
//obtener año actual
app.use((req, res, next) => {
    const date = new Date();
    res.locals.year = date.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    console.log(res);
    return next();
});

app.use(express.urlencoded({ extended: true }));

//definir la carpeta publica
app.use(express.static('public'));
app.use('/', router);
const port = process.env.PORT || 400;

app.listen(port, () => {
    console.log(`Funciona ${host}`);
})