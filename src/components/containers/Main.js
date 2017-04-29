import React from 'react'
import { WorldClock, EmployeeStatus } from '../views'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <WorldClock />
                <EmployeeStatus/>
            </div>
        )
    }
}