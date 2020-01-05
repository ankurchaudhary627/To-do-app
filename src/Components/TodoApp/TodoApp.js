import React, { Component } from 'react'
import Form from './Form'
import ToDoList from './TodoList'

export class TodoApp extends Component {
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
        // const url=this.props.match.url
        console.log('todos',this.state.todosList)
        return (
            <div>
                <h1>My todo app</h1>
                <Form onClickAdd={this.addNewToDo}/>
                <ToDoList toDoList={this.state.todosList } onClickDel={this.delToDo}/>
                {/* <Route exact path={url} render={
                    () =><h3>You're on TodoApp page.</h3>
                }/> */}
            </div>
        )
    }
}

export default TodoApp
