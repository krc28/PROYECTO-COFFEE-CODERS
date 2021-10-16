import HistoricoVentas from 'pages/HistoricoVentas';
import 'styles/estiloHistoricoVentas.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom"; 
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return ( 
    <div className="App">
      <Router>
        <Switch>
          <Route path='/historicoventas'>
            <HistoricoVentas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
