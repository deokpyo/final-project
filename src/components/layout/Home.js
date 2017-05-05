import React from 'react'
import { Main, Nav, Employees, Vacations, Calendar } from '../containers'
// npm packages
import { Link, Route, Switch } from 'react-router-dom'
import { Container, Header, Grid, Icon, Segment } from 'semantic-ui-react';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Grid stackable doubling>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}><Segment ><Header as='h2'>
                        <Icon name='user circle'/>
                            <Header.Content >Employee Tracker
                                <Header.Subheader>Manage your employees</Header.Subheader>
                            </Header.Content>
                        </Header></Segment><Nav/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Switch>
                                <Route exact path='/' component={Main} />
                                <Route path='/calendar' component={Calendar} />
                                <Route path='/employees' component={Employees} />
                                <Route path='/vacations' component={Vacations} />
                            </Switch>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row></Grid.Row>
                </Grid>
            </Container>
        )
    }
}