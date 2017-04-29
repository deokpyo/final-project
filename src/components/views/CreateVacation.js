import React from 'react'
import { Form } from 'semantic-ui-react'

export default class CreateVacation extends React.Component {
    constructor() {
        super()
        this.state = {
            vacation: {
                name: '',
                start_date: '',
                end_date: '',
                reason: '',
                status: 'Pending',
                approved: false,
                rejected: false,
            }
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
        //console.log('select: ' + value, name)
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
            name: '',
            start_date: '',
            end_date: '',
            reason: '',
        })
    }

    render() {
        const options = [
            { key: 'vc', text: 'Vacation', value: 'Vacation' },
            { key: 'ps', text: 'Personal', value: 'Personal' },
            { key: 'sk', text: 'Sick', value: 'Sick' },
        ]
        const { name, start_date, end_date, reason } = this.state

        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input label='Name' placeholder='Name' name='name' onChange={this.handleChange.bind(this)} value={name}/>
                    <Form.Select label='Reason' options={options} name='reason' placeholder='Reason' onChange={this.optionChange.bind(this)} value={reason}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input type="date" label='Start Date' placeholder='Start Date' name='start_date' onChange={this.handleChange.bind(this)} value={start_date}/>
                    <Form.Input type="date" label='End Date' placeholder='End Date' name='end_date' onChange={this.handleChange.bind(this)} value={end_date}/>
                </Form.Group>
                <Form.Button onClick={this.handleSubmit.bind(this)}>Submit</Form.Button>
            </Form>
        )
    }
}