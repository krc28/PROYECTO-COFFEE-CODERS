import Express from 'express';
import {queryVenta, crearVenta, editarVenta, consultarVenta} from '../controllers/controllerVentas';


const rutaVentas = Express.Router();

const callbackGeneral = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };


rutaVentas.route('/ventas').get((req, res) => {
    console.log('alguien hizo get en la ruta /ventas');
    queryUsuarios(callbackGeneral(res));
  });

rutaVentas.route('/ventas').post((req, res) => {
    crearVenta(req.body, callbackGeneral(res));
  });

rutaVentas.route('/ventas/:id').get((req, res) => {
    console.log('alguien hizo get en la ruta /ventas');
    consultarVenta(req.params.id, callbackGeneral(res));
  });

rutaVentas.route('/ventas/:id').patch((req, res) => {
    editarVenta(req.params.id, req.body, callbackGeneral(res));
  });

export default rutaVentas;