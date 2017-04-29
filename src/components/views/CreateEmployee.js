import React from 'react'
import { Form } from 'semantic-ui-react'

export default class CreateEmployee extends React.Component {
    constructor() {
        super()
        this.state = {
            employee: {
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                position: '',
                type: '',
                info: '',
                isEmployer: false,
            }
        }
    }

    handleChange(event) {
        //console.log('update info: ' + event.target.name + '==' + event.target.value)
        let newEmployee = Object.assign({}, this.state.employee)
        newEmployee[event.target.name] = event.target.value
        this.setState({
            employee: newEmployee
        })
    }

    optionChange(event, { name, value }){
        //console.log('select: ' + value + ' ' + name);
        let newEmployee = Object.assign({}, this.state.employee)
        newEmployee[name] = value
        // check for manager level access
        if(value === 'Manager'){
            newEmployee['isEmployer'] = true
        } else {
            newEmployee['isEmployer'] = false
        }
        this.setState({
            employee: newEmployee
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onCreate(this.state.employee);
        this.setState({
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                position: '',
                type: '',
                info: ''
        })
    }

    render() {
        const options = [
            { key: 'mg', text: 'Manager', value: 'Manager'},
            { key: 'ft', text: 'Full-time', value: 'Full-time'},
            { key: 'pt', text: 'Part-time', value: 'Part-time'},
            { key: 'ct', text: 'Contract', value: 'Contract'}
        ]
        const { first_name, last_name, phone, email, position, type, info } = this.state

        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input label='First Name' placeholder='First Name' name='first_name' onChange={this.handleChange.bind(this)} value={first_name} />
                    <Form.Input label='Last Name' placeholder='Last Name' name='last_name' onChange={this.handleChange.bind(this)} value={last_name}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Phone' placeholder='Phone' name='phone' onChange={this.handleChange.bind(this)} value={phone}/>
                    <Form.Input label='Email' placeholder='Email' name='email' onChange={this.handleChange.bind(this)} value={email}/>
                    </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Position' placeholder='Position' name='position' onChange={this.handleChange.bind(this)} value={position}/>
                    <Form.Select label='Type' options={options} name='type' placeholder='Type' onChange={this.optionChange.bind(this)} value={type}/>
                </Form.Group>
                <Form.TextArea label='Additional Information' placeholder='Additional Information' name='info' onChange={this.handleChange.bind(this)} autoHeight value={info}/>
                <Form.Button onClick={this.handleSubmit.bind(this)}>Submit</Form.Button>
            </Form>
        )
    }
}