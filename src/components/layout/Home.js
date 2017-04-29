import React from 'react'
import { Main, Nav, Employees, Vacations, Calendar } from '../containers'
// npm packages
import { Link, Route, Switch } from 'react-router-dom'
import { Container, Header, Grid, Icon, Segment, Dimmer, Loader, Image } from 'semantic-ui-react';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Grid stackable>
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}><Segment ><Header as='h2'>
                        <Icon loading name='user circle outline'/>
                            <Header.Content >Employee Tracker
                                <Header.Subheader>Manage your employees</Header.Subheader>
                            </Header.Content>
                        </Header></Segment></Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Nav/>
                        </Grid.Column>
                        <Grid.Column width={13}>
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