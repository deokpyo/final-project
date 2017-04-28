// entry component - keep it simple as possible
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/layout/Home'

class App extends React.Component {
    render () {
        return (
            <Router>
                <Home />
            </Router>
        )
    }
}

// render to DOM - only once
ReactDOM.render(<App/>, document.getElementById('root'))