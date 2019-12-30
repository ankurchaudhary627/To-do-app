import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'

import './index.css';
import Contact from './Components/contact'
import App from './ToDoApp';
import Home from './Components/home'
import NotFound from './Components/notfound';

const routing = (
    <Router >
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
                <Route exact path="/" component={Home} />
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

