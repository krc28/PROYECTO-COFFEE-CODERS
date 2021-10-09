import 'App.css';
import IndexVentas from 'pages/GestionVentas';
import Usuarios from 'pages/InterfazUsuarios';
import Login from 'pages/Login';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Login'>
          <Login/>
        </Route>
        <Route path='/InterfazUsuarios'>
          <Usuarios/>
        </Route>
        <Route path='/'>
          <Login/>
        </Route>
      </Switch>
    </Router>
   
    // <div className="App">
    //    <Usuarios />
    // </div>
  )
}

export default App;
