import React, { Component } from 'react'

import {default as UUID} from "uuid"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { TextField, InputAdornment } from '@material-ui/core';

export class Form extends Component {
    state={
        userIp: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();             // this is used to prevent default behaviour of the onSubmit i.e. page reloading
        console.log(this.state.userIp);     // This value is user ip in text box
        const userIp=this.state.userIp
        // this value is passed from APP.js
        // console.log(this.props.ip);
        if(!userIp||!userIp.trim())
            alert('No spaces allowed')
        else
        {
            const data={
                text:this.state.userIp, 
                id:UUID.v4(),
                checked: false
            }
            this.props.onClickAdd(data);
            this.setState({userIp: ''})
        }
    };

    render() {
        let fabBtnStyle ={
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto'
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id='standard-primary'
                        label='Take Note before you forget!'
                        color='primary'
                        autoComplete='off'
                        fullWidth={true}
                        InputLabelProps={{          // styles input label
                            style: {
                              color:'white',
                              fontFamily:'sans',
                              fontSize:'150%'
                            }
                          }}
                        inputProps={{
                            style: {
                                color: 'white'
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Fab type='submit' style={fabBtnStyle} color="primary" aria-label="add" size='small'>
                                        <AddIcon />
                                    </Fab>
                                </InputAdornment>
                            )
                        }}
                        value={this.state.userIp}
                        onChange={event => this.setState({ userIp : event.target.value })}
                        required 
                    />
                </form>
            </div>
        )
    }
}

export default Form
