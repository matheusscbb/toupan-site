import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

import './styles/Global.scss'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/carrinho">
            <CartPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
