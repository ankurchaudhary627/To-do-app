import React, { Fragment } from 'react'
import {uid} from 'react-uid'
import ToDo from './Todo'
import BackdropFilter from "react-backdrop-filter";

export default (props) => {
    return (
      <Fragment>
        <br />
        <br />
        
        <BackdropFilter  filter={"blur(10px)"} canvasFallback={true}>
            {props.toDoList.map( todo => <ToDo key={uid(todo)} Id={ todo.id } Text={todo.text} completed={todo.checked} Props={props}/> ) }
            {/* {props.toDoList.map( todo => <ToDo key={ uid(todo) } text={todo.text} /> ) } */}
        </BackdropFilter>
      </Fragment>
    );
}