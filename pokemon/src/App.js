import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './compoments/layout/NavBar'
import Dashboard from './compoments/layout/Dashboard';
import Pokemon from './compoments/pokemons/Pokemon';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';


import backroundImage from './pattern.png'

function App() {
  return (
    <Router>
    <div className="App" style={{background: `url(${backroundImage})`}}>
     <NavBar />
     <div className="container">
       <Switch>
         <Route exact path ="/" component={Dashboard} />
         <Route exact path ="/pokemon/:pokemonIndex" component={Pokemon} />
       </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
