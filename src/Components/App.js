import React, { Fragment } from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Home from './Layout/Home'
import About from './Layout/About'
import Contact from './Layout/Contact'
import TodoApp from './TodoApp/TodoApp'

import { Component } from 'react'

export default class extends Component {
  render() {
    const theme= createMuiTheme({
      overrides: {
        MuiCssBaseline: {
          "@global": {
            body: {
              backgroundImage:
                "url(https://images.pexels.com/photos/35177/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
            }
          }
        }
      }
    })
    return (
      <BrowserRouter>
      <Fragment>
        <MuiThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route exact path='/' render = {props=><Home {...props} />} />
              <Route path='/todo' render={props=><TodoApp {...props} />}/>
              <Route path='/contact' render = {props=><Contact {...props} />} />
              <Route path='/about' render = {props=><About {...props} />} />
            </Switch>
          </Layout>
        </MuiThemeProvider>
      </Fragment>
    </BrowserRouter>
    )
  }
}
