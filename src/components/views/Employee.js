import React from 'react'
import { Table, Button, Confirm, Icon, Modal, Header, Form, List } from 'semantic-ui-react'

export default class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            confirmOpen: false,
            employee: props.employee
        }
    }

    showConfirm(event) {
        //console.log('showConfirm: ' + data.name)
        event.preventDefault();
        this.setState({ confirmOpen: true })
    }
    showModal(event) {
        //console.log('showModal: ' + data.name)
        this.setState({ modalOpen: true })
    }
    // confirm component
    handleConfirm(event) {
        //console.log('data.id ' + data.id)
        event.preventDefault();
        this.setState({ confirmOpen: false })
        //console.log(this.state.employee._id)
        this.props.delete(this.state.employee._id)
    }
    // confirm component
    handleCancel() {
        event.preventDefault();
        this.setState({ confirmOpen: false })
    }
    // modal component
    cancelModal() {
        event.preventDefault();
        this.setState({ modalOpen: false })
    }

    handleChange(event) {
        //console.log('update info: ' + event.target.name + '==' + event.target.value)
        let newData = Object.assign({}, this.state.employee)
        newData[event.target.name] = event.target.value
        this.setState({
            employee: newData
        })
    }

    submitClick(event, data) {
        event.preventDefault();
        // console.log('submit click: ' + data.id)
        // console.log(this.state.employee)
        this.props.update(this.state.employee)
    }

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
                {/*
                <Table.Cell>
                    <Button icon='write' onClick={this.show.bind(this)} />
                    <Confirm
                        id={this.props.employee._id}
                        open={this.state.confirm.open}
                        content='Are you sure?'
                        onCancel={this.handleCancel.bind(this)} onConfirm={this.handleConfirm.bind(this)}
                    />
                    
                </Table.Cell>*/}
                <Table.Cell>
                    <Modal dimmer='inverted' name='modalOpen' open={this.state.modalOpen} trigger={<Button icon='write' onClick={this.showModal.bind(this)} />}>
                        <Header icon='edit' content='Edit Employee Information' />
                        <Modal.Content>
                            <Modal.Description>
                                    <List>
                                        <List.Item>
                                            <Icon name='user' />
                                            <List.Content>
                                                {this.props.employee.first_name} {this.props.employee.last_name}
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='phone' />
                                            <List.Content>
                                                {this.props.employee.phone} 
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <Icon name='mail' />
                                            <List.Content>
                                                {this.props.employee.email}
                                            </List.Content>
                                        </List.Item> 
                                    </List>
                                
                                <Form>
                                    <Form.Group widths='equal'>
                                        <Form.Input onChange={this.handleChange.bind(this)} label='First Name' placeholder={this.props.employee.first_name} name='first_name' />
                                        <Form.Input onChange={this.handleChange.bind(this)} label='Last Name' placeholder={this.props.employee.last_name} name='last_name' />
                                    </Form.Group>
                                    <Form.Group widths='equal'>
                                        <Form.Input onChange={this.handleChange.bind(this)} label='Phone' placeholder={this.props.employee.phone} name='phone' />
                                        <Form.Input onChange={this.handleChange.bind(this)} label='Email' placeholder={this.props.employee.email} name='email' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Button onClick={this.submitClick.bind(this)}>Submit</Form.Button>
                                        <Form.Button onClick={this.cancelModal.bind(this)}>Cancel</Form.Button>
                                    </Form.Group>
                                    {/*<Form.Group>
                                        <Button onClick={this.showConfirm.bind(this)}>Delete Employee</Button>
                                        <Confirm
                                            basic
                                            id={this.props.employee._id}
                                            name='confirmOpen'
                                            open={this.state.confirmOpen}
                                            header='Delete Employee Information'
                                            content='Are you sure?'
                                            onCancel={this.handleCancel.bind(this)} onConfirm={this.handleConfirm.bind(this)}
                                        />

                                        

                                    </Form.Group>*/}
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                    <Modal size='small' open={this.state.confirmOpen} trigger={<Button icon='x' onClick={this.showConfirm.bind(this)} />} basic>
                        <Header icon='user delete' content='Delete Employee Information' />
                        <Modal.Content>
                            <h3>Are you sure to delete {this.props.employee.first_name} {this.props.employee.last_name}?</h3>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button onClick={this.handleCancel.bind(this)} basic color='red' inverted>
                                <Icon name='remove' /> No
                                                </Button>
                            <Button onClick={this.handleConfirm.bind(this)} color='green' inverted>
                                <Icon name='checkmark' /> Yes
                                                </Button>
                        </Modal.Actions>
                    </Modal>
                </Table.Cell>
            </Table.Row>
        )
    }
}

