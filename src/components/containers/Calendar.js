import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../../utils/events';
require('../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css')
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
//require('style!css!react-big-calendar/lib/css/react-big-calendar.css')
//require('react-big-calendar/lib/css/react-big-calendar.css')

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class Calendar extends Component {
    render() {
        return (
      <div>
        <BigCalendar
          selectable
          events={events}
          style={{height: 600}}
          defaultView='week'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
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
