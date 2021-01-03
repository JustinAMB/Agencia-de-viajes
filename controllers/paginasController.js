import {Viaje} from '../models/Viaje.js';

const paginaInicio=(req,res)=>{
    res.render('inicio',{
        pagina:'Inicio'
    });
}
const paginaTestimoniales=(req,res)=>{
    res.render('testimoniales',{
        pagina:'Testimoniales'
    });
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