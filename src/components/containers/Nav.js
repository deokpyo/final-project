import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import style from './styles';

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            activeItem: 'home'
        }
    }

    handleClick(event) {
        //console.log('cick name: ' + event.target.id)
        this.setState({
            activeItem: event.target.id
        })
    }

    render() {
        const { activeItem } = this.state;
        const styles = style.nav;
        return (
            <Menu style={styles} widths={4} icon='labeled' size='massive'>
                <Menu.Item as={Link} to="/" id='home' active={activeItem === 'home'} onClick={this.handleClick.bind(this)}><Icon name='home' />Home</Menu.Item>
                <Menu.Item as={Link} to='/calendar' id='calendar' active={activeItem === 'calendar'} onClick={this.handleClick.bind(this)}><Icon name='calendar' />Calendar</Menu.Item>
                <Menu.Item as={Link} to='/employees' id='employees' active={activeItem === 'employees'} onClick={this.handleClick.bind(this)}><Icon name='id badge' />Employees</Menu.Item>
                <Menu.Item as={Link} to='/vacations' id='vacations' active={activeItem === 'vacations'} onClick={this.handleClick.bind(this)}><Icon name='time' />Time-off</Menu.Item>
            </Menu>
        )
    }
}