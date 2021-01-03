
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
const app=express();
db.authenticate()
    .then(()=>console.log("sirve"))
    .catch(error=>console.log(error))
const port =process.env.PORT || 400;
//habilitar pug
app.set('view engine','pug');
//obtener año actual
app.use((req,res,next)=>{
    const date=new Date();
    res.locals.year=date.getFullYear();
    res.locals.nombresitio="Agencia de Viajes";
    console.log(res);
    return next();
});

app.use(express.urlencoded({extended:true}));

//definir la carpeta publica
app.use(express.static('public'));
app.use('/',router);

app.listen(port,()=>{
    console.log(`Funciona ${port}`);
})