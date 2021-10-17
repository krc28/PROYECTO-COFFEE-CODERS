import Express from 'express';
import {queryProducto, crearProducto, editarProducto} from '../controllers/controllerProductos.js';


const rutaProductos = Express.Router();

const callbackGeneral = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };


rutaProductos.route('/productos').get((req, res) => {
    queryProducto(callbackGeneral(res));
  });

rutaProductos.route('/productos').post((req, res) => {
    crearProducto(req.body, callbackGeneral(res));
  });

rutaProductos.route('/productos/:id').patch((req, res) => {
    editarProducto(req.params.id, req.body, callbackGeneral(res));
  });

export default rutaProductos;