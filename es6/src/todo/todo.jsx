import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from './action-reducers/todo-action-creators.js';

export class ToDo extends React.Component{
  constructor( props ){
    super( props );
  }
  toggleToDo ( id ) {
    console.log(id);
    console.log(this.props);
    this.props.actions.todoDone( id );
  }
  render(){
    console.log('render todo jsx');
    console.log(this.props);
    return(
      <div className="to-do-container" onClick={ this.toggleToDo.bind( this, 1 ) }>
        This is a todo 1.
      </div>
    )
  }
}

ToDo =  connect(
  ( state, componentProps) => { return state },
  ( dispatch ) => ({ actions: bindActionCreators(actionCreators, dispatch)})
)(ToDo);

export default ToDo;
