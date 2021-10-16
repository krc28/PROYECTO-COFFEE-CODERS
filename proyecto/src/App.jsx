import './App.css';
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
// import PublicLayout from 'layouts/PublicLayout';
import Ventas from 'page/InterfazVentas';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;








function App() {
  return (
    <Router>
      <Switch>        
        <Route path={['/InterfazUsuarios', '/Productos', '/Ventas']}>
          <PrivateLayout>
            <Route path='/InterfazUsuarios'>
              <Usuarios/>
            </Route>
            <Route path='/productos'>
              <Productos/>
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