import superagent from 'superagent'

export default {
    getEvents: (url, params, callback) => {
        superagent
            .get(url).query(params)
            // type of data we're getting
            .set('Accept', 'application/json')
            // call back
            .end((err, resp) => {
                if (err) {
                    callback(err, null);
                    return
                }
                //console.log(resp)
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    // convert to Date object
                    var startString = event.start.date || event.start.dateTime
                    var endString = event.end.date || event.end.dateTime
                    var startDate = new Date(startString)
                    var endDate = new Date(endString)

                    events.push({
                        start: startDate,
                        end: endDate,
                        title: event.summary,
                    })
                })
                callback(null, events)
            })
    },
}