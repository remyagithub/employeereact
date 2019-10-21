import React from 'react';
import './App.css';
import login from './Login';
import dashboard from './dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (
  <Router>
    <div className="app">
       <Route exact path="/" component={ login } />
       <Route exact path="/dashboard" component={ dashboard } />
     </div>

  </Router>
);


export default App;
