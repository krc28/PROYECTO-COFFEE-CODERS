import 'App.css';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import GestionVentas from 'pages/GestionVentas';
import Usuarios from 'pages/InterfazUsuarios';
import Login from 'pages/Login';
import GestionProductos from 'pages/GestionProductos';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from 'components/Navbar';




function App() {
  return (
    <Auth0Provider
      domain="coffeecoders-mintic.us.auth0.com"
      clientId="edxTN4GxPbyqKvscYNUQgWamqbtkHUaa"
      redirectUri={window.location.origin}
    >
      <Router>
         <Switch>
           <Route path={['/InterfazUsuarios', '/GestionProductos', '/GestionVentas']}>
              <PrivateLayout>
                <Route path='/InterfazUsuarios'>
                  <Usuarios/>
                </Route>
                <Route path='/Gestionproductos'>
                  <GestionProductos/>
                </Route>
                <Route path='/GestionVentas'>
                  <GestionVentas/>
                </Route>
              </PrivateLayout>
            </Route>
            <Route path={['/']}>
              <AuthLayout>
                <Route path='/'>
                  <Login/>
                </Route>
              </AuthLayout>
            </Route>
        </Switch>
      </Router>
    </Auth0Provider>
   
   
    // <div className="App">
    //    <Usuarios />
    // </div>
  )
}

export default App;
