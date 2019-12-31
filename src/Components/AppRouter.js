import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom'

import Home from './home'
import ToDoApp from './ToDoApp'
import Contact from './contact'
import NotFound from './notfound'

// class AppRouter extends Component {
//     render() {
//         return (
//             <Router basename={window.location.pathname || ''}>
//                 <div>
//                     <ul>
//                         <li>
//                             <NavLink exact activeClassName="active" to="/">Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink activeClassName="active" to="/todo">ToDoApp</NavLink>
//                         </li>
//                         <li>
//                             <NavLink activeClassName="active" to="/contact">Contact</NavLink>
//                         </li>
//                     </ul>
//                     <Switch>
//                         <Route exact path="/" component={Home} />
//                         <Route path="/todo" component={ToDoApp} />
//                         <Route path="/contact" component={Contact} />
//                         <Route component={NotFound} />
//                     </Switch>
//                 </div>
//              </Router>
//         )
//     }
// }

const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        navbarName: 'Home',
        component: Home
    },
    {
        path: '/todo',
        sidebarName: 'To-do App',
        navbarName: 'To-do App',
        component: ToDoApp
    },
    {
        path: '/contact',
        sidebarName: 'Contact',
        navbarName: 'Contact',
        component: Contact
    }
];

export default Routes;
