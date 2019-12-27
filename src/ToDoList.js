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

const ToDoList = (props) =>{
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

    let checkBox={
      textDecoration: this.state.checked? 'line-through':''
    }

    return ( // here this.props means whatever is passed to ToDo component
      <div className="to-do-item">
        <input type="checkbox" onClick={this.handleChecked}/>
        <p id="todo-text" style={checkBox}>
          {this.props.Text}
        </p>
        <button onClick={this.handleDelete}>Delete todo</button>
      </div>
    );   
  }
}

export default ToDoList;