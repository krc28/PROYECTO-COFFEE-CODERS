import 'App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import IndexUsuario from 'pages/GestionUsuarios';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/gestionUsuarios'>
          <IndexUsuario />
        </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
