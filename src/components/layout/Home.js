import React from 'react'
import { Main, Employees, Vacations } from '../containers'
// npm packages
import { Link, Route, Switch } from 'react-router-dom'
import { Container, Header, Grid, Icon, Segment, Dimmer, Loader, Image } from 'semantic-ui-react';


export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <h2>Employee Tracker</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/employees'>Employee</Link></li>
                    <li><Link to='/vacations'>Vacation</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/employees' component={Employees} />
                    <Route path='/vacations' component={Vacations} />
                </Switch>
            </Container>
        )
    }
}