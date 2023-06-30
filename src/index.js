import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle} from "./GlobalStyle"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  if (action.type === "addTask") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          content: action.payload,
        },
      ],
    };
  }

  return state;

};

const store =  configureStore({ reducer: tasksReducer });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
