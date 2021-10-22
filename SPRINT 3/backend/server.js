import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import { conectarBD } from './db/dbMongo.js';
import rutaUsuarios from './views/rutaUsuarios.js';
import rutaVentas from './views/rutaVentas.js';
import rutaProductos from './views/rutaProductos.js';
// import jwt from 'express-jwt';
// import jwks from 'jwks-rsa';

dotenv.config({ path: './.env' });
const app = Express();
app.use(Express.json());
app.use(Cors());

// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: 'https://coffeecoders-mintic.us.auth0.com/.well-known/jwks.json'
// }),
// audience: 'api-autenticacion-coffeecoders',
// issuer: 'https://coffeecoders-mintic.us.auth0.com/',
// algorithms: ['RS256']
// });

app.use(jwtCheck);
app.use(rutaUsuarios);
app.use(rutaVentas);
app.use(rutaProductos);

const main = () => {
    return app.listen(process.env.PORT, () => {
      console.log(`escuchando puerto ${process.env.PORT}`);
    });
  };

conectarBD(main);