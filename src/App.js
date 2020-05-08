import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from './pages/Welcome.js'
import Contact from  './pages/Contact.js'
import Projects from './pages/Projects.js'
import About from './pages/About'

function App() {
  return (
   <Router>
     <Switch>
       <Route>
         <Route exact path ={process.env.PUBLIC_URL + "/"} component={Welcome}/>
         <Route exact path ={process.env.PUBLIC_URL + "/Contact"} component={Contact}/>
         <Route exact path ={process.env.PUBLIC_URL + "/Projects"} component={Projects}/>
         <Route exact path ={process.env.PUBLIC_URL + "/About"} component={About}/>
       </Route>
     </Switch>

   </Router>
  );
}

export default App;
