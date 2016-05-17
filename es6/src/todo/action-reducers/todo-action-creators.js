import * as TYPEs from './todo-action-types.js'

export function todoDone( id ){
  return ( dispatch ) => {
    dispatch({
      type: TYPEs.TODO_DONE,
      completed: true,
      id: id
    });
  }
}
