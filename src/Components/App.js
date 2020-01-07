import React, { Fragment } from 'react';
import Layout from './Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './Layout/Home';
import About from './Layout/About';
import Contact from './Layout/Contact';
import TodoApp from './TodoApp/TodoApp';

import { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(r => r.json())
      .then(rdata => {
        this.setState({ todos: rdata });
      });
  }

  render() {
    const theme = createMuiTheme({
      overrides: {
        MuiCssBaseline: {
          '@global': {
            body: {
              backgroundImage:
                'url(https://images.pexels.com/photos/131979/pexels-photo-131979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
            }
          }
        }
      }
    });

    return (
      <BrowserRouter>
        <Fragment>
          <MuiThemeProvider theme={theme}>
            <Layout>
              <Switch>
                <Route exact path='/' render={props => <Home {...props} />} />
                <Route
                  path='/todo'
                  render={props => <TodoApp todos={this.state?.todos} />}
                />
                <Route
                  path='/contact'
                  render={props => <Contact {...props} />}
                />
                <Route path='/about' render={props => <About {...props} />} />
              </Switch>
            </Layout>
          </MuiThemeProvider>
        </Fragment>
      </BrowserRouter>
    );
  }
}
