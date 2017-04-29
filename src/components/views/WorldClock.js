import React from 'react'
import WorldTime from 'react-world-time'
import { Table } from 'semantic-ui-react'

export default class WorldClock extends React.Component {
    render() {
        return (
            <Table celled padded inverted color={'grey'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>World Clock</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row className='ui center aligned'>
                        <Table.Cell>
                            <WorldTime
                                cities={[{
                                    name: 'Chicago',
                                    tz: 'America/Chicago',
                                    geopoint: {
                                        lat: 41.882599,
                                        lon: -87.620514
                                    }
                                }]}
                            />
                        </Table.Cell>
                        <Table.Cell>                        <WorldTime
                            cities={[{
                                name: 'Creston',
                                tz: 'America/Creston',
                                geopoint: {
                                    lat: 41.058601,
                                    lon: -94.361343
                                }
                            }]}
                        /></Table.Cell>
                        <Table.Cell>
                            <WorldTime
                                cities={[{
                                    name: 'Seoul',
                                    tz: 'Asia/Seoul',
                                    geopoint: {
                                        lat: 37.532600,
                                        lon: 127.024612
                                    }
                                }]}
                            /></Table.Cell>
                        <Table.Cell>                        <WorldTime
                            cities={[{
                                name: 'Manila',
                                tz: 'Asia/Manila',
                                geopoint: {
                                    lat: 14.582919,
                                    lon: 120.979683
                                }
                            }]}
                        /></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}