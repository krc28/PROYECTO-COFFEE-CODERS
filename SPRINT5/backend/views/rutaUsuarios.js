import Express from 'express';
import {queryUsuarios, ingresarUsuario, editarUsuarios} from '../controllers/controllerUsuarios.js';


const rutaUsuarios = Express.Router();

const callbackGeneral = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };


rutaUsuarios.route('/usuarios').get((req, res) => {
    queryUsuarios(callbackGeneral(res));
  });

rutaUsuarios.route('/usuarios').post((req, res) => {
    ingresarUsuario(req.body, callbackGeneral(res));
  });

  rutaUsuarios.route('/usuarios/:id').patch((req, res) => {
    editarUsuarios(req.params.id, req.body, callbackGeneral(res));
  });

export default rutaUsuarios;