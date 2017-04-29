import React from 'react'
import { Table, Button, Confirm } from 'semantic-ui-react'

export default class Employee extends React.Component {
    constructor() {
        super()
        this.state = { open: false }
    }

    show(event) {
        //console.log('id: ' + event.target.id)
        this.setState({ open: true })
    }
    handleConfirm(event, data) {
        //console.log('data.id ' + data.id)
        this.setState({ open: false })
        this.props.delete(data.id)
    }
    handleCancel() { this.setState({ open: false }) }

    render() {
        let access = null
        if (this.props.employee.isEmployer) {
            access = <Table.Cell>Yes</Table.Cell>
        } else {
            access = <Table.Cell>No</Table.Cell>
        }
        return (
            <Table.Row>
                <Table.Cell>
                    {this.props.employee.first_name} {this.props.employee.last_name}
                </Table.Cell>
                <Table.Cell>
                    {this.props.employee.phone}
                </Table.Cell>
                <Table.Cell>
                    {this.props.employee.email}
                </Table.Cell>
                <Table.Cell>
                    {this.props.employee.position}
                </Table.Cell>
                <Table.Cell>
                    {this.props.employee.type}
                </Table.Cell>
                {access}
                <Table.Cell>
                    <Button icon='x' onClick={this.show.bind(this)} />
                    <Confirm
                        id={this.props.employee._id}
                        open={this.state.open}
                        content='Are you sure?'
                        onCancel={this.handleCancel.bind(this)} onConfirm={this.handleConfirm.bind(this)}
                    />
                </Table.Cell>
            </Table.Row>
        )
    }
}