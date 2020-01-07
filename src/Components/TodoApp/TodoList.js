import React, { Fragment } from 'react'
import {uid} from 'react-uid'
import ToDo from './Todo'
import BackdropFilter from "react-backdrop-filter";
import { Container } from '@material-ui/core';

export default (props) => {
    return (
      <Fragment>
        <br />
        <br />
        <Container>
          <BackdropFilter  filter={"blur(10px) "} style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}canvasFallback={true}>
              {
                props.toDoList.map( todo => 
                  <ToDo key={uid(todo)} Id={ todo.id } Text={todo.text} Completed={todo.checked} Props={props}/>
              )}
          </BackdropFilter>
        </Container>
      </Fragment>
    );
}