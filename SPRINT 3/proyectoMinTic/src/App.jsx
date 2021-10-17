import 'App.css';
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
// import PublicLayout from 'layouts/PublicLayout';
// import IndexVentas from 'pages/GestionVentas';
import Ventas from 'pages/Ventas';
import Usuarios from 'pages/InterfazUsuarios';
import Login from 'pages/Login';
import Productos from 'pages/Productos';
import Ventas2 from 'pages/Ventas2';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




function App() {
  return (
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
            <Route path='/Ventas'>
              <Ventas/>
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
   
    // <div className="App">
    //    <Usuarios />
    // </div>
  )
}

export default App;
