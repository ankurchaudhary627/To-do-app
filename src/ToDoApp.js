import React, { Component } from 'react'
import Form from './Components/Form'
import ToDoList from './Components/ToDoList'

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
            </div>
        )
    }
}

export default App


// rce