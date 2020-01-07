import React, { Fragment } from 'react';
import { uid } from 'react-uid';
import ToDo from './Todo';
import BackdropFilter from 'react-backdrop-filter';
import { Container } from '@material-ui/core';

export default props => {
  return (
    <Fragment>
      <br />
      <div>
        {/* <div  filter={"blur(10px) "} style={{
                                      backdropFilter: 'blur(10px)',
                                      backgroundColor: 'rgba(255, 255, 255, 0.5)'  }}> */}
        {props.toDoList.map(todo => (
          <ToDo
            key={uid(todo)}
            Id={todo.id}
            Text={todo.text}
            Completed={todo.checked}
            Props={props}
          />
        ))}
      </div>
      {/* </div> */}
    </Fragment>
  );
};
