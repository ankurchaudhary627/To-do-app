import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

export class Home extends Component {
    render() {
        const url=this.props.match.url
        console.log('home props',this.props)
        return (
            <Fragment>
                <Route exact path={url} render={
                    () => <h3>You're on Home page.</h3>
                }/>
            </Fragment>
        )
    }
}

export default Home
