import React from 'react'
import { Button, Confirm, Icon, Modal, Header, Form } from 'semantic-ui-react'

export default class EditEmployee extends React.Component {
    render() {
        return (
            <Modal trigger={<Button icon='write' onClick={this.show.bind(this)} />}>
                <Modal.Header>Edit Employee Information</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>{this.props.employee.first_name} {this.props.employee.last_name}</Header>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Input label='First Name' placeholder={this.props.employee.first_name} name='first_name' />
                                <Form.Input label='Last Name' placeholder={this.props.employee.last_name} name='last_name' />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input label='Phone' placeholder={this.props.employee.phone} name='phone' />
                                <Form.Input label='Email' placeholder={this.props.employee.email} name='email' />
                            </Form.Group>
                            <Form.Group>
                                <Form.Button id={this.props.employee._id}>Submit</Form.Button>
                                <Form.Button>Cancel</Form.Button>
                                <Form.Button id={this.props.employee._id}>Delete</Form.Button>
                            </Form.Group>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}