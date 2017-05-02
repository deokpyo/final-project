import request from 'superagent'

const CALENDAR_ID = 'jimmyhong.rocks@gmail.com'
const API_KEY = 'AIzaSyCsEADWQvxqDEOijNkXRZibeEgplXg8d1o';

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export default {

    getEvents: (callback) => {
        request
            .get(url)
            .end((err, resp) => {
                if (err) {
                    callback(err);
                    return
                }
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary,
                    })
                })
                callback(events)

            })
    }
}