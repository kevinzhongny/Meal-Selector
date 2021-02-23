import React, { useEffect, useState } from 'react';
import CreateRecipe from './Components/CreateRecipe';
import Recipes from './Components/Recipes';
import Home from './Components/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className='App-header'>
          <Router>
          <div>
            <nav>
              <ul className='link-header'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/recipes">Recipes</Link>
                </li>
                <li>
                  <Link to="/create_recipe">Create Recipe</Link>
                </li>  
              </ul>
            </nav>
  
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/recipes">
                <Recipes />
              </Route>
              <Route path="/create_recipe">
                <CreateRecipe />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
