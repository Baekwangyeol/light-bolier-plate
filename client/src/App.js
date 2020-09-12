import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import NavBar from './components/views/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Login" component={LoginPage} />
        <Route exact path="/Register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
