import express from 'express';
import {
    paginaInicio,
    paginaViajes,
    paginaTestimoniales,
    paginaNosotros,
    paginaDetalleViaje} from '../controllers/paginasController.js';
import {guardarTestimonial
} from '../controllers/testimonialController.js';
const router=express.Router();


router.get('/',paginaInicio);
router.get('/nosotros',paginaNosotros);
router.get('/testimoniales',paginaTestimoniales);
router.get('/viajes',paginaViajes);
router.get('/viajes/:viaje',paginaDetalleViaje);
router.post('/testimoniales',guardarTestimonial);
export default router;