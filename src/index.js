import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'

import './index.css';
import Contact from './contact'
import App from './App';
import Home from './home'
import NotFound from './notfound';

const routing = (
    <Router basename={'/To-do-app/'}>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/todo">ToDoApp</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" render={ () => <Home /> } />
                <Route path="/todo" component={App} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing, 
    document.getElementById('root')
);

