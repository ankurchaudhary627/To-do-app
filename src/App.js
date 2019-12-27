import React, { Component } from 'react'
import Form from './Form'
import ToDoList from './ToDoList'

class App extends Component {
    // states is class field
    state = {
        todosList:[],
    };

    addNewToDo = (todo) => {
        this.setState(prevState => ({
            todosList : [...prevState.todosList, todo],
        }));
    };

    delToDo = (data) => {
        if(this.state.todosList.length>0) {
            console.log('app',data);
            this.setState({
                todosList: this.state.todosList.filter(function (todo){
                    return todo.id!==data;
                })
            });
        }
    };

    render() {
        return (
            <div>
                <Form title='My todo app' onClickAdd={this.addNewToDo}/>
                <ToDoList toDoList={this.state.todosList } onClickDel={this.delToDo}/>   
                {/* <ToDoList toDoList={this.state.todosList }/>    */}
            </div>
        )
    }
}

export default App


// rce