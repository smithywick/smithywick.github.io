import * as TYPEs from './todo-action-types.js';
import { todoDone } from './todo-action-creators.js';
import { combineReducers } from 'redux'
//import * as APP_TYPEs from 'app/app-action-types.js';

import extend from 'lodash';

const todoState = {
  id: 0,
  completed: false
};

export default ( state = todoState, action) => {
  console.log('reducing!');
  switch ( action.type ){
    case TYPEs.TODO_DONE: return{
      id: action.id,
      completed: true
    }
    default: return state
  }
}
/*
export default ( state = todoState, action ) => {
  switch ( action.type ){
    case TYPEs.TODO_DONE: return{
      id: action.id,
      completed: true
    }
    default: return state
  }
}

const todoApp = combineReducers({
  todoCompleted
})

export default todoApp*/
