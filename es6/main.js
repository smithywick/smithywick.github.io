import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import HelloWorld from './src/hello.jsx';
import todoApp from './src/todo/action-reducers/todo-reducers.js';
import ToDo from './src/todo/todo.jsx';


let store = createStore(
  todoApp,
  applyMiddleware( thunk )
);

render(
  <Provider store={ store }>
    <ToDo />
  </Provider>,
  document.body
)

/*
React.render(
  <HelloWorld />,
  <ToDo />
  document.body
);*/
