import React, { Component, Fragment } from 'react'
import { Route} from 'react-router-dom'

export class About extends Component {
    render() {
        const url=this.props.match.url
        console.log('about props',this.props)
        return (
            <Fragment>
            
            <Route exact path={url} render={
                () =><h3>You're on About page.</h3>
            }/>
            </Fragment>
        )
    }
}

export default About
