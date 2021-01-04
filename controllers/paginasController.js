
import {Viaje} from '../models/Viaje.js';
import {Testimonial} from '../models/Testimoniales.js';

const paginaInicio=async (req,res)=>{
    const bdPromise=[];
    bdPromise.push(Testimonial.findAll({limit :3}));
    bdPromise.push(Viaje.findAll({limit :3}));

    try{
        const rs=await  Promise.all(bdPromise);
        res.render('inicio',{
            pagina:'Inicio',
            clase:'home',
            viajes:rs[1],
            testimoniales:rs[0]
        });
    }
    catch(error){
        console.log(error);
    }
    
}
const paginaTestimoniales=async (req,res)=>{
    try{
        const testimoniales= await Testimonial.findAll();
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        });
    }
    catch(error){
        console.log(error);
    }
    
}
const paginaViajes= async (req,res)=>{//req enviar , res recibir
    //bd
    const viajes=await Viaje.findAll();
    res.render('viajes',{
        pagina:'PROXIMOS VIAJES',
        viajes
    });
}
const paginaNosotros=(req,res)=>{//req enviar , res recibir
    res.render('nosotros',{
        pagina:'Nosotros'
    });
}
const paginaDetalleViaje=async (req,res)=>{
    const{viaje}=req.params;
    try{
        const resultado= await Viaje.findOne({where:{slug:viaje}});
        res.render('viaje',{
            pagina:'Informacion Viaje',
            resultado
        })
    }catch(error){
        console.log(error);
    }
}
export{
    paginaInicio,
    paginaViajes,
    paginaTestimoniales,
    paginaNosotros,
    paginaDetalleViaje
}