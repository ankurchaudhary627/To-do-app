import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export class Todo extends Component {
    
    handleDelete = () => {
        this.props.Props.onClickDel(this.props.Id);
    };

    handleChecked = (e) => {
        this.props.Props.checkBox(this.props.Id, e.target.checked)
    };

    render() {
        let checkStyle={
            textDecoration: this.props.Completed?
                'line-through' : 'none',
            // color: '#333',
            display: 'block',
            fontSize: '150%',
            fontFamily: 'sans'
        }
        
        return (
            <ListItem button  ContainerComponent="div" >
                <ListItemIcon>
                    <Checkbox
                        edge='start'
                        checked={this.props.Completed? true:false}
                        onChange={e=>this.handleChecked(e)}
                        color="primary"
                    />
                </ListItemIcon>
                <ListItemText id={this.props.Id} primary={<p style={checkStyle}> {this.props.Text}</p> } />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete todo" onClick={this.handleDelete}>
                        <DeleteIcon style={{color:'black'}}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default Todo
