import React, { Component } from 'react'
import { Container } from '@material-ui/core'

import NavBar from './Components/NavBar'
import AppRouter from './Components/AppRouter'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <AppRouter />
                </Container>
            </div>
        )
    }
}

export default App
