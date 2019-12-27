import React from 'react'
import {default as UUID} from "uuid"
import './App.css'

class Form extends React.Component {
    state={
        userIp: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();             // this is used to prevent default behaviour of the onSubmit i.e. page reloading
        console.log(this.state.userIp);     // This value is user ip in text box
        
        // this value is passed from APP.js
        // console.log(this.props.ip);

        const data={text:this.state.userIp, id:UUID.v4()}
        this.props.onClickAdd(data);
        this.setState({userIp: ''})
    };
    
    render(){        
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Take Note before you forget!'
                    value={this.state.userIp}
                    onChange={event => this.setState({ userIp : event.target.value })}
                    required 
                />
                <button>Add todo</button>
                </form>
            </div>
        );
    }
}

export default Form;