import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

export default class EmployeeStatus extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src={this.props.user.image} shape='rounded' size='mini' />
                        <Header.Content>
                            {this.props.user.name}
                            <Header.Subheader>{this.props.user.title}</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>
                    {this.props.user.status}
                </Table.Cell>
            </Table.Row>
        )
    }
}