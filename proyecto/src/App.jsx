import './App.css';
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
// import PublicLayout from 'layouts/PublicLayout';
import Ventas from 'page/InterfazVentas';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>        
        <Route path={['/InterfazVentas']}>
          <PrivateLayout>
            <Route path='/InterfazVentas'>
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
    //    <Ventas />
    // </div>
  )
}

export default App;