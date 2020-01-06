import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

export class Contact extends Component {
    render() {
        const url=this.props.match.url
        console.log('contact props',this.props)
        return (
            <div>
            <Fragment>
                <Route exact path={url} render={
                    () => <h3>You're on Contact page.</h3>
                }/>
                <h1>
                    test
                </h1>

            </Fragment>
            <Fragment>
            <Route exact path={url} render={
                () => <h3>You're on Contact page.</h3>
            }/>
            <h1>
                test
            </h1>
            
        </Fragment>
        <Fragment>
        <Route exact path={url} render={
            () => <h3>You're on Contact page.</h3>
        }/>
        <h1>
            test
        </h1>
        
    </Fragment>
    </div>
        )
    }
}

export default Contact