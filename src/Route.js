// App.js
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import App from './App';
// import CounterApp from './CounterApp';

// Reducer function to handle routing state
const reducer = (state, action) => {
  switch (action.type) {
    case 'COUNTER':
      return { currentPage: 'counter' };
    case 'HOME':
      return { currentPage: 'home' };
    default:
      return { currentPage: '/' };
  }
};

const initialState = { currentPage: 'home' };

const Route = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={() => dispatch({ type: 'HOME' })}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/counter" onClick={() => dispatch({ type: 'COUNTER' })}>
                Counter App
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            {/* <App /> */}
          </Route>
          <Route path="/counter">{/* <CounterApp /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Route;
