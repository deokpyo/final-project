import React from 'react'
import { dbAPI } from '../../utils'
import { Vacation, CreateVacation } from '../views'
import { Header, Icon, Table, Divider, Segment } from 'semantic-ui-react'

export default class Vacations extends React.Component {
    constructor() {
        super()
        this.state = {
            list: [],
            employees: [],
        }
    }

    componentDidMount() {
        dbAPI.get('/api/vacation', null, (err, response) => {
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
        dbAPI.get('/api/employee', null, (err, response) => {
            if (err) {
                alert('GET ERROR:' + err.message)
                return
            }
            //console.log(JSON.stringify(response))
            let results = response.results
            this.setState({
                employees: results
            })
            //console.log(this.state)
        })
    }

    createVacation(vacation) {
        //console.log('new vacation: ' + JSON.stringify(vacation));
        let newVacation = Object.assign({}, vacation);
        let url = '/api/vacation/' + vacation.emp_id
        dbAPI.post(url, newVacation, (err, response) => {
            if (err) {
                alert('POST ERROR: ' + err.message);
                return
            }
            console.log('VACATION CREATED: ' + JSON.stringify(response));
            // let updatedList = Object.assign([], this.state.list);
            // updatedList.push(response.results);
            // this.setState({
            //     list: updatedList
            // })
        })
        dbAPI.get('/api/vacation', null, (err, response) => {
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

    // delete vacation then update the list
    deleteVacation(id) {
        //console.log("delete: " + id);
        dbAPI.delete('/api/vacation/', id, (err, response) => {
            if (err) {
                alert('DELETE ERROR: ' + err.message);
                return
            }
            console.log('VACATION DELETED: ' + JSON.stringify(response));
            dbAPI.get('/api/vacation', null, (err, response) => {
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
        dbAPI.put(url, body, (err, response) => {
            if (err) {
                alert('UPDATE ERROR: ' + err.message);
                return
            }
            console.log('STATUS UPDATED: ' + JSON.stringify(response));
            let results = response.results;
            dbAPI.get('/api/vacation', null, (err, response) => {
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
                <Table singleLine selectable stackable fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Employee ID</Table.HeaderCell>
                            <Table.HeaderCell>Start Date</Table.HeaderCell>
                            <Table.HeaderCell>End Date</Table.HeaderCell>
                            <Table.HeaderCell>Reason</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
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
                    <CreateVacation onCreate={this.createVacation.bind(this)} employees={this.state.employees}/>
                </Segment>
            </div>
        )
    }
}