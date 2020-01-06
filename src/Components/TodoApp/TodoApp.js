import React, { Component } from 'react'
import Form from './Form'
import {default as UUID} from "uuid"
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
            this.setState({
                todosList: this.state.todosList.filter(function (todo){
                    return todo.id!==data;
                })
            });
        }
    };

    checkBoxChanged = (id, complete) => {
        this.setState({
            todosList: this.state.todosList.map(todo=> 
            {
                if(todo.id===id){
                    todo.checked=complete
                }
                return todo
            })
        })
    }

    componentDidMount() {
        this.props.todos.map(ele=>{
            const data={
                text: ele.title,
                id: UUID.v4(),
                checked: ele.completed
            }
            this.addNewToDo(data)
        })
    }

    render() {
        // const url=this.props.match.url
        return (
            <div>
                <h1>Todo app</h1>
                <Form onClickAdd={this.addNewToDo}/>
                <ToDoList toDoList={this.state.todosList } onClickDel={this.delToDo} checkBox={this.checkBoxChanged}/>
                {/* <Route exact path={url} render={
                    () =><h3>You're on TodoApp page.</h3>
                }/> */}
            </div>
        )
    }
}

export default TodoApp
