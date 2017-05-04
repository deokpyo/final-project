import React from 'react'
import { Form } from 'semantic-ui-react'

export default class CreateVacation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vacation: {
                emp_id: '',
                start_date: '',
                end_date: '',
                reason: '',
                status: 'Pending',
                approved: false,
                rejected: false,
            },
        }
    }

    handleChange(event) {
        //console.log('update info: ' + event.target.name + '==' + event.target.value)
        let newVacation = Object.assign({}, this.state.vacation)
        newVacation[event.target.name] = event.target.value
        this.setState({
            vacation: newVacation
        })
    }

    optionChange(event, { value, name }) {
        console.log('select: ' + value, name)
        let newVacation = Object.assign({}, this.state.vacation)
        newVacation[name] = value
        this.setState({
            vacation: newVacation
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.vacation)
        this.props.onCreate(this.state.vacation);
        this.setState({
            emp_id: '',
            reason: '',
        })
    }

    render() {
        const { name, start_date, end_date, reason } = this.state
        const options = [
            { key: 'vc', text: 'Vacation', value: 'Vacation' },
            { key: 'ps', text: 'Personal', value: 'Personal' },
            { key: 'sk', text: 'Sick', value: 'Sick' },
        ]

        const name_options = []

        this.props.employees.map((employee, i) => {
            name_options.push({
                text: employee.first_name + ' ' + employee.last_name,
                value: employee._id,
                key: i
            })
        })

        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Select label='Name' options={name_options} name='emp_id' placeholder='Name' onChange={this.optionChange.bind(this)} value={this.state.emp_id} />
                    <Form.Select label='Reason' options={options} name='reason' placeholder='Reason' onChange={this.optionChange.bind(this)} value={this.state.reason} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input type="date" label='Start Date' placeholder='Start Date' name='start_date' onChange={this.handleChange.bind(this)} value={this.state.start_date} />
                    <Form.Input type="date" label='End Date' placeholder='End Date' name='end_date' onChange={this.handleChange.bind(this)} value={this.state.end_date} />
                </Form.Group>
                <Form.Button onClick={this.handleSubmit.bind(this)}>Submit</Form.Button>
            </Form>
        )
    }
}