import Express from 'express';
import {queryProducto, crearProducto, editarProducto, consultarProducto} from '../controllers/controllerProductos';


const rutaProductos = Express.Router();

const callbackGeneral = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };


rutaProductos.route('/productos').get((req, res) => {
    console.log('alguien hizo get en la ruta /productos');
    queryProducto(callbackGeneral(res));
  });

rutaProductos.route('/productos').post((req, res) => {
    crearProducto(req.body, callbackGeneral(res));
  });

rutaProductos.route('/productos/:id').get((req, res) => {
    console.log('alguien hizo get en la ruta /productos');
    consultarProducto(req.params.id, callbackGeneral(res));
  });

rutaProductos.route('/productos/:id').patch((req, res) => {
    editarProducto(req.params.id, req.body, callbackGeneral(res));
  });

export default rutaProductos;