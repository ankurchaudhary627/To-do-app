import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export class Todo extends Component {
    state = {
        checked: false
    };
    
    handleDelete = () => {
        this.props.Props.onClickDel(this.props.Id);
    };

    componentDidMount() {
        if(this.props.completed) {
            this.setState({ checked: true })
        }
        else
            this.setState({ checked: false })
    }

    handleChecked = (e) => {
        this.setState({ checked: e.target.checked });
        if(e.target.checked)
            this.props.completed=true
        else
            this.props.completed=false
    };

    render() {
        let checkStyle={
            textDecoration: this.state.checked?
                'line-through' : 'none'
        }
        
        return (
            <ListItem button dense ContainerComponent="div">
                <ListItemIcon>
                    <Checkbox
                        edge='start'
                        onChange={e=>this.handleChecked(e)}
                        color="primary"
                    />
                </ListItemIcon>
                <ListItemText id={this.props.id} primary={ this.props.Text } style={checkStyle}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete todo" onClick={this.handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default Todo
