import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Welcome from './pages/Welcome.js'
import Projects from './pages/Projects.js'
import NavbarComponent from './components/NavbarComponent'


function App() {
  return (
    <div>

      <div style={{ fontSize: "large", color: "black" }}>
        <NavbarComponent />

      </div>
      <Router>
        <Switch>
          <Route>
            <Route exact path={process.env.PUBLIC_URL + "/Projects"} component={Projects} />
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Welcome} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
