import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

export default class EmployeeStatus extends React.Component {
    render() {
        return (
            <Table celled padded selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>Daily Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='http://react.semantic-ui.com/assets/images/avatar/small/lena.png' shape='rounded' size='mini' />
                                <Header.Content>
                                    Lena
                <Header.Subheader>Human Resources</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            In-office
          </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='http://react.semantic-ui.com/assets/images/avatar/small/matthew.png' shape='rounded' size='mini' />
                                <Header.Content>
                                    Matthew
                <Header.Subheader>Fabric Design</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            Vacation
          </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='http://react.semantic-ui.com/assets/images/avatar/small/lindsay.png' shape='rounded' size='mini' />
                                <Header.Content>
                                    Lindsay
                <Header.Subheader>Entertainment</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            Remote
          </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Image src='http://react.semantic-ui.com/assets/images/avatar/small/mark.png' shape='rounded' size='mini' />
                                <Header.Content>
                                    Mark
                <Header.Subheader>Executive</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>
                            Sick
          </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}