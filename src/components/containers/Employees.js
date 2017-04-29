import React from 'react'
import { APIManager } from '../../utils'
import { Employee, CreateEmployee } from '../views'
import { Header, Icon, Table, Divider, Segment } from 'semantic-ui-react'

export default class Employees extends React.Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        APIManager.get('/api/employee', null, (err, response) => {
            if (err) {
                alert('GET ERROR:' + err.message)
                return
            }
            //console.log(JSON.stringify(response))
            let results = response.results
            this.setState({
                list: results
            })
            console.log(this.state.list)
        })
    }

    createEmployee(employee) {
        console.log('new employee: ' + JSON.stringify(employee));
        let newEmployee = Object.assign({}, employee);
        APIManager.post('/api/employee', newEmployee, (err, response) => {
            if (err) {
                alert('POST ERROR: ' + err.message);
                return
            }
            console.log('new employee created: ' + JSON.stringify(response));
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.results);
            this.setState({
                list: updatedList
            })
        })
    }

    // delete employee then update the list
    deleteEmployee(id){
        console.log("delete: " + id);
        APIManager.delete('/api/employee/', id, (err, response) => {
            if(err){
                alert('DELETE ERROR: ' + err.message);
                return
            }
            console.log('EMPLOYEE DELETED: ' + JSON.stringify(response));
            APIManager.get('/api/employee', null, (err, response) => {
            if (err) {
                alert('GET ERROR:' + err.message);
                return
            }
            console.log(JSON.stringify(response));
            let results = response.results;
            this.setState({
                list: results
            })
        })
        })
    }

    render() {
        const employeeList = this.state.list.map((employee, i) => {
            return (
                <Employee delete={this.deleteEmployee.bind(this)} employee={employee} key={i} />
            )
        })

        return (
            <div>
                <Header as='h3'>
                    <Icon name='users' />
                    <Header.Content>Current Employees
                        <Header.Subheader>Manage employee information</Header.Subheader>
                    </Header.Content>
                </Header>
                <Table singleLine selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Phone</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Position</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Admin Access</Table.HeaderCell>
                            <Table.HeaderCell/>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {employeeList}
                    </Table.Body>
                </Table>

                <Header as='h3'>
                    <Icon name='add user' />
                    <Header.Content>New Employee
                        <Header.Subheader>Create a new employee information</Header.Subheader>
                    </Header.Content>
                </Header>
                <Segment>
                    <CreateEmployee onCreate={this.createEmployee.bind(this)} />
                </Segment>
                
            </div>
        )
    }
}