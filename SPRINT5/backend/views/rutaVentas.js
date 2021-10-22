import Express from 'express';
import {queryVenta, crearVenta, editarVenta} from '../controllers/controllerVentas.js';


const rutaVentas = Express.Router();

const callbackGeneral = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };


rutaVentas.route('/ventas').get((req, res) => {
    queryVenta(callbackGeneral(res));
  });

rutaVentas.route('/ventas').post((req, res) => {
    crearVenta(req.body, callbackGeneral(res));
  });

rutaVentas.route('/ventas/:id').patch((req, res) => {
    editarVenta(req.params.id, req.body, callbackGeneral(res));
  });

export default rutaVentas;