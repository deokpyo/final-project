import React from 'react'
import { slackAPI } from '../../utils'
import { WorldClock, EmployeeStatus } from '../views'
import { Table } from 'semantic-ui-react'

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        slackAPI.getStatus('/api/slack', null, (err, users) => {
            //console.log(users)
            this.setState({ list: users })
            //console.log(this.state.slack)
        })
    }
    render() {
        const slackList = this.state.list.map((user, i) => {
            return (
                <EmployeeStatus user={user} key={i} />
            )
        })
        return (
            <div>
                <WorldClock />
                <Table celled padded selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>Daily Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {slackList}
                    </Table.Body>
                </Table>

                
            </div>
        )
    }
}