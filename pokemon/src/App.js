import React from 'react';
import NavBar from './compoments/layout/NavBar'

import Dashboard from './compoments/layout/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
function App() {
  return (
    <div className="App">
     <NavBar />
     <div className="container">
       <Dashboard />
     </div>
    </div>
  );
}

export default App;
