import GestionProductos from 'pages/GestionProductos';
import 'styles/estiloGestionProductos.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom"; 
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return ( 
    <div className="App">
      <Router>
        <Switch>
          <Route path='/productos'>
            <GestionProductos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
