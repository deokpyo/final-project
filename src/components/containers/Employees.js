import React from 'react'
import { APIManager } from '../../utils'

export default class Employees extends React.Component {
    constructor(){
        super()
        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        APIManager.get('/api/employee', null, (err, response) => {
            if (err) {
                alert('GET ERROR:' + err.message)
                return
            }
            console.log(JSON.stringify(response))
            let results = response.results
            this.setState({
                employees: results
            })
            console.log(this.state.employees)
        })
    }

    render () {
        return (
            <div>Employees Page</div>
        )
    }
}