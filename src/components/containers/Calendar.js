import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from '../../utils/events'
import { calendarAPI } from '../../utils'
require('../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css')

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    calendarAPI.getEvents('/api/calendar', null, (err, events) => {
      console.log(events)
      this.setState({ events: events })
    })
  }
  render() {
    return (
      <BigCalendar
        selectable
        events={this.state.events}
        style={{ height: 500 }}
        defaultView='month'
        defaultDate={new Date()}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={(slotInfo) => alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
          `\nend: ${slotInfo.end.toLocaleString()}`
        )}
      />
    )
  }
}
