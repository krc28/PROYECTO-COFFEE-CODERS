import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { conectarBD } from './db/dbUsuarios.js';
import rutaUsuarios from './views/rutaUsuarios.js';

dotenv.config({ path: './.env' });
const app = Express();
app.use(Express.json());
app.use(Cors());
app.use(rutaUsuarios);

const main = () => {
    return app.listen(process.env.PORT, () => {
      console.log(`escuchando puerto ${process.env.PORT}`);
    });
  };

conectarBD(main);