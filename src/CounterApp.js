import React, { useReducer } from 'react';
import './style.css';
const inititalState = {
  counter: 0,
};
const reducerCounter = (state, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 };
    case 'DECREASE_COUNTER':
      return {
        counter: state.counter !== 0 ? state.counter - 1 : (state.counter = 0),
      };
    case 'RESET_COUNTER':
      return inititalState;
    default:
      throw new Error('Error occured in counter');
  }
};

export default function CounterApp() {
  const [state, dispatch] = useReducer(reducerCounter, inititalState);

  const increaseCounter = () => {
    dispatch({
      type: 'INCREASE_COUNTER',
    });
  };

  const decreaseCounter = () => {
    dispatch({
      type: 'DECREASE_COUNTER',
    });
  };

  const resetCounter = () => {
    dispatch({
      type: 'RESET_COUNTER',
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 7 }}>
        <button type="button" onClick={decreaseCounter}>
          {' '}
          -{' '}
        </button>
        <span>{state.counter}</span>
        <button onClick={increaseCounter}> + </button>
      </div>
      <button onClick={resetCounter}> Reset Counter </button>
    </div>
  );
}

export default CounterApp;