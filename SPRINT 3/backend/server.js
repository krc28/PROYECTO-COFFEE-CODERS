import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { conectarBD } from './db/dbMongo.js';
import rutaUsuarios from './views/rutaUsuarios.js';
import rutaVentas from './views/rutaVentas.js';
import rutaProductos from './views/rutaProductos.js';


dotenv.config({ path: './.env' });
const app = Express();
app.use(Express.json());
app.use(Cors());
app.use(rutaUsuarios);
app.use(rutaVentas);
app.use(rutaProductos);


const main = () => {
    return app.listen(process.env.PORT, () => {
      console.log(`escuchando puerto ${process.env.PORT}`);
    });
  };

conectarBD(main);