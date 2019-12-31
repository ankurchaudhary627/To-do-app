import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import BackdropFilter from "react-backdrop-filter";

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
        flexDirection: 'column',
        backdropFilter:'blur(0.8)'
      }
  
      return ( // here this.props means whatever is passed to ToDo component
        <BackdropFilter className="to-do-item" filter={"blur(10px)"} style={todoStyle}>
          <li>
          {/* <p style={{width:'100px'}}> */}
            {/* <input type="checkbox" onClick={this.handleChecked}/>{' '} */}
            <Checkbox
              onClick={this.handleChecked}
              color="primary"
            />{' '}
            { this.props.Text }
            {' '}
            <button onClick={this.handleDelete} style={btnStyle}>x</button>
          {/* </p> */}
          </li>
        </BackdropFilter>
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

export default ToDo
