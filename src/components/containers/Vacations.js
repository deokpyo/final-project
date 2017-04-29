import React from 'react'
import { APIManager } from '../../utils'
import { Vacation, CreateVacation } from '../views'
import { Header, Icon, Table, Divider, Segment } from 'semantic-ui-react'

export default class Vacations extends React.Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        APIManager.get('/api/vacation', null, (err, response) => {
            if (err) {
                alert('GET ERROR:' + err.message)
                return
            }
            //console.log(JSON.stringify(response))
            let results = response.results
            this.setState({
                list: results
            })
            //console.log(this.state.list)
        })
    }

    createVacation(vacation) {
        //console.log('new vacation: ' + JSON.stringify(vacation));
        let newVacation = Object.assign({}, vacation);
        APIManager.post('/api/vacation', newVacation, (err, response) => {
            if (err) {
                alert('POST ERROR: ' + err.message);
                return
            }
            console.log('VACATION CREATED: ' + JSON.stringify(response));
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.results);
            this.setState({
                list: updatedList
            })
        })
    }

    // delete vacation then update the list
    deleteVacation(id) {
        //console.log("delete: " + id);
        APIManager.delete('/api/vacation/', id, (err, response) => {
            if (err) {
                alert('DELETE ERROR: ' + err.message);
                return
            }
            console.log('VACATION DELETED: ' + JSON.stringify(response));
            APIManager.get('/api/vacation', null, (err, response) => {
                if (err) {
                    alert('GET ERROR:' + err.message);
                    return
                }
                //console.log(JSON.stringify(response));
                let results = response.results;
                this.setState({
                    list: results
                })
            })
        })
    }

    updateVacation(id, data) {
        var url = '/api/vacation/' + id
        var body = { status: data }
        APIManager.put(url, body, (err, response) => {
            if (err) {
                alert('UPDATE ERROR: ' + err.message);
                return
            }
            console.log('STATUS UPDATED: ' + JSON.stringify(response));
            let results = response.results;
            APIManager.get('/api/vacation', null, (err, response) => {
                if (err) {
                    alert('GET ERROR:' + err.message);
                    return
                }
                //console.log(JSON.stringify(response));
                let results = response.results;
                this.setState({
                    list: results
                })
            })
        })
    }

    render() {
        const vacationList = this.state.list.map((vacation, i) => {
            return (
                <Vacation update={this.updateVacation.bind(this)} delete={this.deleteVacation.bind(this)} vacation={vacation} key={i} />
            )
        })
        return (
            <div>
                <Header as='h3'>
                    <Icon name='calendar' />
                    <Header.Content>Time-off Requests
                        <Header.Subheader>Manage employee vacation/personal/sick time-off requests</Header.Subheader>
                    </Header.Content>
                </Header>
                <Table singleLine selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Start Date</Table.HeaderCell>
                            <Table.HeaderCell>End Date</Table.HeaderCell>
                            <Table.HeaderCell>Reason</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell />
                            <Table.HeaderCell />
                            <Table.HeaderCell />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {vacationList}
                    </Table.Body>
                </Table>
                <Header as='h3'>
                    <Icon name='calendar outline' />
                    <Header.Content>New Request
                        <Header.Subheader>Create a time-off request</Header.Subheader>
                    </Header.Content>
                </Header>
                <Segment>
                    <CreateVacation onCreate={this.createVacation.bind(this)} />
                </Segment>
            </div>
        )
    }
}