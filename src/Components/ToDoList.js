import React from 'react'
import {uid} from 'react-uid'
import './ToDo.css'
import ToDo from './ToDo'

// One way of creating todos

// const ToDoList = () =>(
//   <div>
//     <ToDo {...todos[0]}/>
//     <ToDo {...todos[1]}/>
//   </div>
// );

const ToDoList = (props) => {
  return (
    <ul>
      {props.toDoList.map( todo => <ToDo key={uid(todo)} Id={ todo.id } Text={todo.text} Props={props}/> ) }
      {/* {props.toDoList.map( todo => <ToDo key={ uid(todo) } text={todo.text} /> ) } */}
    </ul>
  );
};

export default ToDoList;