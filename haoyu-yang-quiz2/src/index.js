import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const initialState = {
  sum: 0,
  dices: []
};

function reducer(state = initialState, action) {
  if (action.type === 'CHANGE') {
    return {
      sum: state.sum + action.diff
    };
  } else if (action.type === 'REMOVE') {
    return {
      sum: state.sum + action.diff
    };
  } else {
    return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
