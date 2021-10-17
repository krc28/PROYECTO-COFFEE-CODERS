import Express from 'express';
<<<<<<< HEAD
import {queryProducto, crearProducto, editarProducto, consultarProducto} from '../controllers/controllerProductos';
=======
import {queryProducto, crearProducto, editarProducto} from '../controllers/controllerProductos.js';
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a


const rutaProductos = Express.Router();

const callbackGeneral = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };


rutaProductos.route('/productos').get((req, res) => {
<<<<<<< HEAD
    console.log('alguien hizo get en la ruta /productos');
=======
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a
    queryProducto(callbackGeneral(res));
  });

rutaProductos.route('/productos').post((req, res) => {
    crearProducto(req.body, callbackGeneral(res));
  });

<<<<<<< HEAD
rutaProductos.route('/productos/:id').get((req, res) => {
    console.log('alguien hizo get en la ruta /productos');
    consultarProducto(req.params.id, callbackGeneral(res));
  });

=======
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a
rutaProductos.route('/productos/:id').patch((req, res) => {
    editarProducto(req.params.id, req.body, callbackGeneral(res));
  });

export default rutaProductos;