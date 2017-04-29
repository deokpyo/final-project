import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
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
            <Menu style={styles} pointing secondary vertical>
                <Menu.Item as={Link} to="/" id='home' active={activeItem === 'home'} onClick={this.handleClick.bind(this)}>Home</Menu.Item>
                <Menu.Item as={Link} to='/calendar' id='calendar' active={activeItem === 'calendar'} onClick={this.handleClick.bind(this)}>Calendar</Menu.Item>
                <Menu.Item as={Link} to='/employees' id='employees' active={activeItem === 'employees'} onClick={this.handleClick.bind(this)}>Employees</Menu.Item>
                <Menu.Item as={Link} to='/vacations' id='vacations' active={activeItem === 'vacations'} onClick={this.handleClick.bind(this)}>Time-off</Menu.Item>
            </Menu>
            /*<ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/employees'>Employee</Link></li>
                <li><Link to='/vacations'>Vacation</Link></li>
            </ul>*/
        )
    }
}