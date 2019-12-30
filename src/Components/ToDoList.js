import React from 'react'
import {uid} from 'react-uid'
import './ToDo.css'

// One way of creating todos

// const ToDoList = () =>(
//   <div>
//     <ToDo {...todos[0]}/>
//     <ToDo {...todos[1]}/>
//   </div>
// );

const ToDoList = (props) => {
  return (
    <div>
      {props.toDoList.map( todo => <ToDo key={uid(todo)} Id={ todo.id } Text={todo.text} Props={props}/> ) }
      {/* {props.toDoList.map( todo => <ToDo key={ uid(todo) } text={todo.text} /> ) } */}
    </div>
  );
};

class ToDo extends React.Component {

  state = {
    checked: false
  };

  handleDelete = () => {
    this.props.Props.onClickDel(this.props.Id);
  };

  handleChecked = () => {
    this.setState({checked:!this.state.checked});
  };

  // Each class must have render()  
  render() {

    let todoStyle={
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.state.checked?
      'line-through' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    }

    return ( // here this.props means whatever is passed to ToDo component
      <div className="to-do-item" style={todoStyle}>
        <p style={{width:'100px'}}>
          <input type="checkbox" onClick={this.handleChecked}/>{' '}
          { this.props.Text }
          {' '}
          <button onClick={this.handleDelete} style={btnStyle}>x</button>
        </p>
      </div>
    );   
  }
}

const btnStyle ={
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default ToDoList;