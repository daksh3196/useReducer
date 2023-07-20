import React, { useReducer } from 'react';
import './style.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import CounterApp from './CounterApp';
import LoginUseReducer from './Login';

const initialState = { currentPage: 'home' };

const routeReducer = (state, action) => {
  switch (action.type) {
    case 'HOME':
      return { currentPage: '/' };
    case 'COUNTER':
      return { currentPage: '/counter' };
    case 'LOGIN':
      return { currentPage: '/login' };
    default:
      return { currentPage: '/' };
  }
};

export default function App() {
  const [state, dispatch] = useReducer(routeReducer, initialState);
  const routerFunc = (page) => {
    console.log({ type: page });
    dispatch({ type: page });
  };
  return (
    <div>
      <Router>
        {/* <p>Implementing Counter App through useReducer Hook</p> */}
        <div className="header">
          <div className="nav-links">
            <Link
              className="link-item"
              to="/"
              onClick={() => routerFunc('HOME')}
            >
              Home
            </Link>
            <Link
              className="link-item"
              to="/counter"
              onClick={() => routerFunc('COUNTER')}
            >
              CounterApp
            </Link>
            <Link
              className="link-item"
              to="/login"
              onClick={() => routerFunc('LOGIN')}
            >
              LoginApp
            </Link>
          </div>
        </div>
        <h1>useReducer Hook use!</h1>
        <Routes>
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/login" element={<LoginUseReducer />} />
        </Routes>
      </Router>
    </div>
  );
}
