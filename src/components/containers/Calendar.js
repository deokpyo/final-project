import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from '../../utils/events'
import { calendarAPI } from '../../utils'
require('../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css')
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
//require('style!css!react-big-calendar/lib/css/react-big-calendar.css')
//require('react-big-calendar/lib/css/react-big-calendar.css')

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    calendarAPI.getEvents('/api/calendar', null, (err, events) => {
      //console.log(events)
      this.setState({ events: events })
    })
  }
  render() {
    return (
      <div>
        <BigCalendar
          selectable
          events={this.state.events}
          style={{ height: 600 }}
          defaultView='week'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2017, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
        />
      </div>
    )
  }
}
