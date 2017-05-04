import React from 'react'
import { Table, Button, Confirm } from 'semantic-ui-react'

export default class Vacation extends React.Component {
    constructor() {
        super()
        this.state = { 
            open: false
        }
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

    buttonClick(event, data){
        //console.log('click: ' + data.name + 'id: ' + data.id)
        if(data.name === 'Approved'){
            this.props.update(data.id, 'Approved')
        } 
        else if(data.name === 'Rejected') {
            this.props.update(data.id, 'Rejected')
        }
    }


    render() {
        return (
            <Table.Row>
                <Table.Cell>
                    {this.props.vacation.emp_id}
                </Table.Cell>
                <Table.Cell>
                    {this.props.vacation.start_date}
                </Table.Cell>
                <Table.Cell>
                    {this.props.vacation.end_date}
                </Table.Cell>
                <Table.Cell>
                    {this.props.vacation.reason}
                </Table.Cell>
                <Table.Cell>
                    {this.props.vacation.status}
                </Table.Cell>
                <Table.Cell>
                    <Button icon='thumbs up' name='Approved' id={this.props.vacation._id} onClick={this.buttonClick.bind(this)}/>
                    <Button icon='thumbs down' name='Rejected' id={this.props.vacation._id} onClick={this.buttonClick.bind(this)}/>
                    <Button icon='x' onClick={this.show.bind(this)} />
                    <Confirm
                        id={this.props.vacation._id}
                        open={this.state.open}
                        content='Are you sure?'
                        onCancel={this.handleCancel.bind(this)} onConfirm={this.handleConfirm.bind(this)}
                    />
                </Table.Cell>
            </Table.Row>
        )
    }
}