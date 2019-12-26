import React from 'react';

//dependencias
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

//componentes
import Create from './components/Create/Create';
import Filter from './components/Filter/Filter';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ObtainAll from './components/ObtainAll/ObtainAll';
import Home from './components/Home/Home';

import './App.css';

function App() {
  return (
     <div>
      <NavigationBar /> 
      <Switch>
          <Route exact path="/" component={Home} />  
          <Route exact path="/home" component={Home} />  
          <Route exact path="/create" component={Create} />
          <Route exact path="/filter" component={Filter} />
          <Route exact path="/obtain-all" component={ObtainAll} />   
      </Switch>    
      </div>
  );
}

export default App;
