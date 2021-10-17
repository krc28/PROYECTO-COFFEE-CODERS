import Express from 'express';
<<<<<<< HEAD
import {queryVenta, crearVenta, editarVenta, consultarVenta} from '../controllers/controllerVentas';
=======
import {queryVenta, crearVenta, editarVenta} from '../controllers/controllerVentas.js';
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a


const rutaVentas = Express.Router();

const callbackGeneral = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };


rutaVentas.route('/ventas').get((req, res) => {
<<<<<<< HEAD
    console.log('alguien hizo get en la ruta /ventas');
    queryUsuarios(callbackGeneral(res));
=======
    queryVenta(callbackGeneral(res));
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a
  });

rutaVentas.route('/ventas').post((req, res) => {
    crearVenta(req.body, callbackGeneral(res));
  });

<<<<<<< HEAD
rutaVentas.route('/ventas/:id').get((req, res) => {
    console.log('alguien hizo get en la ruta /ventas');
    consultarVenta(req.params.id, callbackGeneral(res));
  });

=======
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a
rutaVentas.route('/ventas/:id').patch((req, res) => {
    editarVenta(req.params.id, req.body, callbackGeneral(res));
  });

export default rutaVentas;