import 'App.css';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import IndexVentas from 'pages/GestionVentas';
import Usuarios from 'pages/InterfazUsuarios';
import Login from 'pages/Login';
import Productos from 'pages/Productos';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




function App() {
  return (
    <Router>
      <Switch>
        <Route path='/productos'>
          <Productos/>
        </Route>
        <Route path='/InterfazUsuarios'>
            <Usuarios/>
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
